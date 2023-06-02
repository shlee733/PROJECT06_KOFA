import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigator from "./BottomNavigator";
import DetailPage from "../pages/DetailPage";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
