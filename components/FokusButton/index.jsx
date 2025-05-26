import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b872ff",
    padding: 8,
    borderRadius: 32,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 18, textAlign: "center", color: "#021123" },
});
