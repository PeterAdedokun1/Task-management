import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screen/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screen/Register";
import ForgetPassword from "../screen/ForgetPassword";
import Otp from "../screen/Otp";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
