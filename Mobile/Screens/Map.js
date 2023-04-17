import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  Linking,
  Button,
  Alert,
  View,
  Image,
} from "react-native";

export const Map = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/map.png")} />
    </View>
  );
};

export default Map;
