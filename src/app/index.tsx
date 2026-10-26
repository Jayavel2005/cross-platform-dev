import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Hello! 👋
        </Text>

        <Text style={styles.subtitle}>
          Welcome to Little Lemon App 🍋
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF8E7",
  },

  card: {
    width: "100%",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5D9BD",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#344E41",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#555555",
    textAlign: "center",
    lineHeight: 26,
  },
});