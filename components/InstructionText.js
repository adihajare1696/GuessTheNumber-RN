import { StyleSheet, View, Text } from "react-native";

function InstructionText({children}) {
    return ( <Text style={styles.instructionText}> {children} </Text> );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText:{
        fontFamily: 'open-sans',
        color: '#ffebcd',
        fontSize: 24,
      }
})