import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

// ステータスバーの高さ
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
// TODOを保持するKey/Valueストアのキー
const TODO_KEY = "@todoapp.todo";

interface Item {
  index: number;
  title: string;
  done: boolean;
}

interface State {
  todo: Item[];
  currentIndex: number;
  inputText: string;
  filterText: string;
}

interface Props {}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      currentIndex: 0,
      inputText: "",
      filterText: ""
    };
  }

  componentDidMount = () => {
    const _ = this.loadTodo();
  };

  loadTodo = async () => {
    try {
      const todoString = await AsyncStorage.getItem(TODO_KEY);
      if (todoString) {
        const todo: Item[] = JSON.parse(todoString);
        const currentIndex = todo.length;
        this.setState({ todo: todo, currentIndex: currentIndex });
      }
    } catch (e) {
      console.log(e);
    }
  };

  saveTodo = async todo => {
    try {
      const todoString = JSON.stringify(todo);
      await AsyncStorage.setItem(TODO_KEY, todoString);
    } catch (e) {
      console.log(e);
    }
  };

  onAddItem = () => {
    const title = this.state.inputText;
    if (title === "") {
      return;
    }
    const index = this.state.currentIndex + 1;
    const newTodo = { index: index, title: title, done: false };
    const todo = [...this.state.todo, newTodo];
    this.setState({
      todo: todo,
      currentIndex: index,
      inputText: ""
    });
    const _ = this.saveTodo(todo);
  };

  onTapTodoItem = todoItem => {
    const todo = this.state.todo;
    const index = todo.indexOf(todoItem);
    todoItem.done = !todoItem.done;
    todo[index] = todoItem;
    this.setState({ todo: todo });
    const _ = this.saveTodo(todo);
  };

  render() {
    // フィルタ処理
    const filterText = this.state.filterText;
    let todoFiltered = this.state.todo;
    if (filterText !== "") {
      todoFiltered = todoFiltered.filter(t => t.title.includes(filterText));
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.filter}>
          <TextInput
            onChangeText={text => this.setState({ filterText: text })}
            value={this.state.filterText}
            style={styles.inputText}
            placeholder="Type filter text"
          />
        </View>
        <SafeAreaView style={styles.todolist}>
          <FlatList
            data={todoFiltered}
            extraData={this.state}
            renderItem={({ item }) => (
              <TodoItem
                title={item.title}
                done={item.done}
                onTapTodoItem={() => this.onTapTodoItem(item)}
              />
            )}
            keyExtractor={(item, index) => "todo_" + index}
          />
        </SafeAreaView>
        <View style={styles.input}>
          <TextInput
            onChangeText={text => this.setState({ inputText: text })}
            value={this.state.inputText}
            style={styles.inputText}
            placeholder="Input your new todo"
          />
          <Button
            onPress={this.onAddItem}
            title="Add"
            color="#841584"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const TodoItem = props => {
  let textStyle = styles.todoItem;
  if (props.done === true) {
    textStyle = styles.todoItemDone;
  }
  return (
    <TouchableOpacity onPress={props.onTapTodoItem}>
      <Text style={textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: STATUSBAR_HEIGHT
  },
  filter: {
    height: 30
  },
  todolist: {
    flex: 1
  },
  input: {
    height: 30,
    flexDirection: "row"
  },
  inputText: {
    fontSize: 20,
    flex: 1,
    backgroundColor: "ghostwhite"
  },
  inputButton: {
    width: 100
  },
  todoItem: {
    fontSize: 30,
    backgroundColor: "white"
  },
  todoItemDone: {
    fontSize: 30,
    backgroundColor: "red"
  }
});
