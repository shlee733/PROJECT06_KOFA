import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import {
  Button,
  HStack,
  ScrollView,
  Text,
  Box,
  Image,
  IconButton,
  Icon,
  Input,
  FormControl,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";

import HdComponent from "../components/HdComponent";
import McardComponent from "../components/McardComponent";

import mainImg1 from "../assets/program1.jpg";
import mainImg2 from "../assets/program2.jpg";
import mainImg3 from "../assets/program3.jpg";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function MainPage() {
  const deviceWidth = Dimensions.get("window").width;

  const [activeTab, setActiveTab] = useState("day1");
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
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
            <TouchableOpacity
              style={[styles.tab, activeTab === "day1" && styles.activeTab]}
              onPress={() => handleTabPress("day1")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "day1" && styles.activeTabText,
                ]}
              >
                6/1 목
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "day2" && styles.activeTab]}
              onPress={() => handleTabPress("day2")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "day2" && styles.activeTabText,
                ]}
              >
                6/2 금
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "day3" && styles.activeTab]}
              onPress={() => handleTabPress("day3")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "day3" && styles.activeTabText,
                ]}
              >
                6/3 토
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "day4" && styles.activeTab]}
              onPress={() => handleTabPress("day4")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "day4" && styles.activeTabText,
                ]}
              >
                6/4 일
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "day5" && styles.activeTab]}
              onPress={() => handleTabPress("day5")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "day5" && styles.activeTabText,
                ]}
              >
                6/5 월
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "day6" && styles.activeTab]}
              onPress={() => handleTabPress("day6")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "day6" && styles.activeTabText,
                ]}
              >
                6/6 화
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContent}>
            {activeTab === "day1" && (
              <HStack
                alignItems={"center"}
                mx="6"
                justifyContent={"space-between"}
              >
                <McardComponent />
                <McardComponent />
                <TouchableOpacity style={{ margin: 2 }}>
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
            )}
            {activeTab === "day2" && <Text>day2 Content</Text>}
            {activeTab === "day3" && <Text>day3 Content</Text>}
            {activeTab === "day4" && <Text>day4 Content</Text>}
            {activeTab === "day5" && <Text>day5 Content</Text>}
            {activeTab === "day6" && <Text>day6 Content</Text>}
          </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
