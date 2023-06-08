import { StyleSheet, TouchableOpacity } from "react-native";
import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";

import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import ImageBlurLoading from "react-native-image-blur-loading";

export default function McardComponent({ movie }) {
  // console.log(movie);

  return (
    <TouchableOpacity style={styles.card}>
      <Box w={"100%"} h={200}>
        <ImageBlurLoading
          source={{ uri: movie.image2URL }}
          style={{
            flex: 1,
            width: "auto",
            height: "auto",
            resizeMode: "cover",
            // borderWidth: 1,
          }}
        />
      </Box>
      <VStack px={2} py={1}>
        <HStack justifyContent={"space-between"} pb="0.5">
          <Text
            fontSize={13}
            color="#C14045"
            numberOfLines={1}
            maxW={"80%"}
            // borderWidth="1"
          >
            {movie.cMovieName}
          </Text>
          <Text fontSize={13}>{movie.cMovieTime}</Text>
        </HStack>
        <Text fontSize={10} color="#777" pb="0.5" numberOfLines={1}>
          {movie.cDirector} | {movie.cProductionYear}
        </Text>
        <Text fontSize={10} color="#777" pb="0.5" numberOfLines={1}>
          {movie.cProgramName}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    maxWidth: 150,
    borderRadius: 8,
    overflow: "hidden",
    // margin: 4,
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
