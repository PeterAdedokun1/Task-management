import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import img from "../assets/forgot-password.png";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
const ForgetPassword = () => {
  const navigation: any = useNavigation()
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      // .email("Not a valid email address")
      .required("Please enter an email address to continue "),
  });
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image source={img} style={{}} />
      </View>
      <View style={{ marginTop: 15, marginBottom: 50 }}>
        <Text style={{ fontSize: 30 }}>Forget Password</Text>
        <Text style={{ fontSize: 15, color: "#6B6B6B", marginTop: 6, lineHeight: 20 }}>
          Don’t worry! It happens, Please enter the email address associated
          with your account.
        </Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => navigation.navigate("otp")}
        validationSchema={validateSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <View
              style={{
                borderWidth: 2,
                borderColor: "#B8FFB2",
                paddingHorizontal: 10,
                position: "relative",
                borderRadius: 6,
              }}
            >
              <View>
                <Text
                  style={{
                    position: "absolute",
                    top: -10,
                    backgroundColor: "#efefef",
                    fontSize: 16,
                  }}
                >
                  Email Id
                </Text>
                <TextInput
                  style={{ height: 50, fontSize: 19 }}
                  placeholder="Enter Email Id "
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
            </View>
            {errors.email && (
              <Text style={{ color: "red", marginTop: 5 }}>{errors.email}</Text>
            )}
            <TouchableOpacity
              style={{
                marginTop: 30,
                backgroundColor: "#5DE750",
                marginHorizontal: 90,
                justifyContent: "center",
                borderRadius: 50,
                paddingVertical: 15,
              }}
              onPress={() => handleSubmit()}
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
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgetPassword;
