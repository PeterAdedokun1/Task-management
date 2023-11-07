import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
export default function SucessPassword() {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View
        style={{ backgroundColor: "#5DE750", borderRadius: 100, padding: 50 }}
      >
        <Image source={require("../assets/mark.png")} />
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginTop: 20,
          lineHeight: 20,
        }}
      >
        Your Password has been reset successfully.
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 60,
          backgroundColor: "#5DE750",
          marginHorizontal: 90,
          justifyContent: "center",
          borderRadius: 30,
          width: 200,
          paddingVertical: 15,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
            borderRadius: 600,
            fontWeight: "500",
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
}
