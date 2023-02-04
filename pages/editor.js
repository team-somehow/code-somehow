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
// import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from '@react-native-community/hooks';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { data } from '../constants/languages';

const { width, height } = Dimensions.get("window");

const EditorScreen = () => {

    const keyboard = useKeyboard();
    const insets = useSafeAreaInsets();
    const [answer, setAnswer] = useState("");

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [ready, setReady] = useState("");

    useEffect(() => {
        for (var i=0; i<data.length; ++i) {
            if (data[i].value===value) {console.log(data[i]); setReady(data[i].ready); return;}
        }
    }, [value]);
  
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Programming Language
          </Text>
        );
      }
      return null;
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles1.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles1.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles1.placeholderStyle}
                    selectedTextStyle={styles1.selectedTextStyle}
                    inputSearchStyle={styles1.inputSearchStyle}
                    iconStyle={styles1.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Programming Language' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    }}

                />
                </View>


            <CodeEditor
                    style={{
                    ...{
                        fontSize: 18,
                        inputLineHeight: 26,
                        highlighterLineHeight: 26,
                        marginBottom: 180,
                    },
                    ...(keyboard.keyboardShown
                        ? { marginBottom: "auto" }
                        : {}),
                }}
                onChange={(e) => {setAnswer(e)}}
                language={ready}
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
            />

            <TouchableOpacity onPress={() => {
                // console.log(answer, value);
                if (answer.length===0 || ready.length===0) return;
                const Buffer = require("buffer").Buffer;
                let encodedCode = new Buffer(answer).toString("base64");
                console.log(encodedCode, value);
                console.log(ready)
                }}>
                <Text style={{
                   ... {
                fontSize: 20,
                marginTop: -150,
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

const styles1 = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 13,
      marginBottom: 15,
      borderRadius: 10,
    },
    dropdown: {
      height: 30,
      borderColor: 'gray',
      borderWvalueth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      wvalueth: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
  

export default EditorScreen;
