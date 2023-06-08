import { useState } from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import {
  Button,
  HStack,
  ScrollView,
  Text,
  Box,
  Image,
  Input,
  FormControl,
  View,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";

import HdComponent from "../components/HdComponent";
import McardComponent from "../components/McardComponent";

import mainImg1 from "../assets/program1.jpg";
import mainImg2 from "../assets/program2.jpg";
import mainImg3 from "../assets/program3.jpg";
import ftLogo from "../assets/logo_ft.png";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

export default function MainPage({ navigation }) {
  const [movieList, setMovieList] = useState([]);

  const deviceWidth = Dimensions.get("window").width;

  const [activeTab, setActiveTab] = useState(null);
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  const goSchedule = () => {
    navigation.navigate("상영일정");
  };

  const insta = () => {
    Linking.openURL("https://www.instagram.com/koreanfilmarchive/");
  };
  const twit = () => {
    Linking.openURL("https://twitter.com/Film_Archive");
  };
  const fb = () => {
    Linking.openURL("https://www.facebook.com/koreanfilmarchive");
  };
  const youtube = () => {
    Linking.openURL("https://www.youtube.com/koreanfilmarchive");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.kmdb.or.kr/info/api/3/api.json?serviceKey=4H3RQ95F3KRTKO3K676U&StartDate=20230530&EndDate=20230604"
        );
        const data = await response.json();
        // console.log(data.resultList);
        const movies = data.resultList;
        setMovieList(movies);

        // api에서 가져온 첫번째 날짜로 초기 선택
        if (movies.length > 0) {
          setActiveTab(movies[0].cMovieDate);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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

  const groupedMovies = groupMoviesByDate(movieList);
  // console.log(groupedMovies);
  // console.log(groupedMovies[20230530]);
  // console.log(groupedMovies[20230530][0]);

  return (
    <ScrollView backgroundColor={"#EAF0FA"}>
      <HdComponent />

      <ScrollView horizontal mb={6}>
        <Image
          source={mainImg1}
          alt="slide1"
          resizeMode="cover"
          w={deviceWidth}
          h={200}
        />
        <Image
          source={mainImg2}
          alt="slide2"
          resizeMode="cover"
          w={deviceWidth}
          h={200}
        />
        <Image
          source={mainImg3}
          alt="slide3"
          resizeMode="cover"
          w={deviceWidth}
          h={200}
        />
      </ScrollView>

      <Box backgroundColor={"white"} borderRadius="32" m={4} mt={0} p="4">
        <Text fontSize={18} fontWeight="700">
          상영일정
        </Text>
        <Box>
          <View style={styles.tabMenu}>
            {Object.keys(groupedMovies).map((date) => {
              // const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
              //   month: "numeric",
              //   day: "numeric",
              //   weekday: "short",
              // });
              return (
                <TouchableOpacity
                  key={date}
                  style={[styles.tab, activeTab === date && styles.activeTab]}
                  onPress={() => handleTabPress(date)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === date && styles.activeTabText,
                    ]}
                  >
                    {date.slice(4, 6)}/{date.slice(6)}
                    {/* {formattedDate} */}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <HStack
            // borderWidth={1}
            justifyContent="space-between"
            alignItems={"center"}
          >
            {activeTab && (
              <View style={styles.tabContent}>
                {groupedMovies[activeTab] &&
                  groupedMovies[activeTab].map((movie, i) => {
                    if (i < 2) {
                      return (
                        <McardComponent key={movie.cMovieName} movie={movie} />
                      );
                    }
                    return null;
                  })}
              </View>
            )}
            <TouchableOpacity style={{ marginLeft: 2 }} onPress={goSchedule}>
              <Box
                backgroundColor={"#F5822B"}
                w="35px"
                h="35px"
                borderRadius="full"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <AntDesign name="arrowright" size={24} color="white" />
              </Box>
              <Text fontSize={12} alignSelf={"center"} color="#777" py={2}>
                더보기
              </Text>
            </TouchableOpacity>
          </HStack>
        </Box>
      </Box>

      <Box backgroundColor={"white"} borderRadius="32" m={4} p="4">
        <Text fontSize={18} fontWeight="700">
          영화정보가 궁금하다면?
        </Text>
        <FormControl
          mt={4}
          // px={2}
        >
          <HStack
            justifyContent={"space-between"}
            borderWidth={1}
            borderRadius={8}
            borderColor="#aaaaaa"
          >
            <Input
              borderWidth={0}
              placeholder="영화제목을 검색해보세요!"
              w={"80%"}
            />
            <Button
              w={"15%"}
              p={1}
              backgroundColor="transparent"
              // borderWidth={1}
            >
              <AntDesign name="search1" size={20} color="#E03A3E" />
            </Button>
          </HStack>
          <Text textAlign={"right"} color="#777" fontSize={12}>
            powered by KMDb
          </Text>
        </FormControl>
      </Box>

      <Box backgroundColor={"white"} borderRadius="32" m={4} p="4">
        <Text fontSize={18} fontWeight="700">
          KOFA's SNS
        </Text>
        <HStack justifyContent={"space-evenly"} mt="4">
          <TouchableOpacity onPress={() => insta()}>
            <LinearGradient
              colors={["#E03A3E", "#F5822B"]}
              style={styles.snsBtn}
              start={[(x = 0), (y = 0)]}
              end={[(x = 1), (y = 1)]}
            >
              <AntDesign name="instagram" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => twit()}>
            <LinearGradient
              colors={["#E03A3E", "#F5822B"]}
              style={styles.snsBtn}
              start={[(x = 0), (y = 0)]}
              end={[(x = 1), (y = 1)]}
            >
              <AntDesign name="twitter" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => fb()}>
            <LinearGradient
              colors={["#E03A3E", "#F5822B"]}
              style={styles.snsBtn}
              start={[(x = 0), (y = 0)]}
              end={[(x = 1), (y = 1)]}
            >
              <FontAwesome name="facebook" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => youtube()}>
            <LinearGradient
              colors={["#E03A3E", "#F5822B"]}
              style={styles.snsBtn}
              start={[(x = 0), (y = 0)]}
              end={[(x = 1), (y = 1)]}
            >
              <AntDesign name="youtube" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </HStack>
      </Box>

      <View alignItems={"center"} p={4} mt={6}>
        <Image source={ftLogo} alt={"logo"} w={"120"} resizeMode="contain" />
        <Text fontSize={12} color={"#aaaaaa"}>
          서울시 마포구 월드컵북로 400 한국영상자료원 (우 03925)
        </Text>
        <Text fontSize={12} color={"#aaaaaa"}>
          전화: 02)3153-2001 팩스: 02)3153-2080
        </Text>
        <Text fontSize={12} color={"#aaaaaa"}>
          made by shlee
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    // flex: 1,
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    maxWidth: "90%",
    // overflow: "hidden",
  },
  tabMenu: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: "#777777",
  },
  tabText: {
    color: "#888888",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#000000",
  },
  activeTabText: {
    color: "#000000",
  },
  snsBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
