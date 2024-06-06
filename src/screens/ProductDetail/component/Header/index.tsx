import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

export default function index({ navigation }: any) {
    return <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
            <TouchableOpacity>
                <Icon name="notifications-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="mail-outline" size={24} color="#000" style={styles.mailIcon} />
            </TouchableOpacity>
        </View>
    </View>
};



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    mailIcon: {
        marginLeft: 20,
    },
})
