import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screen/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screen/Register";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
