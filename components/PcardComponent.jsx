import { StyleSheet, TouchableOpacity } from "react-native";
import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";

import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import ImageBlurLoading from "react-native-image-blur-loading";

export default function PcardComponent() {
  return (
    <Box style={styles.card}>
      <TouchableOpacity>
        <Box w={"100%"} h={200}>
          <ImageBlurLoading
            source={program1}
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
              슈가랜드 특급
            </Text>
            <Text fontSize={13}>12:00</Text>
          </HStack>
          <Text fontSize={10} color="#777" pb="0.5">
            스티븐 스필버그 | 1974년
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
    maxWidth: 396,
    width: 300,
    // borderRadius: 8,
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
