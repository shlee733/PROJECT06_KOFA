import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";

import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import ImageBlurLoading from "react-native-image-blur-loading";

const deviceWidth = Dimensions.get("window").width;

export default function PcardComponent({ program }) {
  console.log(program.image);
  // const imgPath = program.image.toString();
  // const imgPath2 = require("../assets/" + imgPath);

  return (
    <Box style={styles.Pcard}>
      <TouchableOpacity>
        <Box h={130}>
          <ImageBlurLoading
            source={{ uri: program.image }}
            style={{
              flex: 1,
              width: "auto",
              height: "auto",
              resizeMode: "cover",
            }}
          />
        </Box>
        <VStack px={2} py={1}>
          <HStack justifyContent={"space-between"} p="1" pb={0.5}>
            <Text fontSize={12} color="#C14045">
              기획전
            </Text>
            <Text fontSize={12} color="#555">
              {program.date}
            </Text>
          </HStack>
          <Text fontSize={16} fontWeight={500} p="1" numberOfLines={1}>
            {program.title}
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
    shadowColor: "#0D2C99",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
});
