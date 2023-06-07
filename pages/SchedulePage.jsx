import { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Box, Image, ScrollView, Text } from "native-base";

import HdComponent from "../components/HdComponent";

import SIcon from "../assets/schedule_icon.png";
import ScardComponent from "../components/ScardComponent";
import { useState } from "react";

export default function SchedulePage({ navigation }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.kmdb.or.kr/info/api/3/api.json?serviceKey=4H3RQ95F3KRTKO3K676U&StartDate=20230530&EndDate=20230604"
        );
        const data = await response.json();
        console.log(data.resultList[0].cMovieDate);
        const movies = data.resultList;
        setMovieList(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // 날짜별로 영화를 필터링하는 함수
  const groupMoviesByDate = (movies) => {
    const groupedMovies = {};
    movies.forEach((movie) => {
      const date = movie.cMovieDate;
      if (!groupedMovies[date]) {
        groupedMovies[date] = [];
      }
      groupedMovies[date].push(movie);
    });
    return groupedMovies;
  };

  // 필터링된 영화 목록을 얻어오기
  const groupedMovies = groupMoviesByDate(movieList);
  // console.log(groupedMovies[20230530]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      backgroundColor={"#EAF0FA"}
    >
      <HdComponent />

      <Box flexDirection={"row"} alignItems="center" width={"100%"} px="2">
        <Image source={SIcon} w={60} h={60} alt="pIcon" />
        <Text fontSize={20} fontWeight={700} ml={2}>
          상영일정
        </Text>
      </Box>

      {Object.keys(groupedMovies).map((date) => (
        <ScardComponent
          key={date}
          date={date}
          movies={groupedMovies[date]}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#EAF0FA",
    alignItems: "center",
    // justifyContent: "center",
  },
});
