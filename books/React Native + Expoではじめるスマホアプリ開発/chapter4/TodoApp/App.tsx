import React from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

// interface TodoItem {
//   index: number;
//   title: string;
//   done: boolean;
// }
//
// interface Todo {
//   items: TodoItem[];
//   currentIndex: number;
//   inputText: string;
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { index: 1, title: "原稿を書く", done: false },
        { index: 2, title: "犬の散歩をする", done: false }
      ],
      currentIndex: 0,
      inputText: ""
    };
  }

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
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.filter}>
          <Text>Filterがここに配置されます</Text>
        </View>
        <ScrollView style={styles.todolist}>
          <FlatList
            data={this.state.todo}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + index}
          />
        </ScrollView>
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
            style={styles.inputButton}
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
    flexDirection: "row",
  },
  inputText: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  inputButton: {
    width: 200,
  }
});
