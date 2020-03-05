import React, { Component } from "react";
import {
  AsyncStorage,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import { SearchBar, Button, Input, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { ifIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper";

// ステータスバーの高さ
const STATUSBAR_HEIGHT = getStatusBarHeight();
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

export default class App extends Component<{}, State> {
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
    const platform = Platform.OS === "ios" ? "ios" : "android";

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <SearchBar
          platform={platform}
          cancelButtonTitle="Cancel"
          onChangeText={text => this.setState({ filterText: text })}
          onClear={() => this.setState({ filterText: "" })}
          value={this.state.filterText}
          placeholder="Type filter text"
        />
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
          <Input
            onChangeText={text => this.setState({ inputText: text })}
            value={this.state.inputText}
            containerStyle={styles.inputText}
            placeholder="Input your new todo"
          />
          <Button
            icon={<Icon name="plus" size={30} color="white" />}
            title=""
            onPress={this.onAddItem}
            buttonStyle={styles.inputButton}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const TodoItem = props => {
  let icon = null;
  if (props.done === true) {
    icon = <Icon2 name="done" />;
  }
  return (
    <TouchableOpacity onPress={props.onTapTodoItem}>
      <ListItem title={props.title} rightIcon={icon} bottomDivider />
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
    ...ifIphoneX(
      {
        paddingBottom: 30,
        height: 80
      },
      {
        height: 50
      }
    ),
    height: 70,
    flexDirection: "row",
    paddingRight: 10
  },
  inputText: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  inputButton: {
    width: 48,
    height: 48,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 48,
    backgroundColor: "#ff6347"
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
