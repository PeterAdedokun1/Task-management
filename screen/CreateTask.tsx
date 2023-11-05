import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  // CheckBox,
  FlatList,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CustomRadioRepeat from "../components/CustomRadioRepeat";
import CustomRadioNotification from "../components/CustomRadioNotification";
import DateTimePicker from "@react-native-community/datetimepicker";
const initialValues = {
  taskTitle: "",
  taskDate: "",
  taskTime: "",
  taskType: "",
  notificationType: "push",
  repeat: "daily",
  taskDescription: "",
};

interface Option {
  label: string;
  value: string;
}

const CreateTask = () => {
  const navigation: any = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [task, setTask] = useState(initialValues);

  const handleRadioPress = (option: string) => {
    setTask({ ...task, repeat: option });
  };
  const handleRadioPress2 = (option: string) => {
    setTask({ ...task, notificationType: option });
  };
  // dropdown
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const data: Option[] = [
    { label: "Event", value: "Event" },
    { label: "Festival", value: "Festival" },
    { label: "Meeting", value: "Meeting" },
    { label: "Group", value: "Group" },
  ];
  const handleSelect = (item: Option) => {
    setTask({ ...task, taskType: item.label });
    setShowDropdown(false);
  };

  //date picker

  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState("empty");

  const onchange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // On iOS, show the picker until "Done" is pressed.
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours:  " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fTime);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  // const onChange = (event: Event, selectedDate: Date | undefined) => {
  //   if (selectedDate !== undefined) {
  //     const currentDate = selectedDate || date;
  //     setShowDatePicker(Platform.OS === "ios"); // On iOS, show the picker until "Done" is pressed.
  //     setDate(currentDate);
  //   }
  // };

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
      <ScrollView>
        <View>
          <View style={{ marginTop: 30 }}>
            <View>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>Task Title</Text>
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
                  />
                </View>
              </View>
              <View>
                <Text>Date: {text}</Text>
                <View>
                  <Button title="DatePicker"  onPress={() => showMode("date")}/>
                  <Button title="TimePicker"  onPress={() => showMode("time")}/>
                </View>
                {show && (
        <DateTimePicker
        testID="dateTimePicker"
        
          value={date}
          mode={mode}
          is24Hour={true}

          display="calendar"
          onChange={onchange}
        />
      )}
              </View>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <View>
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Task Type
                  </Text>
                  <View style={{ marginBottom: 20 }}>
                    <TouchableOpacity
                      onPress={() => setShowDropdown(!showDropdown)}
                      style={{
                        padding: 10,
                        borderWidth: 1,
                        borderColor: "#83E37A",
                        borderRadius: 5,
                        width: 140,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 17,
                          color: `${task.taskType ? "black" : "#868686"}`,
                        }}
                      >
                        {task.taskType || "Select "}
                      </Text>
                    </TouchableOpacity>

                    {showDropdown && (
                      <View
                        style={{
                          position: "absolute",
                          top: 45,
                          width: "100%",
                          backgroundColor: "white",
                          borderRadius: 5,
                          shadowColor: "black",
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.2,
                          elevation: 4,
                          zIndex: 1000,
                        }}
                      >
                        <FlatList
                          data={data}
                          keyExtractor={(item) => item.value}
                          style={{ borderColor: "#83E37A", borderWidth: 1 }}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              onPress={() => handleSelect(item)}
                              style={{
                                padding: 10,
                                borderBottomColor: "#ccc",
                              }}
                            >
                              <Text>{item.label}</Text>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
              {/* NOTIFICATION TYPE */}
              <View style={{ zIndex: -1 }}>
                <Text style={{ fontSize: 17, marginBottom: 10 }}>
                  Notification type
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 15,
                  }}
                >
                  <CustomRadioNotification
                    taskType={task.notificationType}
                    handleRadioPress={handleRadioPress2}
                    title="push"
                    backgroundColor="red"
                    label="Push"
                  />
                  <CustomRadioNotification
                    taskType={task.notificationType}
                    handleRadioPress={handleRadioPress2}
                    title="SMS"
                    backgroundColor="white"
                    label="SMS"
                  />
                  <CustomRadioNotification
                    taskType={task.notificationType}
                    handleRadioPress={handleRadioPress2}
                    title="Com"
                    backgroundColor="white"
                    label="Com"
                  />
                </View>
              </View>
              {/* REPEAT......*/}
              <View style={{ marginTop: 15, zIndex: -1 }}>
                <Text style={{ fontSize: 17, marginBottom: 10 }}>Repeat</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 15,
                  }}
                >
                  <CustomRadioRepeat
                    taskType={task.repeat}
                    handleRadioPress={handleRadioPress}
                    title="daily"
                    backgroundColor="white"
                    label="Daily"
                  />
                  <CustomRadioRepeat
                    taskType={task.repeat}
                    handleRadioPress={handleRadioPress}
                    title="weekly"
                    backgroundColor="white"
                    label="Weekly"
                  />
                  <CustomRadioRepeat
                    taskType={task.repeat}
                    handleRadioPress={handleRadioPress}
                    title="monthly"
                    backgroundColor="white"
                    label="Monthly"
                  />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 25 }}>
                  Add Description
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
                      style={{
                        height: 100,
                        textAlignVertical: "top",
                        fontSize: 19,
                      }}
                      placeholder="Type here..."
                      numberOfLines={30}
                      multiline={true}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  margin: "auto",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    marginTop: 60,
                    backgroundColor: "#5DE750",
                    borderRadius: 10,
                    width: 250,
                    margin: "auto",
                    alignItems: "center",
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    maxWidth: 150,
                  }}
                  // onPress={() => navigation.navigate("createTask")}
                >
                  <AntDesign name="plus" size={24} color="white" />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 22,
                      borderRadius: 600,
                      fontWeight: "500",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginLeft: 10,
                    }}
                  >
                    Create
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#5DE750",
                    borderRadius: 100,
                    padding: 15,
                    marginTop: 60,
                    marginLeft: 20,
                  }}
                >
                  <Feather name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateTask;
