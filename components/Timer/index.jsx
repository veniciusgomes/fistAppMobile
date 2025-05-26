import { StyleSheet, Text } from "react-native";

export const Timer = ({ totalSeconds }) => {
  const date = new Date(totalSeconds * 1000);
  const options = {
    minute: "2-digit",
    second: "2-digit",
  };
  return (
    <Text style={styles.time}>{date.toLocaleTimeString("pt-BR", options)}</Text>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
