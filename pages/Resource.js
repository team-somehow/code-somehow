import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  FlatList,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Octicons, 
  Feather
} from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const { width, height } = Dimensions.get("window");
import documentations from "../constants/documentations";

const Resource = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Resources</Text>
      <FlatList
        data={documentations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.card}>
            <Text style={styles.linkTitle}>{item.title}</Text>
            {/* <Octicons name="link-external" size={24} color="#D7E2FF64" /> */}
            <Feather name="external-link" size={24} color="#D7E2FF64" />
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
    // alignItems: "center",
  },
  card: {
    backgroundColor: "#202226",
    padding: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 48,
    borderRadius: 8,
    elevation: 6,
    flexDirection: "row",
    marginBottom: 16,
  },
  heading: {
    textAlign: 'left',
    color: "#D7E2FF",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginBottom: 24,
  },
  linkTitle: {
    color: "#D7E2FF",
    marginVertical: 10,
    fontSize: 16,
  },
});

export default Resource;
