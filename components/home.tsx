import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Anime } from "./Anime";

export const Home = () => {
  return (
    <View style={styles.home}>
      <Anime />
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  example: {
    fontSize: 30,
    margin: 20,
  },
});
