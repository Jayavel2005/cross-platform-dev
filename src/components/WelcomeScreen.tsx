import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>Welcome to Little Lemon</Text>
            <Text style={styles.description}>Little Lemon is charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container : {
        padding : 25,
        margin : 20,
    }
    ,
    title : {
        color : "black",
        textAlign : "center",
        fontSize : 40,
    },
    description : {
        marginTop : 30,
        color : "black",
        fontSize : 25,
        textAlign : 'center',
    }
});