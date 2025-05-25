import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={require("./pomodoro.png")} />
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonAtive}>
            <Text style={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Pausa curta</Text>
          </Pressable>
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Pausa longa</Text>
          </Pressable>
        </View>
        <Text style={styles.time}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>fim por fim, </Text>
        <Text style={styles.footerText}>foi feito por mim</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  images: { width: "60%", height: "30%" },
  actions: {
    padding: 24,
    borderRadius: 32,
    width: "80%",
    backgroundColor: "#14448080",
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  time: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: { backgroundColor: "#b872ff", padding: 8, borderRadius: 32 },
  buttonText: { fontSize: 18, textAlign: "center", color: "#021123" },
  footer: { width: "80%" },
  footerText: { fontSize: 12.5, textAlign: "center", color: "#98a0a8" },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  contextButtonText: { fontSize: 12.5, color: "#fff", padding: 8 },
  contextButtonAtive: { backgroundColor: "#144480", borderRadius: 8 },
});
