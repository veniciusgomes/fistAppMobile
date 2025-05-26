import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton/index";
import { FokusButton } from "../components/FokusButton/index";
import { Timer } from "../components/Timer/index";
import { IconPause, IconPlay } from "../components/icons/index";

const pomodoro = [
  {
    display: "Foco",
    id: "focus",
    initialValue: 25 * 60,
    image: require("./pomodoro.png"),
  },
  {
    display: "Pausa curta",
    id: "short",
    initialValue: 5 * 60,
    image: require("./curto.png"),
  },
  {
    display: "Pausa longa",
    id: "long",
    initialValue: 15 * 60,
    image: require("./longo.png"),
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toogleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toogleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);

    timerRef.current = id;
  };
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => {
            return (
              <ActionButton
                active={timerType.id === p.id}
                onPress={() => toogleTimerType(p)}
                display={p.display}
                key={p.id}
              />
            );
          })}
        </View>
        <Timer totalSeconds={seconds}></Timer>
        <FokusButton
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          title={timerRunning ? "Pausar" : "Começar"}
          onPress={toogleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>um app de pomodoro, </Text>
        <Text style={styles.footerText}>pro mó focar</Text>
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
  footer: { width: "80%" },
  footerText: { fontSize: 12.5, textAlign: "center", color: "#98a0a8" },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
});
