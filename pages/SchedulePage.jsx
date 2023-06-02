// import { StyleSheet, Text, View } from "react-native";

// export default function SchedulePage() {
//   return (
//     <View style={styles.container}>
//       <Text>상영일정 페이지</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import * as React from "react";
import { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const day1 = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />;

const day2 = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />;

const renderScene = SceneMap({
  day1: day1,
  day2: day2,
  // day3: day3,
  // day4: day4,
  // day5: day5,
  // day6: day6,
});

export default function TabViewExample() {
  // const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "day1", title: "6/1 목" },
    { key: "day2", title: "6/2 금" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: "100%" }}
    />
  );
}
