import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { Styles } from "./Styles";

interface Props {}

interface States {}

export default class App extends React.Component<Props, States> {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.results}>
          <View style={Styles.resultLine}></View>
          <View style={Styles.resultLine}></View>
          <View style={Styles.resultLine}></View>
        </View>

        <View style={Styles.buttons}>
          <View style={Styles.buttonsLine}></View>
          <View style={Styles.buttonsLine}></View>
          <View style={Styles.buttonsLine}></View>
          <View style={Styles.lastButtonLinesContainer}>
            <View style={Styles.twoButtonLines}>
              <View style={Styles.buttonsLine}></View>
              <View style={Styles.buttonsLine}></View>
            </View>
            <View style={Styles.enterButtonContainer}></View>
          </View>
        </View>
      </View>
    );
  }
}
