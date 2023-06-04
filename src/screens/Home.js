import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import Intro from "../components/Intro";
import Taskcontainer from "../components/Taskcontainer";

export default function Home() {
 
    return (
      <View style={styles.home_container}>
        <Text style={styles.home_title}>Task Detail</Text>
        <ScrollView style={{ width: "100%" }}>
          <Intro />
          <Taskcontainer />
        </ScrollView>
      </View>
    );
  
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  home_title: {
    fontSize: 24,
    color: "#333333",
    fontWeight: 500,
    width: "100%",
    textAlign: "center",
    marginTop: 64,
    marginBottom : 30,
  },
});


