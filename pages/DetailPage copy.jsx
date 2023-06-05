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
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";

import detailImg from "../assets/detailImg.jpg";
import poster from "../assets/movie2.jpg";

export default function DetailPage() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      backgroundColor={"#EAF0FA"}
      borderWidth={2}
    >
      <ImageBlurLoading
        source={detailImg}
        style={{
          height: 250,
          resizeMode: "contain",
        }}
      />
      <View
        w={"100%"}
        borderWidth={1}
        borderTopRadius={10}
        position="absolute"
        top={240}
        backgroundColor={"#EAF0FA"}
        px={4}
      >
        <HStack>
          <ImageBlurLoading
            source={poster}
            style={{
              width: 120,
              height: 160,
              // position: "absolute",
              top: -50,
              // left: 0,
            }}
          />
          <VStack ml={6} pt={4}>
            <Text fontSize={24} fontWeight={700}>
              죠스
            </Text>
            <Text py={1}>2023.06.03 15:00</Text>
            <Text>시네마테크KOFA 1관</Text>
          </VStack>
        </HStack>

        <Box backgroundColor={"white"} borderRadius={32} p={4}>
          <Text
            fontSize={20}
            fontWeight={700}
            borderBottomWidth={1}
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
            <Text w="75%">스티븐 스필버그</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              출연
            </Text>
            <Text w="75%">
              로이 샤이더, 로버트 쇼, 리차드 드레이퓨스, 로랜 개리
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              제작년도
            </Text>
            <Text w="75%">1975년</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              러닝타임
            </Text>
            <Text w="75%">124분</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              관람등급
            </Text>
            <Text w="75%">12세 이상 관람가</Text>
          </HStack>
          <TouchableOpacity
            style={{
              width: 220,
              backgroundColor: "#F5822B",
              borderRadius: 16,
              alignSelf: "center",
              marginTop: 16,
              padding: 8,
            }}
          >
            <Text color={"white"} textAlign="center">
              KMDb에서 자세히 보기
            </Text>
          </TouchableOpacity>
        </Box>

        <Box backgroundColor={"white"} borderRadius={32} p={4}>
          <Text
            fontSize={20}
            fontWeight={700}
            borderBottomWidth={1}
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
            <Text w="75%">스티븐 스필버그</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              출연
            </Text>
            <Text w="75%">
              로이 샤이더, 로버트 쇼, 리차드 드레이퓨스, 로랜 개리
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              제작년도
            </Text>
            <Text w="75%">1975년</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              러닝타임
            </Text>
            <Text w="75%">124분</Text>
          </HStack>
          <HStack justifyContent={"space-between"} mb={2}>
            <Text fontWeight={700} w="20%">
              관람등급
            </Text>
            <Text w="75%">12세 이상 관람가</Text>
          </HStack>
          <TouchableOpacity
            style={{
              width: 220,
              backgroundColor: "#F5822B",
              borderRadius: 16,
              alignSelf: "center",
              marginTop: 16,
              padding: 8,
            }}
          >
            <Text color={"white"} textAlign="center">
              KMDb에서 자세히 보기
            </Text>
          </TouchableOpacity>
        </Box>

        <Text>디테일 페이지</Text>
        <Text>디테일 페이지</Text>
        <Text>디테일 페이지</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
