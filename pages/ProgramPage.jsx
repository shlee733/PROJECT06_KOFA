import { StyleSheet } from "react-native";
import { Box, Image, ScrollView, Text } from "native-base";

import HdComponent from "../components/HdComponent";
import PcardComponent from "../components/PcardComponent";

import PIcon from "../assets/program_icon.png";

export default function ProgramPage() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      backgroundColor={"#EAF0FA"}
    >
      <HdComponent />

      <Box flexDirection={"row"} alignItems="center" width={"100%"} px="1">
        <Image source={PIcon} w={60} h={60} alt="pIcon" />
        <Text fontSize={20} fontWeight={700} ml={2}>
          현재 / 예정 프로그램
        </Text>
      </Box>

      <PcardComponent />
      <PcardComponent />
      <PcardComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#EAF0FA",
    alignItems: "center",
    // justifyContent: "center",
  },
});
