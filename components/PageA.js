import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

const PageA = ({ navigation }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log("PageA mounted");
        return () => {
            console.log("Leaving PageA");
        };
    }, []);

    useEffect(() => {
        console.log("value changed A");
    }, [value]);

    return (
        <View style={styles.container}>
            <Text>PageA</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.push("Pb")}
            >
                <Text style={styles.text}>Go to PageB</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="change text"
                value={value}
                onChangeText={(text) => setValue(text)}
            />
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
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 200,
        textAlign: "center",
    },
});

export default PageA;
