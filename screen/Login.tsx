import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Img1 from "../assets/img1.png";
import * as yup from "yup";
import { Formik } from "formik";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons"; 
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
    const navigation: any = useNavigation()
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Not a valid email address")
      .required("Please enter an email address to continue "),
    password: yup.string().required("Please enter your password"),
  });
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          marginBottom: 50,
        }}
      >
        <View>
          <Image source={Img1} style={{ width: "100%", height: 200 }} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 30 }}>Welcome!!</Text>
            <Text style={{ fontSize: 40, color: "#5E9959", fontWeight: "600" }}>
              Sign In
            </Text>
            <View style={{ marginTop: 30 }}>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validateSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                }) => (
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
                      <Text style={{ color: "red", marginTop: 5 }}>
                        {errors.email}
                      </Text>
                    )}

                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: "#B8FFB2",
                        paddingHorizontal: 10,
                        position: "relative",
                        marginTop: 20,
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
                          Password
                        </Text>
                        <TextInput
                          style={{ height: 50, fontSize: 19 }}
                          placeholder="Enter Password"
                          secureTextEntry={true}
                          onChangeText={handleChange("password")}
                          value={values.password}
                        />
                      </View>
                    </View>
                    {errors.password && (
                      <Text style={{ color: "red", marginTop: 5 }}>
                        {errors.password}
                      </Text>
                    )}
                    <TouchableOpacity style={{ marginTop: 7 }} onPress={() => navigation.navigate("forgetPassword")}>
                      <Text
                        style={{
                          color: "#B7B6B6",
                          fontSize: 15,
                          textAlign: "right",
                        }}
                      >
                        Forget password?
                      </Text>
                    </TouchableOpacity>
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
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#797884", fontSize: 20, marginBottom: 10 }}>
            or
          </Text>
          <View style={{ flexDirection: "row", columnGap: 20 }}>
            <FontAwesome5 name="facebook" size={30} color="#3b5998" />
            <Entypo name="instagram" size={30} color="#ee2a7b" />
            <AntDesign name="twitter" size={30} color="#00acee" />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "#5E9959",
                fontWeight: "700",
                textDecorationLine: "underline",
                marginLeft: 3,
                fontSize: 16,
              }}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    );
};

export default Login;
