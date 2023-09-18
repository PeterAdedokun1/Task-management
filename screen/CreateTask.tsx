import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";
// import DatePicker from "react-native-datepicker";
export default function CreateTask() {
    const navigation: any = useNavigation();
     const [selectedDate, setSelectedDate] = useState("");
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        marginHorizontal: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30 }}>Create Task</Text>
      </View>
      <View>
        <View>
          <View style={{ marginTop: 30 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => navigation.replace("main")}
              //   validationSchema={validateSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View>
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Task Title
                  </Text>
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
                      <TextInput
                        style={{ height: 50, fontSize: 19 }}
                        placeholder="Interview Meeting"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text style={{ fontSize: 20, marginBottom: 10 }}>
                        Task Title
                      </Text>
                      {/* <DatePicker
                        style={{ width: 200 }}
                        date={selectedDate}
                        mode="date"
                        placeholder="Select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => setSelectedDate(date)}
                      /> */}
                    </View>
                  </View>
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
    </SafeAreaView>
  );
}
