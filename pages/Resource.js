import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import documentations from "../constants/documentations";

const Resource = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Resources</Text>
      <FlatList
        style={styles.card}
        data={documentations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
            <Text style={styles.linkTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#16171a",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#202226",
    padding: 16,
    width: "100%",
    borderRadius: 8,
    elevation: 64,
    flexDirection: "row",
    marginBottom: 16,
  },
  heading: {
    color: "#D7E2FF",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 16,
  },
  linkTitle: {
    color: "white",
    marginVertical: 10,
    fontSize: 16,
  },
});

export default Resource;
