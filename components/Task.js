import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <TouchableOpacity style={style.square}></TouchableOpacity>
        <Text style={style.itemText}>{text}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};
const style = StyleSheet.create({
  item: {
    paddingHorizontal: 10,

    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C0C0C0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  square: {},
  itemText: {
    maxWidth: "80%",
  },
  itemText: {
    width: "100%",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#55BCF6",
  },
});

export default Task;
