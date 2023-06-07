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
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
import he from "he";
import * as Linking from "expo-linking";

import { AntDesign } from "@expo/vector-icons";

import detailImg from "../assets/detailImg.jpg";
import poster from "../assets/movie2.jpg";

export default function DetailPage({ navigation, route }) {
  // console.log(route);
  // console.log(route.params);
  console.log(route.params.movie);
  // const { movie } = route.params;
  const mInfo = route.params.movie;

  const [showFull, setShowFull] = useState(false);
  const handleShowMore = () => {
    setShowFull(true);
  };

  const goKmdb = () => {
    const externalURL = `https://www.kmdb.or.kr/db/kor/detail/movie/${mInfo.cKmdbNation}/${mInfo.cKmdbDataid}`;
    Linking.openURL(externalURL);
  };

  const decodedSynopsys = he.decode(mInfo.cSynopsys);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      backgroundColor={"#EAF0FA"}
      // borderWidth={2}
    >
      <TouchableOpacity
        style={styles.gobackBtn}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      <ImageBlurLoading
        source={{ uri: mInfo.image1URL }}
        style={{
          width: "auto",
          height: 250,
          // resizeMode: "contain",
        }}
      />
      <View
        w={"100%"}
        borderTopRadius={10}
        // position="absolute"
        top={-10}
        backgroundColor={"#EAF0FA"}
        px={4}
      >
        <HStack>
          <ImageBlurLoading
            source={{ uri: mInfo.image2URL }}
            style={{
              width: 120,
              height: 160,
              // position: "absolute",
              top: -50,
              // left: 0,
            }}
          />
          <VStack ml={6} pt={4} maxW={"60%"}>
            <Text
              fontSize={24}
              fontWeight={700}
              // numberOfLines={1}
              flexWrap={"wrap"}
              w={"100%"}
            >
              {mInfo.cMovieName}
            </Text>
            <Text py={1}>
              {`${mInfo.cMovieDate.slice(0, 4)}.${mInfo.cMovieDate.slice(
                4,
                6
              )}.${mInfo.cMovieDate.slice(6)}`}{" "}
              / {mInfo.cMovieTime}
            </Text>
            <Text>{mInfo.cCodeSubName3}</Text>
          </VStack>
        </HStack>

        <Box backgroundColor={"white"} borderRadius={32} p={4} mb={8}>
          <Text
            fontSize={20}
            fontWeight={700}
            color={"#0D2C99"}
            borderBottomWidth={1}
            borderBottomColor={"#0D2C99"}
            mb={4}
            w={"24"}
            pb={1}
          >
            # 영화정보
          </Text>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              감독
            </Text>
            <Text w="75%">{mInfo.cDirector}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              출연
            </Text>
            <Text w="75%">{mInfo.cActors}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              제작년도
            </Text>
            <Text w="75%">{mInfo.cProductionYear}년</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              러닝타임
            </Text>
            <Text w="75%">{mInfo.cRunningTime}분</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              관람등급
            </Text>
            <Text w="75%">{mInfo.cCodeSubName2}</Text>
          </HStack>
          <TouchableOpacity style={styles.moreBtn} onPress={goKmdb}>
            <Text color={"white"} textAlign="center" fontWeight={700}>
              KMDb에서 자세히 보기
            </Text>
          </TouchableOpacity>
        </Box>

        <Box backgroundColor={"white"} borderRadius={32} p={4} mb={8}>
          <Text
            fontSize={20}
            fontWeight={700}
            color={"#0D2C99"}
            borderBottomWidth={1}
            borderBottomColor={"#0D2C99"}
            mb={4}
            w={"20"}
            pb={1}
          >
            # 줄거리
          </Text>
          <Text numberOfLines={showFull ? undefined : 7} mb={2}>
            {decodedSynopsys.replace(/<br\s*\/?>/g, "")}
          </Text>

          {showFull ? null : (
            <TouchableOpacity style={styles.moreBtn} onPress={handleShowMore}>
              <Text color={"white"} textAlign="center" fontWeight={700}>
                더보기
              </Text>
            </TouchableOpacity>
          )}
        </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  moreBtn: {
    width: 220,
    backgroundColor: "#F5822B",
    borderRadius: 16,
    alignSelf: "center",
    marginTop: 16,
    padding: 8,
  },
  gobackBtn: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 24,
    left: 10,
    zIndex: 100,
    backgroundColor: "#99999950",
    borderRadius: 12,
  },
});
