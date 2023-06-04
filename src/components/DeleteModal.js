import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllTask, deleteCompletedTask } from "./../store/action.js";

const DeleteModal = (props) => {
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.modalTitle}>
              Which task do you want to delete?
            </Text>
          </View>

          <Pressable
            style={({ pressed }) =>
              pressed
                ? [{ opacity: 0.7 }, styles.deleteButton]
                : styles.deleteButton
            }
            onPress={() => {
              dispatch(deleteCompletedTask());
              props.setModalVisible(false);
            }}
          >
            <Text style={styles.deleteButtonText}>Completed Task</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) =>
              pressed
                ? [{ opacity: 0.7 }, styles.deleteButton]
                : styles.deleteButton
            }
            onPress={() => {
              dispatch(deleteAllTask());
              props.setModalVisible(false);
            }}
          >
            <Text style={styles.deleteButtonText}>All Tasks</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) =>
              pressed
                ? [{ opacity: 0.7 }, styles.cancelButton]
                : styles.cancelButton
            }
            onPress={() => {
              props.setModalVisible(false);
            }}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 26,
    color: "#5D6B98",
    marginBottom: 10,
  },

  deleteButton: {
    borderRadius: 20,
    elevation: 2,
    paddingVertical: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#111322",
    fontWeight: "bold",
    opacity: 0.6,
    fontSize: 18,
  },

  cancelButton: {
    backgroundColor: "#7F56D9",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default DeleteModal;
