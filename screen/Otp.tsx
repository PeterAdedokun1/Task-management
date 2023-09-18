import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
    TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React,{useState, useRef} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import img from "../assets/otp.png";
import { useNavigation } from "@react-navigation/native";
const Otp = () => {
    const navigation: any = useNavigation();
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
    const keyboardVerticalOffset2 = Platform.OS === "ios" ? 0: 0;
    const [otp, setOtp] = useState(["", "", "", "", ""]); // Initialize an array to store OTP digits
    
    const otpInputs = useRef<Array<TextInput | null>>([]); // Refs for individual OTP input fields
    const handleOtpInput = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    // Automatically focus the next input field if a digit is entered
    if (text && index < 4) {
      otpInputs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
    };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10,  paddingTop: Platform.OS === "android" ? 40 : 0,}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image source={img} style={{}} />
      </View>
          <View style={{ marginTop: 15, marginBottom: 20 }}>
        <Text style={{ fontSize: 30 }}>Enter OTP</Text>
        <Text
          style={{
            fontSize: 15,
            color: "#6B6B6B",
            marginTop: 6,
            lineHeight: 20,
          }}
        >
          Please enter your 5 digit verification code for reset password....
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (otpInputs.current[index] = ref)}
              style={{
                width: 50,
                height: 60,
                borderWidth: 2,
                fontSize: 20,
                textAlign: "center",
                marginRight: 10,
                borderRadius: 5,
                borderColor: "#B8FFB2",
              }}
              value={digit}
              onChangeText={(text) => handleOtpInput(text, index)}
              keyboardType="numeric"
              maxLength={1}
              // secureTextEntry={true}
            />
          ))}
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset2}
      >
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#5DE750",
            marginHorizontal: 90,
            justifyContent: "center",
            borderRadius: 50,
            paddingVertical: 15,
          }}
          onPress={() => navigation.navigate("newPassword")}
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
            Next
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Otp;
