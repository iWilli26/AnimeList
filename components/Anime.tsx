import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { View, StyleSheet, ScrollView, _ScrollView } from "react-native";
import { Card } from "./card";
import { AnimeT } from "../Models/Anime";
const styles = StyleSheet.create({
  cardcontainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export const Anime = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const query1 = `
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
            description
            tags {
              name
            }
          }
        }
      }
`;
  const query2 = `
    {
        Page(page: 2) {
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
        query: query1,
      },
    }).then((result) => {
      setData1(result.data.data.Page.media);
    });
  }, []);

  useEffect(() => {
    axios({
      url: url,
      method: "post",
      data: {
        query: query2,
      },
    }).then((result) => {
      setData2(result.data.data.Page.media);
    });
  }, []);
  const data = data1.concat(data2);
  return (
    <ScrollView contentContainerStyle={styles.cardcontainer}>
      {data.map((anime: AnimeT) => (
        <Card anime={anime} key={anime.id} />
      ))}
    </ScrollView>
  );
};
