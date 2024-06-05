import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
export default function index(params: any) {
    return <View>
        <View style={styles.review}>
            <Text style={styles.reviewAuthor}>Erric Hoffman</Text>
            <Text style={styles.reviewDate}>05- oct 2020</Text>
            <Text >4.5 <Icon name="star" size={16} color="gold" /></Text>
            <Text style={styles.reviewText}>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
                Nunc risus massa, gravida id egestas.
            </Text>
        </View>

        <View style={styles.review}>
            <Text style={styles.reviewAuthor}>Ben cline</Text>
            <Text style={styles.reviewDate}>05- oct 2020</Text>
            <Text >4.5 <Icon name="star" size={16} color="gold" /></Text>
            <Text style={styles.reviewText}>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
                Nunc risus massa, gravida id egestas.
            </Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    review: {
        marginBottom: 20,
    },
    reviewAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    reviewDate: {
        fontSize: 14,
        color: '#666',
    },
    reviewText: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
})
