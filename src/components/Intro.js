import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTitle, editDescription } from "./../store/action.js";

const Intro = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.mainReducer);
  const [title, setTitle] = useState(null);
  const [titile_editable, setTitle_editable] = useState(false);
  const [description, setDescription] = useState(null);
  const [description_editable, setDescription_editable] = useState(false);

  useEffect(() => {
    setTitle(taskData.title);
    setDescription(taskData.description);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={styles.title}>Task Title</Text>
        <Pressable
          onLongPress={() => {
            setTitle_editable(true);
          }}
        >
          <TextInput
            style={[
              styles.input_title,
              { backgroundColor: titile_editable ? "#F9F9FB" : "#fff" },
            ]}
            onChangeText={(text) => {
              setTitle(text);
            }}
            onEndEditing={() => {
              setTitle_editable(false);
              dispatch(editTitle(title));
            }}
            enterKeyHint="done"
            value={title}
            placeholder="Longpress to edit"
            editable={titile_editable}
          />
        </Pressable>
      </View>

      <View style={{ width: "100%" }}>
        <Text style={styles.title}> Descriptions </Text>
        <Pressable
          onLongPress={() => {
            setDescription_editable(true);
          }}
        >
          <TextInput
            style={[
              styles.input_description,
              { backgroundColor: description_editable ? "#F9F9FB" : "#fff" },
            ]}
            onChangeText={(text) => {
              setDescription(text);
            }}
            onEndEditing={() => {
              setDescription_editable(false);
              dispatch(editDescription(description));
            }}
            enterKeyHint="done"
            value={description}
            placeholder="Longpress to edit"
            editable={description_editable}
            multiline={true}
          />
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageCover}>
          <Image
            style={styles.tinyimage}
            source={require("./../../assets/images/first.png")}
          />
        </View>
        <View style={styles.imageCover}>
          <Image
            style={styles.tinyimage}
            source={require("./../../assets/images/second.png")}
          />
        </View>
        <View style={styles.imageCover}>
          <Image
            style={styles.tinyimage}
            source={require("./../../assets/images/third.png")}
          />
        </View>
        <View style={styles.imageCover}>
          <Image
            style={styles.tinyimage}
            source={require("./../../assets/images/fourth.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    gap: 20,
  },
  title: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 20,
    color: "#5D6B98",
  },
  input_title: {
    height: 40,
    marginVertical: 4,
    borderWidth: 0,
    fontSize: 30,
    width: "100%",
    marginLeft: 5,
    color: "#1D2939",
    fontWeight: "600",
  },
  input_description: {
    marginVertical: 8,
    borderWidth: 0,
    fontSize: 20,
    marginLeft: 5,
    color: "#111322",
    fontWeight: "500",
    maxHeight: 250,
    overflow: "hidden",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginLeft : 15,
     marginBottom : 25
  },
  imageCover: {
    padding: 2,
    backgroundColor: "white",
    borderRadius: 35,
    marginLeft: -8,
    width: 36,
    height: 35,
    justifyContent : "center",
    alignItems : "center",
  },
  tinyimage: {
    backgroundColor: "white",
    borderRadius: 32,
    width: 32,
    height: 32,
  },
});

export default Intro;
