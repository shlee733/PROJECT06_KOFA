import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainPage from "../pages/MainPage";
import SchedulePage from "../pages/SchedulePage";
import ProgramPage from "../pages/ProgramPage";
import MyPage from "../pages/MyPage";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={MainPage} />
      <Tab.Screen name="상영일정" component={SchedulePage} />
      <Tab.Screen name="프로그램" component={ProgramPage} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
