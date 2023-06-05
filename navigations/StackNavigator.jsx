import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigator from "./BottomNavigator";
import DetailPage from "../pages/DetailPage";
import { Button } from "native-base";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{
          headerLeft: () => {
            return <Button title="Back" onPress={() => navigation.goBack()} />;
          },
        }}
        // screenOptions={{ headerShown: true, headerStyle: { height: 50 } }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
