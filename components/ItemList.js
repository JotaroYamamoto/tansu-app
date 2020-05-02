import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    height: 90,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 90,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  itemImg: {
    height: "100%",
    width: "100%",
  },
  tansuName: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
  },
});

const ItemList = ({ tansuName, image }) => {
  return (
    <View style={styles.item}>
      <View style={styles.leftContainer}>
        <Image style={styles.itemImg} source={{ uri: image }}></Image>
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={1} style={styles.tansuName}>
          {tansuName}
        </Text>
      </View>
    </View>
  );
};

export default ItemList;
