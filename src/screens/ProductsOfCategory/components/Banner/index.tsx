import { Image, StyleSheet, View } from "react-native";

export default function index(params: any) {
    return (
        <View>
            <Image style={styles.img} source={{ uri: 'https://via.placeholder.com/150' }} />
        </View>)
};

const styles = StyleSheet.create({
    img : {
        height : 200,
        borderRadius: 20
    }
})
