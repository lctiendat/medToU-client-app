import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
export default function index({ navigation }: any) {
    return <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.top}>
            <Icon name="arrow-back-outline" size={24} color="#000" />
            <Text style={styles.topText}>Products Of Category</Text>
        </View>
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingBottom: 10,
        marginBottom: 10
    },
    topText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 15,
    }
})