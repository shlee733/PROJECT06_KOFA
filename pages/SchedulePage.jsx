import { StyleSheet } from "react-native";
import { Box, Image, ScrollView, Text } from "native-base";

import HdComponent from "../components/HdComponent";

import SIcon from "../assets/schedule_icon.png";
import ScardComponent from "../components/ScardComponent";

export default function SchedulePage({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      backgroundColor={"#EAF0FA"}
    >
      <HdComponent />

      <Box flexDirection={"row"} alignItems="center" width={"100%"} px="2">
        <Image source={SIcon} w={60} h={60} alt="pIcon" />
        <Text fontSize={20} fontWeight={700} ml={2}>
          상영일정
        </Text>
      </Box>

      <ScardComponent navigation={navigation} />
      <ScardComponent navigation={navigation} />
      <ScardComponent navigation={navigation} />
      <ScardComponent navigation={navigation} />
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
