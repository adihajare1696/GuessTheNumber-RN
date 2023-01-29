import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import InstructionText from "../components/InstructionText"; 


function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Title>Congratulations!</Title>
      <View style={{margin: 20}}>
      <InstructionText>You Guessed Right Number</InstructionText>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 75,
        padding: 25,
        alignItems: 'center',
    },
    InstructionTextStyle: {
      margin: 20,
    }
})