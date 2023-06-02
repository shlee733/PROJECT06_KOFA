import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "native-base";
import HdComponent from "../components/HdComponent";
import PcardComponent from "../components/PcardComponent";

export default function ProgramPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HdComponent />

      <PcardComponent />
      <Text>프로그램 페이지</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0FA",
    alignItems: "center",
    // justifyContent: "center",
  },
});
