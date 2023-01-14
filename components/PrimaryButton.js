import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});
