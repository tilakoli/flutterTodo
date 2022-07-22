import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss;
    setTaskItems([...taskItems, task]);
    setTask();
  };
  const completeTask = (key) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(key, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.sectionTitle}> Today's tasks </Text>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
          >
            <TextInput
              style={styles.input}
              value={task}
              placeholder="write a task"
              onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    height: "100vh",
    flex: 1,
    paddingTop: 35,
    paddingBottom: 50,
    paddingHorizontal: 20,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    borderColor: "#C0C0C0",
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 60,
  },
  addText: {},
});
