import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import ItemList from "./components/ItemList";
import tanses from "./dummies/tanses";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tanses}
        renderItem={({ item }) => (
          <ItemList image={item.image} tansuName={item.tansuName} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
