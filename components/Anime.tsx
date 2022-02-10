import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { View } from "react-native";
import { Card } from "./card";
import { AnimeT } from "../Models/Anime";

export const Anime = () => {
  const [data, setData] = useState([]);
  const query = `
    {
        Page(page: 1) {
          media(type: ANIME, sort: SCORE_DESC) {
            id
            title {
              english
              native
            }
            studios {
              nodes {
                name
              }
            }
            coverImage {
              large
              color
            }
            trailer {
              id
            }
            description
            tags {
              name
            }
          }
        }
      }
`;

  var url = "https://graphql.anilist.co";
  useEffect(() => {
    axios({
      url: url,
      method: "post",
      data: {
        query: query,
      },
    }).then((result) => {
      console.log(result.data.data.Page.media);
      setData(result.data.data.Page.media);
    });
  }, []);
  return (
    <View>
      {data.map((anime: AnimeT) => (
        <Card anime={anime} key={anime.id} />
      ))}
    </View>
  );
};
