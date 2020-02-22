import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { Styles } from "./AppStyles";
import CalcButton from "./CalcButton";

interface Props {}

interface States {}

const valueButton = (value: string) => {};

const enterButton = () => {};

const calcButton = (value: string) => {};

const acButton = () => {};

const cButton = () => {};

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
          <View style={Styles.buttonsLine}>
            <CalcButton flex={2} label={"AC"} btnEvent={() => acButton()} />
            <CalcButton label={"C"} btnEvent={() => cButton()} />
            <CalcButton label={"+"} btnEvent={() => calcButton("+")} />
          </View>
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
