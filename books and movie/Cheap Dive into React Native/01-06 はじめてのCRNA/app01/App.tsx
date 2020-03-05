import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const App: FC = () => {
  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.mapStyle}
        initialRegion={{
          latitude: 35.70056,
          longitude: 139.772488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          title="秋葉原UDX"
          coordinate={{
            latitude: 35.70056,
            longitude: 139.772488
          }}
        />
      </MapView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 2
  }
});

export default App;
