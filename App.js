/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {strings} from './Lib/res/strings/strings_en'

const App = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <Text
      style={[
        styles.myText,
        styles.myTextBackground,
        { backgroundColor: "red" },
        {position: 'absolute', left: 10, top: 20},
      ]}
    >
      {strings.firstString}
    </Text>
    <Text
      style={[
        styles.myText,
        styles.myTextBackground,
        { backgroundColor: "green" },
        {position: 'absolute', left: 20, top: 40},
      ]}
    >
      {strings.secondString}
    </Text>
    <Text
      style={[
        styles.myText,
        styles.myTextBackground,
        { backgroundColor: "skyblue" },
        {position: 'absolute', left: 30, top: 60},
      ]}
    >
      {strings.thirdString}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  myText: {
    fontSize: 40,
    color: "maroon"
  },
  myTextBackground: {
    backgroundColor: "skyblue",
    padding: 20
  }
});

export default App;
