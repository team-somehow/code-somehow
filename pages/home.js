import React, { useEffect, useRef, useState } from "react";
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
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome,
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
const randomRange = (maxNum) => Math.floor(Math.random() * maxNum) + 10;
const HomeScreen = ({ navigation, route }) => {
  const dataRings = {
    labels: ["Easy", "Medium", "Hard"], // optional
    data: [0.4, 0.6, 0.8],
  };

  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim3, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim4, {
      toValue: 1,
      duration: 4500,
      useNativeDriver: true,
    }).start();
  }, []);

  const tempDates = [
    "2023-01-02",
    "2023-01-03",
    "2023-01-04",
    "2023-01-05",
    "2023-01-06",
    "2023-01-12",
    "2023-01-18",
    "2023-01-23",
    "2023-01-26",
    "2023-01-28",
    "2023-01-30",
    "2023-01-31",
    "2023-02-12",
    "2023-02-02",
    "2023-02-06",
    "2023-02-12",
    "2023-02-14",
    "2023-02-28",
    "2023-02-30",
    "2023-03-01",
    "2023-03-05",
    "2023-03-08",
    "2023-03-10",
    "2023-03-14",
    "2023-03-18",
    "2023-03-23",
    "2023-03-24",
    "2023-03-30",
    "2023-04-02",
    "2023-04-06",
  ];
  const commitsData = [];
  tempDates.forEach((date) =>
    commitsData.push({ date, count: randomRange(50) })
  );

  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfigGit = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const chartConfigRings = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 146, 255, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const chartConfigBar = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 146, 26, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: width - 48 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "800",
              letterSpacing: 1.8,
              color: "#D7E2FF",
            }}
          >
            Any Kode
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={{
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
              }}
            >
              <Ionicons name="ios-chatbox-outline" size={24} color="#D7E2FF" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Resource")}
              style={{
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
              }}
            >
              <Ionicons name="documents-outline" size={24} color="#D7E2FF" />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View
          style={{
            opacity: fadeAnim1,
            backgroundColor: "#202226",
            padding: 16,
            width: "100%",
            borderRadius: 8,
            elevation: 64,
            flexDirection: "row",
            marginBottom: 16,
          }}
        >
          <Image
            source={{ uri: "https://source.unsplash.com/random/?profile/" }}
            style={{
              height: 64,
              width: 64,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          <View style={{ width: "70%" }}>
            <Text
              style={{
                color: "#D7E2FF",
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 4,
                letterSpacing: 0.8,
              }}
            >
              Vinay Kanse
            </Text>
            <Text style={{ color: "#D7E2FF", fontSize: 16, fontWeight: "400" }}>
              Student | Developer | MERN | KJSCE CodeCell
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("LinkedIN")}
                style={{
                  backgroundColor: "#363940",
                  padding: 8,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  width: 40,
                  elevation: 8,
                }}
              >
                <FontAwesome name="linkedin-square" size={24} color="#D7E2FF" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log("LinkedIN")}
                style={{
                  backgroundColor: "#363940",
                  padding: 8,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  width: 40,
                  elevation: 8,
                }}
              >
                <FontAwesome name="github-square" size={24} color="#D7E2FF" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log("LinkedIN")}
                style={{
                  backgroundColor: "#363940",
                  padding: 8,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  width: 40,
                  elevation: 8,
                }}
              >
                <FontAwesome name="stack-overflow" size={24} color="#D7E2FF" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            opacity: fadeAnim2,
            backgroundColor: "#202226",
            padding: 16,
            width: "100%",
            borderRadius: 8,
            elevation: 64,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              color: "#D7E2FF",
              fontSize: 18,
              fontWeight: "900",
              marginBottom: 4,
            }}
          >
            My skills
          </Text>
          <Text
            style={{
              color: "#4E9CFE",
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 4,
            }}
          >
            HTML, CSS, JavaScript, ReactJS, React Native,{" "}
          </Text>
        </Animated.View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Animated.View
            style={{
              opacity: fadeAnim3,
              backgroundColor: "#202226",
              padding: 16,
              width: "48%",
              borderRadius: 8,
              elevation: 64,
              marginBottom: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#4E9CFE",
                fontSize: 40,
                fontWeight: "900",
                marginBottom: 2,
              }}
            >
              61
            </Text>
            <Text
              style={{
                color: "#D7E2FF",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 4,
                textAlign: "center",
              }}
            >
              Streak Maintained
            </Text>
          </Animated.View>

          <Animated.View
            style={{
              opacity: fadeAnim3,
              backgroundColor: "#202226",
              padding: 16,
              width: "48%",
              borderRadius: 8,
              elevation: 64,
              marginBottom: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#4E9CFE",
                fontSize: 40,
                fontWeight: "900",
                marginBottom: 2,
              }}
            >
              512
            </Text>
            <Text
              style={{
                color: "#D7E2FF",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 4,
                textAlign: "center",
              }}
            >
              Problems Solved
            </Text>
          </Animated.View>
        </View>
        <Animated.View style={{ opacity: fadeAnim4 }}>
          <ContributionGraph
            values={commitsData}
            endDate={new Date("2023-04-01")}
            numDays={94}
            width={width}
            height={220}
            chartConfig={chartConfigGit}
          />
        </Animated.View>

        <Animated.View style={{ opacity: fadeAnim4 }}>
          <ProgressChart
            data={dataRings}
            width={width - 56}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfigRings}
            hideLegend={false}
          />
        </Animated.View>

        <Animated.View style={{ opacity: fadeAnim4 }}>
          <BarChart
            data={dataBar}
            width={width}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfigBar}
            verticalLabelRotation={30}
          />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#16171a",
    alignItems: "center",
  },
});

export default HomeScreen;
