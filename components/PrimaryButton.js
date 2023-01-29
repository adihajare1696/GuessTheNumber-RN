import { View, Text, Pressable, StyleSheet } from "react-native";


function PrimaryButton({ children, onPress }) {
  
  return (
    <View style={styles.buttonRippleContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressedRipple] : styles.container
        }
        onPress={onPress}
        android_ripple={{ color: "#deb887" }}
      >
        <Text style={styles.buttonText}> {children} </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonRippleContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#ffebcd",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
  },
  buttonText: {
    color: "#8b4513",
    textAlign: "center",
  },
  pressedRipple: {
    //ripple for ios
    opacity: 0.75,
  },
});
