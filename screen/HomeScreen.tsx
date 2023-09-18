import { StyleSheet, Text, View,Platform,SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation: any = useNavigation()
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 10,
        paddingTop: Platform.OS === "android" ? 40 : 0,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="menu-outline" size={38} color="black" />

          <Text style={{ fontSize: 27, fontWeight: "600", marginLeft: 10 }}>
            Dashboard
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="search1" size={28} color="black" />
          <AntDesign
            name="filter"
            size={28}
            color="black"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>

      <ScrollView>
        <View style={{ marginTop: 60 }}>
          <Text style={{ fontSize: 30 }}>Today</Text>
          <View
            style={{
              backgroundColor: "#D8FFD5",
              paddingVertical: 25,
              borderRadius: 10,
              position: "relative",
              marginTop: 30,
            }}
          >
            <View
              style={{
                width: 10,
                height: 50,
                backgroundColor: "#A1F699",
                marginVertical: 20,
                position: "absolute",
                borderRadius: 10,
              }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 25 }}>Interview Meeting</Text>
              <Text style={{ color: "#2DA523" }}>at 9:00am</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#F7FFD5",
              paddingVertical: 25,
              borderRadius: 10,
              position: "relative",
              marginTop: 15,
            }}
          >
            <View
              style={{
                width: 10,
                height: 50,
                backgroundColor: "#D1E96F",
                marginVertical: 20,
                position: "absolute",
                borderRadius: 10,
              }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 25 }}>Interview Meeting</Text>
              <Text style={{ color: "#98B429" }}>at 9:00am</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30 }}>Yesterday</Text>
          <View
            style={{
              backgroundColor: "#FFE4D1",
              paddingVertical: 25,
              borderRadius: 10,
              position: "relative",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 50,
                backgroundColor: "#FFB27B",
                marginVertical: 20,
                position: "absolute",
                borderRadius: 10,
              }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 25 }}>Interview Meeting</Text>
              <Text style={{ color: "#FF8023" }}>at 9:00am</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              marginTop: 60,
              backgroundColor: "#5DE750",
              // marginHorizontal: 90,
              // justifyContent: "center",
              borderRadius: 30,
              width: 250,
              margin: "auto",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 20,
              flexDirection: "row",
              maxWidth: 140,
            }}
            onPress={() => navigation.navigate("createTask")}
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
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen
