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
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Modal, Pressable } from "react-native";
// import ConfettiCannon from "react-native-confetti-cannon";

const { width, height } = Dimensions.get("window");

const EditorScreen = () => {
  const keyboard = useKeyboard();
  const insets = useSafeAreaInsets();
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [output, setOutput] = useState("");
  const [time, setTime] = useState("");
  const [memory, setMemory] = useState("");
  const [token, setToken] = useState("");

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [ready, setReady] = useState("");
  const [error, setError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [exitCode, setExitCode] = useState("");

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

  const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem("savedProbsMock", JSON.stringify(value));
      console.log("Saved");
    } catch (error) {
      console.log(error);
    }
  };

  // getting data
  const getUser = async () => {
    try {
      const userData = await JSON.parse(
        await AsyncStorage.getItem("savedProbsMock")
      );
      if (userData === null) return [];
      return userData;
    } catch (error) {
      console.log(error);
    }
  };

  const finalSubmit = () => {
    console.log(answer);
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
        "X-RapidAPI-Key": "25c874290cmsh837021c8dfa2dbap12574ejsn1f6f99f3691f",
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
      .then(async function (response) {
        // console.log(response.data);

        let userData = await getUser();
        userData.push(response.data.token);
        console.log(userData);
        storeUser(userData);

        const options1 = {
          method: "GET",
          url:
            "https://judge0-ce.p.rapidapi.com/submissions/" +
            response.data.token,
          params: { base64_encoded: "false", fields: "*" },
          headers: {
            "X-RapidAPI-Key":
              "25c874290cmsh837021c8dfa2dbap12574ejsn1f6f99f3691f",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        };

        axios
          .request(options1)
          .then(function (res) {
            // console.log(res.data.status.description);
            // console.log(res.data.stdout);
            setMemory(res.data.memory);
            if (
              res.data?.status?.description != null &&
              res.data?.status?.description === "Accepted"
            ) {
              setSubmitted(true);
              setOutput(res.data.stdout);
              setTime(res.data.time);
              setToken(res.data.token);
              setError(false);
            } else {
              // console.log(res.data)
              setError(true);
              setErrorDescription(res.data.status.description);
              setExitCode(res.data.exit_code);
              setSubmitted(false);
            }
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
        <Text
          style={[
            { color: "#9197AB", marginBottom: 4 },
            isFocus && { color: "#D7E2FF", display: "none" },
          ]}
        >
          Programming Language
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderLabel()}
        <View style={styles1.container}>
          <Dropdown
            style={[styles1.dropdown, isFocus && { borderColor: "#D7E2FF" }]}
            placeholderStyle={styles1.placeholderStyle}
            selectedTextStyle={styles1.selectedTextStyle}
            inputSearchStyle={styles1.inputSearchStyle}
            iconStyle={styles1.iconStyle}
            data={data}
            search
            itemContainerStyle={{
              backgroundColor: "#f1f2f3",
              borderWidth: 0.4,
              borderColor: "#9197AB",
              borderRadius: 8,
              color: "#D7E2FF",
            }}
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

        {/* {submitted && (
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
      )} */}

        {/* <View value={answer}> */}
        <CodeEditor
          style={{
            ...{
              fontSize: 18,
              inputLineHeight: 26,
              highlighterLineHeight: 26,
              marginBottom: 32,
              height: 440,
              backgroundColor: "#202226",
            },
            ...(keyboard.keyboardShown
              ? { marginBottom: "auto", height: 260 }
              : {}),
          }}
          onChange={(e) => {
            // console.log("before if", deleteText);
            // if (!deleteText) {
            //   setDeleteText(true);
            //   console.log("aaya");
            //   return;
            // }
            // console.log("e", e);
            // console.log("this is ", answer);
            setAnswer(e);
          }}
          // onKeyPress={(e) => {
          //   // console.log("e", e);
          //   if (e === "Backspace") {
          //     setAnswer(answer.substr(0, answer.length - 1));
          //     return;
          //   }
          //   // console.log("this is ", answer);
          //   setAnswer(answer + e);
          // }}
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
              width: width - 48,
              // marginLeft: -width * 0.05,
              backgroundColor: "#121213",
              padding: 10,
              justifyContent: "space-around",
              display: "none",
            },
            ...(keyboard.keyboardShown ? { display: "flex" } : {}),
          }}
        >
          <TouchableOpacity
            onPress={() => {
              const str = answer + "<";
              console.log("chala");
              setAnswer(str);
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {"<"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAnswer((prev) => prev + ">")}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {">"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + "{")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {"{"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + "}")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {"}"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + "(")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {"("}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + ")")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {")"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + ";")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {";"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + "/")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {"/"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => `${prev}"`)}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {'"'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer((prev) => prev + "   ")}
            style={{}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#f1f2f3" }}>
              {"TAB"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={finalSubmit}
          style={{
            ...{
              borderColor: "#FFB188",
              borderWidth: 1,
              width: width - 80,
              borderRadius: 100,
              padding: 16,
              alignSelf: "center",
            },
            ...(keyboard.keyboardShown ? { display: "none" } : {}),
          }}
        >
          <Text
            style={{
              color: "#D7E2FF",
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Submit Code
          </Text>
        </TouchableOpacity>
        {submitted && (
          <>
            {/* <ConfettiCannon
              count={200}
              origin={{ x: -10, y: 0 }}
              autoStart={true}
            /> */}
            <View
              style={{
                backgroundColor: "#202226",
                padding: 16,
                width: "100%",
                borderRadius: 16,
                elevation: 4,
                marginVertical: 16,
                borderWidth: 0.8,
                borderColor: "#25ff88",
              }}
            >
              <Text
                style={{
                  color: "#D7E2FF",
                  fontWeight: "600",
                  fontSize: 16,
                  marginBottom: 4,
                  fontFamily: "monospace",
                }}
              >
                Output:
              </Text>
              <Text
                style={{
                  color: "#D7E2FF",
                  fontWeight: "600",
                  fontSize: 18,
                  fontFamily: "monospace",
                }}
              >
                {output}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
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
                    fontSize: 24,
                    fontWeight: "900",
                    marginBottom: 2,
                  }}
                >
                  {time}
                </Text>
                <Text
                  style={{
                    color: "#D7E2FF",
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 4,
                    textAlign: "center",
                  }}
                >
                  {`Time (in secs)`}
                </Text>
              </View>

              <View
                style={{
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
                    fontSize: 24,
                    fontWeight: "900",
                    marginBottom: 2,
                  }}
                >
                  {memory}
                </Text>
                <Text
                  style={{
                    color: "#D7E2FF",
                    fontSize: 16,
                    fontWeight: "600",
                    marginBottom: 4,
                    textAlign: "center",
                  }}
                >
                  {`Memory (in bytes)`}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#D7E2FF",
                fontWeight: "600",
                fontSize: 14,
                marginBottom: 4,
                marginVertical: 4,
              }}
            >
              Submission ID:
            </Text>
            <Text
              style={{
                color: "#D7E2FF",
                fontWeight: "400",
                fontSize: 16,
                marginBottom: 16,
              }}
              selectable
            >
              {token}
            </Text>
          </>
        )}

        {error && (
          <>
            <View
              style={{
                backgroundColor: "#202226",
                padding: 16,
                width: "100%",
                borderRadius: 16,
                elevation: 4,
                marginVertical: 16,
                borderWidth: 0.8,
                borderColor: "#ff2544",
              }}
            >
              <Text
                style={{
                  color: "#D7E2FF",
                  fontWeight: "600",
                  fontSize: 16,
                  marginBottom: 4,
                  fontFamily: "monospace",
                }}
              >
                Error:
              </Text>
              <Text
                style={{
                  color: "#D7E2FF",
                  fontWeight: "600",
                  fontSize: 18,
                  fontFamily: "monospace",
                }}
              >
                {errorDescription}
              </Text>
            </View>
            <Text
              style={{
                color: "#D7E2FF",
                fontWeight: "600",
                fontSize: 14,
                marginBottom: 4,
                marginVertical: 4,
              }}
            >
              Exit Code: {exitCode}
            </Text>
            <Text
              style={{
                color: "#D7E2FF",
                fontWeight: "600",
                fontSize: 14,
                marginBottom: 4,
                marginVertical: 4,
              }}
            >
              Submission ID:
            </Text>
            <Text
              style={{
                color: "#D7E2FF",
                fontWeight: "400",
                fontSize: 16,
                marginBottom: 16,
              }}
              selectable
            >
              {token}
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#16171a",
  },
});

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: "#202226",
    padding: 13,
    marginBottom: 15,
    borderRadius: 10,
  },
  dropdown: {
    height: 24,
    borderColor: "#9197AB",
    // borderWvalueth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    // backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#9198AD",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#D7E2FF",
  },
  iconStyle: {
    // wvalueth: 24,
    height: 24,
    color: "#D7E2FF",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor: "#f1f2f3",
  },
});

const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 24,
    width: "100%",
  },
  textview: {
    color: "white",
    fontWeight: "700",
  },
});

export default EditorScreen;
