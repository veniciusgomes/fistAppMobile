import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      style={active ? styles.contextButtonAtive : null}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonText: { fontSize: 12.5, color: "#fff", padding: 8 },
  contextButtonAtive: { backgroundColor: "#144480", borderRadius: 8 },
});
