import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "./actionCreators";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  TouchableOpacity
} from "react-native";
import { SearchBar, Button, Input, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Styles from "./TodoScreenStyle";

// TODOを保持するKey/Valueストアのキー
const TODO_KEY = "@todoapp.todo";

interface Item {
  index: number;
  title: string;
  done: boolean;
}

interface TapScreenState {
  inputText: string;
  filterText: string;
  todos: Item[];
}

interface TapScreenProps {
  todos: Item[];
  addTodo: (title: string) => void;
  toggleTodo: (todo: Item) => void;
}

class TodoScreen extends Component<TapScreenProps, TapScreenState> {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      filterText: "",
      todos: []
    };
  }

  onAddItem = () => {
    const title = this.state.inputText;
    if (title === "") {
      return;
    }
    this.props.addTodo(title);
    this.setState({
      inputText: ""
    });
  };

  onTapTodoItem = todoItem => {
    this.props.toggleTodo(todoItem);
  };

  render() {
    // フィルタ処理
    const filterText = this.state.filterText;
    let todoFiltered = this.props.todos;
    if (filterText !== "") {
      todoFiltered = todoFiltered.filter(t => t.title.includes(filterText));
    }
    const platform = Platform.OS === "ios" ? "ios" : "android";

    return (
      <KeyboardAvoidingView
        style={Styles.container}
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
        <SafeAreaView style={Styles.todolist}>
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
        <View style={Styles.input}>
          <Input
            onChangeText={text => this.setState({ inputText: text })}
            value={this.state.inputText}
            containerStyle={Styles.inputText}
            placeholder="Input your new todo"
          />
          <Button
            icon={<Icon name="plus" size={30} color="white" />}
            title=""
            onPress={this.onAddItem}
            buttonStyle={Styles.inputButton}
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

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo(text) {
      dispatch(addTodo(text));
    },
    toggleTodo(todo) {
      dispatch(toggleTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
