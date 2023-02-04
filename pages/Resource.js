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
    <View>
      <Text>Resource</Text>
      <FlatList
        data={documentations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPressed={() => Linking.openURL(item.link)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Resource;
