import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
   <View style={styles.header}>
    <Text style={styles.title}>Little  Lemon</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  header : {
    paddingTop : 70,
    paddingBottom : 10,
    backgroundColor : "yellow"
  },
  title : {
    color : 'black',
    fontSize : 30,
    textAlign : "center",
    fontWeight : "semibold",
  }
});

export default LittleLemonHeader;