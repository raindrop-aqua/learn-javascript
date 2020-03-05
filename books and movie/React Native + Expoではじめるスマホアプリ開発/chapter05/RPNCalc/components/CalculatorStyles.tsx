import { Platform, StatusBar, StyleSheet } from "react-native";

export const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: STATUSBAR_HEIGHT
  },
  results: {
    flex: 3,
    backgroundColor: "#fff"
  },
  resultLine: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20
  },
  buttons: {
    flex: 5
  },
  buttonsLine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1
  },
  lastButtonLinesContainer: {
    flex: 2,
    flexDirection: "row"
  },
  twoButtonLines: {
    flex: 3
  },
  enterButtonContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1
  }
});
