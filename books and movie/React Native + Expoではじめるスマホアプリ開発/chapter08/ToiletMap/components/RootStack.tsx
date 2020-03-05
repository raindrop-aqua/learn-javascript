import { createStackNavigator } from "@react-navigation/native";
import MapScreen from "./MapScreen";
import ElementScreen from "./ElementScreen";

const RootStack = createStackNavigator(
  {
    Map: MapScreen,
    Element: ElementScreen
  },
  {
    initialRouteName: "Map"
  }
);

export default RootStack;
