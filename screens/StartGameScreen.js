import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText"; 

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInoutHandler() {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    onPickNumber(choosenNumber);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInoutHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: "#8b4513",
    borderRadius: 8,
    //elevation use for android
    elevation: 8,
    //toadd elevation for ios use below 4 props
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "Bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  screenContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  instructionText:{
    color: '#ffebcd',
    fontSize: 24,
  }
});
