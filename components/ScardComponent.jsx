import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Box, HStack, Image, Text, VStack } from "native-base";

const deviceWidth = Dimensions.get("window").width;

export default function ScardComponent({ navigation }) {
  return (
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
          6/6 화
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailPage");
          }}
        >
          <HStack justifyContent={"space-between"} py={2}>
            <Text w={"15%"}>16:00</Text>
            <Text w={"10%"}>2관</Text>
            <Box
              // mx={22}
              backgroundColor="red.200"
              borderRadius={"full"}
              w={25}
              h={25}
            >
              <Text textAlign={"center"}>15</Text>
            </Box>
            <Text flexWrap={"wrap"} w={"50%"}>
              카메라를 멈추면 안돼! 프랑스에서도
            </Text>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity>
          <HStack justifyContent={"space-between"} py={2}>
            <Text w={"15%"}>19:00</Text>
            <Text w={"10%"}>2관</Text>
            <Box
              // mx={22}
              backgroundColor="red.200"
              borderRadius={"full"}
              w={25}
              h={25}
            >
              <Text textAlign={"center"}>15</Text>
            </Box>
            <Text flexWrap={"wrap"} w={"50%"}>
              부산행
            </Text>
          </HStack>
        </TouchableOpacity>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  Scard: {
    width: deviceWidth - 32,
    padding: 8,
    marginVertical: 12,
    borderRadius: 20,
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
