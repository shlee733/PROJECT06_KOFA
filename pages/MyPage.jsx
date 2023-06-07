import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  ScrollView,
  Box,
  Stack,
  View,
  HStack,
  VStack,
  Text,
  Button,
  tou,
  Image,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import emoji from "../assets/emoji.png";
import ScardComponent from "../components/ScardComponent";

export default function MyPage({ navigation, route }) {
  return (
    <View
      style={styles.container}
      backgroundColor={"#EAF0FA"}
      // borderWidth={2}
    >
      <View
        w={"100%"}
        h={"70%"}
        borderTopRadius={"full"}
        position="absolute"
        bottom={0}
        backgroundColor={"#F9F9F9"}
        px={4}
        alignItems="center"
        style={styles.contents}
      >
        <Image source={emoji} alt={"emoji"} w={130} h={130} top={-70} />
        <Box alignItems={"center"} top={-40}>
          <Text fontSize={24} fontWeight={700} mb={3}>
            KOFA 팬
          </Text>
          <Text fontSize={16} fontWeight={500}>
            pttc733@gmail.com
          </Text>
        </Box>

        <Box width={"100%"} py={4}>
          <Text>
            <Entypo
              name="bookmark"
              size={24}
              color="red"
              style={{ verticalAlign: "middle" }}
            />
            <Text fontSize={16}> 찜한 일정</Text>
          </Text>
          <Box style={styles.Scard}>
            <VStack>
              <Text
                color={"#E03A3E"}
                borderBottomWidth={1}
                borderBottomColor={"#E03A3E"}
                textAlign="center"
                pb={2}
                mb={2}
              >
                05월 30일
              </Text>
              <TouchableOpacity onPress={() => goDetail(movie)}>
                <HStack justifyContent={"space-between"} py={2}>
                  <Text w={"15%"}>16:00</Text>
                  <Text w={"10%"}>1관</Text>
                  <Box
                    backgroundColor="red.200"
                    borderRadius={"full"}
                    w={25}
                    h={25}
                  >
                    <Text textAlign={"center"}>전체</Text>
                  </Box>
                  <Text flexWrap={"wrap"} w={"50%"}>
                    미지와의 조우
                  </Text>
                </HStack>
              </TouchableOpacity>
            </VStack>
          </Box>
        </Box>

        <TouchableOpacity style={styles.logout}>
          <HStack>
            <Text color={"#494949"}>로그아웃 </Text>
            <Entypo name="log-out" size={20} color="#494949" />
          </HStack>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  contents: {
    padding: 16,
    shadowColor: "#0D2C99",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 50,
  },
  Scard: {
    // width: deviceWidth - 32,
    width: "100%",
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 12,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#0D2C99",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  logout: {
    alignSelf: "flex-end",
    marginVertical: 16,
  },
});
