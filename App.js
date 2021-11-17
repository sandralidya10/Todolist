import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Kegiatan hari ini */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/*Daftar / item kegiatan hari ini*/}
          <Task text={"Kegiatan 1"} />
          <Task text={"Kegiatan 2"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 94,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  }
});
