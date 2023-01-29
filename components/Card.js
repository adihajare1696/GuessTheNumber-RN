import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    card: {
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
});
