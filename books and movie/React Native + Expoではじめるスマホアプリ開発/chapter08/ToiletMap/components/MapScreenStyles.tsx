import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    mapview: {
        ...StyleSheet.absoluteFillObject
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent",
        alignItems: "center"
    },
    button: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    buttonItem: {
        textAlign: "center"
    }
});
