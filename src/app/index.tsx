import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "space-between",
    backgroundColor : "#2e3440",
  }
});