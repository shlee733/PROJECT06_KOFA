// import { StyleSheet, Text, View } from "react-native";

// export default function MyPage() {
//   return (
//     <View style={styles.container}>
//       <Text>마이 페이지</Text>
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

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const DataScreen = () => {
  const [movie, setMovie] = useState([]);

  // const date = new Date();
  // console.log(date);
  // const getMonth = date.getMonth() + 1;
  // console.log(getMonth);
  // const getDate = date.getDate();
  // console.log(getDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.kmdb.or.kr/info/api/3/api.json?serviceKey=4H3RQ95F3KRTKO3K676U&StartDate=20230605&EndDate=20230609"
        );
        const data = await response.json();
        // console.log(data);
        const movie = data.resultList;
        console.log(movie[0].cMovieName);
        setMovie(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {movie.map((content, i) => {
        return <Text key={i}>{content.cMovieName}</Text>;
      })}
      {/* <Text>{movie[0].cMovieName}</Text> */}
    </View>
  );
};

export default DataScreen;
