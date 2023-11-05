import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface RadioProps {
  taskType: string;
  handleRadioPress: any;
  title: string;
  backgroundColor: string;
  label: string;
}
const CustomRadioNotification = ({
  taskType,
  handleRadioPress,
  title,
  label,
}: RadioProps) => {
  return (
    <TouchableOpacity onPress={() => handleRadioPress(title)}>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 7 }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "#83E37A",
            flexDirection: "row",
            borderRadius: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: taskType === title ? "#83E37A" : "white",
          }}
        >
          {taskType === title && (
            <View
              style={{
              
              }}
            >
              <Ionicons name="checkmark-sharp" size={14} color="white" />
            </View>
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CustomRadioNotification;
