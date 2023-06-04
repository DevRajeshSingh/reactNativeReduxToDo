import React from "react";
import { toggleCompleted } from "./../store/action";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  
  return (
    <View style={styles.item_container}>
      {task.completed ? (
        <Pressable
          onPress={() => {
            dispatch(toggleCompleted(task.id));
          }}
        >
          <AntDesign name="checkcircle" size={24} color="#7F56D9" />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            dispatch(toggleCompleted(task.id));
          }}
        >
          <AntDesign name="checkcircleo" size={24} color="black" />
        </Pressable>
      )}
      <Text style={styles.task_title}>{task.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item_container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
    paddingVertical: 8,
    paddingLeft: 16,
    backgroundColor: "#F9F9FB",
    borderRadius: 16,
  },
  task_title: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "500",
    marginLeft: 16,
  },
});

export default TaskItem;
