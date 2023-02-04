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
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from '@react-native-community/hooks';

const { width, height } = Dimensions.get("window");

const EditorScreen = ({ navigation, route }) => {

    const keyboard = useKeyboard();
    const insets = useSafeAreaInsets();
    const [answer, setAnswer] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <CodeEditor
                    style={{
                    ...{
                        fontSize: 18,
                        inputLineHeight: 26,
                        highlighterLineHeight: 26,
                        marginBottom: 110
                    },
                    ...(keyboard.keyboardShown
                        ? { marginBottom: "auto" }
                        : {}),
                }}
                onChange={(e) => {setAnswer(e)}}
                language="javascript"
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
            />

            <TouchableOpacity onPress={() => {console.log(answer)}}>
                <Text style={{
                   ... {
                fontSize: 20,
                marginTop: -70,
                },
                ...(keyboard.keyboardShown
                    ? { display: "none" }
                    : {}),
                }}>
                    Submit
                    </Text></TouchableOpacity>
        
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

export default EditorScreen;
