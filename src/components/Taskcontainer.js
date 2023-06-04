import React from "react";
import TaskItem from "./TaskItem";
import { addTask } from "./../store/action";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import DeleteModal from "./DeleteModal";

const Taskcontainer = () => {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.mainReducer);
  return (
    <View style={styles.task_container}>
      <DeleteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 20,
            color: "#5D6B98",
          }}
        >
          Task List
        </Text>
        <Pressable
          style={({ pressed }) => pressed && { opacity: 0.7 }}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Ionicons name="trash" size={25} color="#F30000" />
        </Pressable>
      </View>
      <View style={{ width: "100%", marginTop: 16 }}>
        {allTasks &&
          allTasks.tasks.map((task) => {
            return <TaskItem key={task.id} task={task} />;
          })}
      </View>
      <View style={styles.input_container}>
        <AntDesign name="plus" size={24} color="#ABB6C8" />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#ABB6C8"}
          placeholder="Add a new task"
          value={taskTitle}
          onChangeText={(text) => setTaskTitle(text)}
          onEndEditing={(e) => {
            if (
              e.nativeEvent.text !== "" &&
              e.nativeEvent.text !== " " &&
              e.nativeEvent.text !== "  " &&
              e.nativeEvent.text !== "   " &&
              e.nativeEvent.text !== "    "
            ) {
              dispatch(addTask(e.nativeEvent.text));
              setTaskTitle("");
            }
          }}
          multiline={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task_container: {
    width: "100%",
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  input_container: {
    flex: 1,
    flexDirection: "row",
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
  input: {
    fontWeight: "500",
    fontSize: 24,
    color: "#000000",
    marginLeft: 16,
    height: "100%",
    flex: 1,
  },
});

export default Taskcontainer;
