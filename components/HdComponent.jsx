import { StyleSheet } from "react-native";
import { Box, HStack, Image } from "native-base";

import logo from "../assets/logoImg.png";

export default function HdComponent() {
  return (
    <HStack w={"100%"} px={4} py={2} safeAreaTop>
      <Box w={130} h={50}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode={"contain"}
          alt={"로고"}
          w={"100%"}
          h={"100%"}
        />
      </Box>
    </HStack>
  );
}

const styles = StyleSheet.create({
  logo: {
    // width: "100%",
    // height: "100%",
  },
});
