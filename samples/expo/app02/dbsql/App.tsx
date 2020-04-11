import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Header, Button, PricingCard, ListItem } from "react-native-elements";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

export default function App() {
  return (
    <>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <Button title="Solid Button" />
      <Button title="Outline button" type="outline" />
      <PricingCard
        color="#4f9deb"
        title="Free"
        price="$0"
        info={["1 User", "Basic Support", "All Core Features"]}
        button={{ title: "GET STARTED", icon: "flight-takeoff" }}
      />
      <View>
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          />
        ))}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          icon={{ name: "android" }}
          title="Hello!"
          onPress={() => Alert.alert("Hello!", "This is a message.")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
