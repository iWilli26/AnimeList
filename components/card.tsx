import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AnimeT } from "../Models/Anime";
interface CardProps {
  anime: AnimeT;
}
const styles = StyleSheet.create({
  logo: {
    width: 230 / 2,
    height: 324 / 2,
    margin: "",
  },
  card: {
    display: "flex",
  },
});

export const Card = ({ anime }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.logo}
        source={{
          uri: anime.coverImage.large,
        }}
      />
      <Text style={styles.logo}>{anime.title.native}</Text>
    </View>
  );
};
