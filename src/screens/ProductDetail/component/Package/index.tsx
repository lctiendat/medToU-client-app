import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";

export default function index(params: any) {
    return <View>
        <Text style={styles.sectionTitle}>Package size</Text>
        <View style={styles.packageSizes}>
            <TouchableOpacity style={styles.packageButton}>
                <Text style={styles.packageText}>$106{"\n"}500 pellets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.packageButton}>
                <Text style={styles.packageText}>$166{"\n"}110 pellets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.packageButton}>
                <Text style={styles.packageText}>$252{"\n"}300 pellets</Text>
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 10,
    },
    packageSizes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    packageButton: {
        flex: 1,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    packageText: {
        textAlign: 'center',
        color: '#666',
    },
})
