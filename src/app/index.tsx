import { View, StyleSheet,Text, ScrollView } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Index() {

  const menus = [
    "item 1","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8","item 2","item 3","item 4","item 5","item 6","item 7","item 8"
  ]
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <View style={styles.mainContent}>
    {/* Main screen content */}
    <WelcomeScreen/>
    <View style={{ backgroundColor: "pink", flex: 1 }}>
  <Text
    style={{
      textAlign: "center",
      marginVertical: 20,
      fontSize: 30,
      fontWeight: "bold",
    }}
  >
    Little Lemon Menu
  </Text>

  <ScrollView style={styles.scrollContents}>
    {menus.map((menu, index) => (
      <Text key={index} style={styles.scrollText}>
        {menu}
      </Text>
    ))}
  <Text style={{textAlign : "center", fontWeight : "bold", paddingVertical : 40,}}>End of List </Text>
  </ScrollView>
</View>
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
  scrollContents : {
    flex : 1,
    
  },
  scrollText : {
    color : "black",
    fontSize : 20,
    fontWeight : "bold",
    padding : 20,
    backgroundColor : "yellow",
    margin : 10,
    borderRadius : 10,
    borderWidth : 1,
  }
});