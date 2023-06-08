import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainPage from "../pages/MainPage";
import SchedulePage from "../pages/SchedulePage";
import ProgramPage from "../pages/ProgramPage";
import MyPage from "../pages/MyPage";

import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E03A3E",
        tabBarInactiveTintColor: "#999999",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="상영일정"
        component={SchedulePage}
        options={{
          tabBarIcon: ({ color }) => (
            // <FontAwesome5 name="calendar-alt" size={20} color={color} />
            <FontAwesome name="calendar-o" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="프로그램"
        component={ProgramPage}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="film" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
