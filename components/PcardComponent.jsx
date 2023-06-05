import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";

import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import ImageBlurLoading from "react-native-image-blur-loading";

const deviceWidth = Dimensions.get("window").width;

export default function PcardComponent() {
  return (
    <Box style={styles.Pcard}>
      <TouchableOpacity>
        <Box h={130}>
          <ImageBlurLoading
            source={program1}
            style={{
              flex: 1,
              width: "auto",
              height: "auto",
              resizeMode: "cover",
            }}
          />
        </Box>
        <VStack px={2} py={1}>
          <HStack justifyContent={"space-between"} p="1">
            <Text fontSize={12} color="#C14045">
              기획전
            </Text>
            <Text fontSize={12} color="#555">
              2023.07.01.토 ~ 07.07.금
            </Text>
          </HStack>
          <Text fontSize={16} fontWeight={500} p="1" numberOfLines={1}>
            KOFA 더블 피쳐: 스필버그 셀렉션
          </Text>
        </VStack>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  Pcard: {
    width: deviceWidth - 32,
    height: 200,
    marginVertical: 12,
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
});
