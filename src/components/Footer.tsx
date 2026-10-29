import * as React from "react";
import { View, Text, StyleSheet} from "react-native";


const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>All Rights reserved by Little Lemon 2022.</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    footer : {
        backgroundColor : "yellow",
        padding : 10,
    },
    text : {
        textAlign : "center",
        fontWeight : 600,
    }
});
export default Footer;