import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <View style={styles.mainContent}>
    {/* Main screen content */}
  </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContent: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});