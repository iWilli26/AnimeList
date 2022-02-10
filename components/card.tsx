import React from "react";
import { View, Text } from "react-native";
import { AnimeT } from "../Models/Anime";
interface CardProps {
  anime: AnimeT;
}
export const Card = ({ anime }: CardProps) => {
  return (
    <View>
      <Text>
        {anime.tags.map((tag) => (
          <Text>{tag.name}, </Text>
        ))}
        {"\n"}
        {"\n"}
      </Text>
    </View>
  );
};
