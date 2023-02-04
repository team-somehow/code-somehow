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
    Alert
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const EditProfileScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>EditProfileScreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
});

export default EditProfileScreen;