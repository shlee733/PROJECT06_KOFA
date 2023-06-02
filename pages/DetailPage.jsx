import { StyleSheet, Text, View } from "react-native";

export default function DetailPage() {
  return (
    <View style={styles.container}>
      <Text>디테일 페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
