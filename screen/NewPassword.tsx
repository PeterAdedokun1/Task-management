import { View, Text, SafeAreaView, TouchableOpacity,TextInput ,Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import * as yup from "yup";
import { Formik } from "formik";
interface FormValues {
  password: string;
  confirmPassword: string;
}
export default function NewPassword() {
    const navigation: any = useNavigation()
const validateSchema = yup.object().shape({
  password: yup.string().required("Please enter a password to continue "),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Please confirm your password"),
});
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 10,
        paddingTop: Platform.OS === "android" ? 40 : 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ marginTop: 40, marginBottom: 50, alignItems: "center" }}>
        <Text style={{ fontSize: 30, marginBottom: 30 }}>
          Create A New Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#6B6B6B",
            marginTop: 6,
            lineHeight: 20,
          }}
        >
          Your new password must be different from previous password.
        </Text>
      </View>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={(values) => navigation.navigate("successPassword")}
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
                  Create Password
                </Text>
                <TextInput
                  style={{ height: 50, fontSize: 19 }}
                  placeholder="Enter Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
            </View>
            {errors.password && (
              <Text style={{ color: "red", marginTop: 5 }}>
                {errors.password}
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
                  Confirm Password
                </Text>
                <TextInput
                  style={{ height: 50, fontSize: 19 }}
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                />
              </View>
            </View>
            {errors.confirmPassword && (
              <Text style={{ color: "red", marginTop: 5 }}>
                {errors.confirmPassword}
              </Text>
            )}

            <TouchableOpacity
              style={{
                marginTop: 70,
                backgroundColor: "#5DE750",
                marginHorizontal: 90,
                justifyContent: "center",
                borderRadius: 60,
                paddingVertical: 15,
              }}
              // onPress={() => handleSubmit()}
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
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}