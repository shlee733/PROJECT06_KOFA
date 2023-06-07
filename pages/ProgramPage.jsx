import { StyleSheet } from "react-native";
import { Box, Image, ScrollView, Text } from "native-base";

import HdComponent from "../components/HdComponent";
import PcardComponent from "../components/PcardComponent";

import PIcon from "../assets/program_icon.png";
import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import program3 from "../assets/program3.jpg";
import data from "../programData.json";

export default function ProgramPage() {
  // console.log(data.program);
  const programs = data.program;

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

      {programs.map((program) => {
        return (
          <PcardComponent
            program={program}
            key={program.id}
            bannerImg={program1}
          />
        );
      })}

      {/* <Image source={require("../assets/program1.jpg")} /> */}
      {/* <Image source={imageSource} /> */}

      {/* <PcardComponent bannerImg={program1} />
      <PcardComponent bannerImg={program2} />
      <PcardComponent bannerImg={program3} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
