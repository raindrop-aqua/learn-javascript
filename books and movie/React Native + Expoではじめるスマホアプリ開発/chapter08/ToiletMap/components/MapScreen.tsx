import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { point, Units } from "@turf/helpers";
import destination from "@turf/destination";
import { styles } from "./MapScreenStyles";

interface AppState {
  elements: any[];
  south?: number;
  west?: number;
  north?: number;
  east?: number;
}

interface MapScreenProps {
  navigation: any;
}

export default class MapScreen extends React.Component<
  MapScreenProps,
  AppState
> {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      east: null,
      north: null,
      south: null,
      west: null
    };
  }

  // 地図の画面が変更されるたびにbboxを更新
  onRegionChangeComplete = region => {
    const center = point([region.longitude, region.latitude]);
    // 縦幅、横幅を計算
    const verticalMeter = (111 * region.latitudeDelta) / 2;
    const horizontalMeter = (111 * region.longitudeDelta) / 2;
    // 実際の距離を計算
    const options = { units: "kilometers" };
    // @ts-ignore
    const south = destination(center, verticalMeter, 180, options);
    // @ts-ignore
    const west = destination(center, horizontalMeter, -90, options);
    // @ts-ignore
    const north = destination(center, verticalMeter, 0, options);
    // @ts-ignore
    const east = destination(center, horizontalMeter, 90, options);

    this.setState({
      south: south.geometry.coordinates[1],
      west: west.geometry.coordinates[0],
      north: north.geometry.coordinates[1],
      east: east.geometry.coordinates[0]
    });
  };

  fetchToilet = async () => {
    const south = this.state.south;
    const west = this.state.west;
    const north = this.state.north;
    const east = this.state.east;

    const body = `
    [out:json];
    (
      node
        [amenity=toilets]
        (${south},${west},${north},${east});
      node
        ["toilets:wheelchair"=yes]
        (${south},${west},${north},${east});
    );
    out;
    `;
    const options = {
      method: "POST",
      body: body
    };

    try {
      const response = await fetch(
        "https://overpass-api.de/api/interpreter",
        options
      );
      const json = await response.json();
      this.setState({ elements: json.elements });
    } catch (e) {
      console.log(e);
    }
  };

  gotoElementScreen = (element, title) => {
    this.props.navigation.navigate("Element", {
      element: element,
      title: title
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.mapview}
          initialRegion={{
            latitude: 35.681262,
            longitude: 139.766403,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00521
          }}
        >
          {this.state.elements.map(element => {
            let title = "トイレ";
            if (element.tags["name"] !== undefined) {
              title = element.tags["name"];
            }
            return (
              <Marker
                key={"id_" + element.id}
                title={title}
                coordinate={{
                  latitude: element.lat,
                  longitude: element.lon
                }}
                onCalloutPress={() => this.gotoElementScreen(element, title)}
              />
            );
          })}
        </MapView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.fetchToilet()}
            style={styles.button}
          >
            <Text style={styles.buttonItem}>トイレ取得</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
