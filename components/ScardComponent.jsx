import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Box, HStack, Image, Text, View, VStack } from "native-base";

const deviceWidth = Dimensions.get("window").width;

export default function ScardComponent({ navigation, date, movies }) {
  // console.log(movies);
  // console.log(movies[0].cMovieName);

  const goDetail = (selectedMovie) => {
    navigation.navigate("DetailPage", { movie: selectedMovie });
  };

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
          {`${date.slice(4, 6)}월  ${date.slice(6)}일`}
        </Text>
        {movies.map((movie, i) => {
          return (
            <View key={i}>
              <TouchableOpacity onPress={() => goDetail(movie)}>
                <HStack justifyContent={"space-between"} py={2}>
                  <Text w={"15%"}>{movie.cMovieTime}</Text>
                  <Text w={"10%"}>{movie.cCodeSubName3.slice(-2)}</Text>
                  <Box
                    // mx={22}
                    backgroundColor="red.200"
                    borderRadius={"full"}
                    w={25}
                    h={25}
                  >
                    <Text textAlign={"center"}>{movie.cCodeSubName2}</Text>
                  </Box>
                  <Text flexWrap={"wrap"} w={"50%"}>
                    {movie.cMovieName}
                  </Text>
                </HStack>
              </TouchableOpacity>
            </View>
          );
        })}
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  Scard: {
    width: deviceWidth - 32,
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 12,
    borderRadius: 20,
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
