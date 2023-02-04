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
// import KeyboardListener from "react-native-keyboard-listener";
// import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboard } from "@react-native-community/hooks";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { data } from "../constants/languages";
import axios from "axios";

import { Modal, Pressable } from "react-native";

const { width, height } = Dimensions.get("window");

const EditorScreen = () => {
  const keyboard = useKeyboard();
  const insets = useSafeAreaInsets();
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [output, setOutput] = useState("");

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [ready, setReady] = useState("");
  const [deleteText, setDeleteText] = useState(true);

  useEffect(() => {
    for (var i = 0; i < data.length; ++i) {
      // console.log(data[i].value);
      // console.log(value)
      if (data[i].value === value) {
        console.log(data[i]);
        setReady(data[i].ready);
        return;
      }
    }
  }, [value]);

  const finalSubmit = () => {
    if (answer.length === 0 || ready.length === 0) return;
    const Buffer = require("buffer").Buffer;
    let encodedCode = new Buffer(answer).toString("base64");
    // console.log(encodedCode, value);
    // console.log(ready)

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "c3db0a96eemsh1a6c423dc0d2339p14805fjsn27d104a551e9",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data:
        '{"language_id":' +
        value.toString() +
        ',"source_code":"' +
        encodedCode +
        '"}',
    };

    //   console.log(options);

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);

        const options1 = {
          method: "GET",
          url:
            "https://judge0-ce.p.rapidapi.com/submissions/" +
            response.data.token,
          params: { base64_encoded: "false", fields: "*" },
          headers: {
            "X-RapidAPI-Key":
              "c3db0a96eemsh1a6c423dc0d2339p14805fjsn27d104a551e9",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        };

        axios
          .request(options1)
          .then(function (res) {
            setSubmitted(true);
            console.log(res.data.stdout);
            setOutput(res.data.stdout);
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
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
          style={[styles1.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles1.placeholderStyle}
          selectedTextStyle={styles1.selectedTextStyle}
          inputSearchStyle={styles1.inputSearchStyle}
          iconStyle={styles1.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Programming Language" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      {submitted && (
        <View style={styles2.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={submitted}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setSubmitted(false);
            }}
          >
            <View style={styles2.centeredView}>
              <View style={styles2.modalView}>
                <Text style={styles2.modalText}>{output}</Text>
                <Pressable
                  style={[styles2.button, styles2.buttonClose]}
                  onPress={() => setSubmitted(false)}
                >
                  <Text style={styles2.textStyle}>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}

      {/* <View value={answer}> */}
      <CodeEditor
        style={{
          ...{
            fontSize: 18,
            inputLineHeight: 26,
            highlighterLineHeight: 26,
            marginBottom: 180,
          },
          ...(keyboard.keyboardShown ? { marginBottom: "auto" } : {}),
        }}
        // onChange={(e) => {
        //     console.log("before if", deleteText);
        //     if (!deleteText) {
        //       setDeleteText(true);
        //       console.log("aaya");
        //       return;
        //     }
        //     console.log("e", e);
        //     console.log("this is ", answer);
        //     setAnswer(e);

        // }}
        onKeyPress={(e) => {
          // console.log("e", e);
          if (e === "Backspace") {
            setAnswer(answer.substr(0, answer.length - 1));
            return;
          }
          // console.log("this is ", answer);
          setAnswer(answer + e);
        }}
        language={ready}
        syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
        showLineNumbers
        v={answer}
      />
      {/* </View> */}

      <View
        style={{
          ...{
            flexDirection: "row",
            width: width,
            marginLeft: -width * 0.05,
            backgroundColor: "white",
            padding: 10,
            justifyContent: "space-around",
          },
        }}
      >
        <TouchableOpacity
          onPress={() => {
            const str = answer + "<";
            console.log("chala");
            setAnswer(str);
          }}
        >
          <Text fontSize="4">{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer((prev) => prev + ">")}>
          <Text fontSize="4">{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer((prev) => prev + "{")}>
          <Text fontSize="4">{"{"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer((prev) => prev + "}")}>
          <Text fontSize="4">{"}"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer((prev) => prev + ";")}>
          <Text fontSize="4">{";"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer((prev) => prev + "   ")}>
          <Text fontSize="4">{"TAB"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={finalSubmit}>
        <Text
          style={{
            ...{
              fontSize: 20,
              marginTop: -150,
            },
            ...(keyboard.keyboardShown ? { display: "none" } : {}),
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
});

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 13,
    marginBottom: 15,
    borderRadius: 10,
  },
  dropdown: {
    height: 30,
    borderColor: "gray",
    borderWvalueth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
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

const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default EditorScreen;