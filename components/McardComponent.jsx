import { StyleSheet, TouchableOpacity } from "react-native";
import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";

import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import ImageBlurLoading from "react-native-image-blur-loading";

export default function McardComponent() {
  return (
    <Box
      // maxW={150}
      // borderWidth="0"
      // borderRadius={8}
      // overflow="hidden"
      style={styles.card}
    >
      <TouchableOpacity>
        <Box w={"100%"} h={200}>
          <ImageBlurLoading
            source={movie2}
            style={{
              flex: 1,
              width: "auto",
              height: "auto",
              resizeMode: "contain",
            }}
          />
        </Box>
        <VStack px={2} py={1}>
          <HStack justifyContent={"space-between"} pb="0.5">
            <Text fontSize={13} color="#C14045">
              죠스
            </Text>
            <Text fontSize={13}>15:00</Text>
          </HStack>
          <Text fontSize={10} color="#777" pb="0.5">
            스티븐 스필버그 | 1975년
          </Text>
          <Text fontSize={10} color="#777" pb="0.5" numberOfLines={1}>
            KOFA 더블피쳐: 스필버그 셀렉츠
          </Text>
        </VStack>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 150,
    borderRadius: 8,
    overflow: "hidden",
    margin: 4,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
});
