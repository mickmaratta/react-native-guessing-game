import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans-bold",
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: '70%',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 350 ? 28 : 36,
    fontWeight: "bold",
  },
});
