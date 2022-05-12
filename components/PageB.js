import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const PageB = ({ navigation }) => {

    useEffect(() => {
        console.log("PageB mounted");
        return () => {
            console.log("Leaving PageB");
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text>PageB</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pa")}
            >
                <Text style = {styles.text}>Go to PageA</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "red",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        padding: 10,
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default PageB;
