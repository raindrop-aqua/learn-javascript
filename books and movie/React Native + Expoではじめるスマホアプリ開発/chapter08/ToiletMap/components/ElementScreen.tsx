import React from "react";
import { View, Text } from "react-native";

interface ElementScreenProps {
  navigation: any;
}

const navigationOptions = {
  title: "トイレマップ"
};

export default class ElementScreen extends React.Component<
  ElementScreenProps,
  {}
> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "")
    };
  };

  render() {
    const { navigation } = this.props;
    const element = navigation.getParam("element", undefined);
    if (element === undefined) {
      return <View />;
    }

    return (
      <View>
        <Text>{element.id}</Text>
      </View>
    );
  }
}
