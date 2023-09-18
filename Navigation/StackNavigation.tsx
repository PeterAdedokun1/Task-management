import { NavigationContainer } from "@react-navigation/native";
import Login from "../screen/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "../screen/Register";
import ForgetPassword from "../screen/ForgetPassword";
import Otp from "../screen/Otp";
import NewPassword from "../screen/NewPassword";
import SuccessPassword from "../screen/SucessPassword";
import HomeScreen from "../screen/HomeScreen";
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Setting from "../screen/Setting";
interface TabIconProps {
  focused: boolean;
  color: string;
  size: number;
}
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator()
  const BottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Home",
            tabBarLabelStyle: { color: "#5E9959", fontSize: 13 },
            headerShown: false,
            tabBarIcon: ({ focused, color, size }: TabIconProps) => (
              <Octicons
                name="home"
                size={size}
                color={focused ? "#5E9959" : color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Groups"
          component={HomeScreen}
          options={{
            headerTitle: "Groups",
            tabBarLabelStyle: { color: "#5E9959", fontSize: 13 },
            headerShown: false,
            tabBarIcon: ({ focused, color, size }: TabIconProps) => (
              <MaterialIcons
                name="group"
                size={size}
                color={focused ? "#5E9959" : color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="settings"
          component={Setting}
          options={{
            headerTitle: "Groups",
            tabBarLabelStyle: { color: "#5E9959", fontSize: 13 },
            headerShown: false,
            tabBarIcon: ({ focused, color, size }: TabIconProps) => (
              <Ionicons
                name="settings-outline"
                size={size}
                color={focused ? "#5E9959" : color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="newPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="successPassword"
          component={SuccessPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
