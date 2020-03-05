import { StyleSheet } from "react-native";
import { ifIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper";

// ステータスバーの高さ
const STATUSBAR_HEIGHT = getStatusBarHeight();

const Styles = StyleSheet.create({
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

export default Styles;