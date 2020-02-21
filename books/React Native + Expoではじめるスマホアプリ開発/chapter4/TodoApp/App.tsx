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
  View
} from "react-native";

// ステータスバーの高さ
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
// TODOを保持するKey/Valueストアのキー
const TODO_KEY = "@todoapp.todo";

interface TodoItem {
  index: number;
  title: string;
  done: boolean;
}

interface State {
  todo: TodoItem[];
  currentIndex: number;
  inputText: string;
}

interface Props {}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      currentIndex: 0,
      inputText: ""
    };
  }

  componentDidMount = () => {
    const _ = this.loadTodo();
  };

  loadTodo = async () => {
    try {
      const todoString = await AsyncStorage.getItem(TODO_KEY);
      if (todoString) {
        const todo: TodoItem[] = JSON.parse(todoString);
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

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.filter}>
          <Text>Filterがここに配置されます</Text>
        </View>
        <SafeAreaView style={styles.todolist}>
          <FlatList
            data={this.state.todo}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + index}
          />
        </SafeAreaView>
        <View style={styles.input}>
          <TextInput
            onChangeText={text => this.setState({ inputText: text })}
            value={this.state.inputText}
            style={styles.inputText}
          />
          <Button
            onPress={this.onAddItem}
            title="Add"
            color="#841584"
            accessibilityLabel="input todo"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

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
    flex: 1,
    backgroundColor: "lightblue"
  },
  inputButton: {
    width: 100
  }
});
