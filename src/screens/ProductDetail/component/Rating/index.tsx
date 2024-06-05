import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
export default function index(params: any) {
    return <View>
        <Text style={styles.sectionTitle}>Rating and Reviews</Text>
        <View style={styles.ratingContainer}>
            <Text style={styles.ratingScore}>4.4</Text>
            <Icon name="star" size={24} color="gold" />
            <Text style={styles.ratingText}>923 Ratings and 257 Reviews</Text>
        </View>

        <View style={styles.ratingBreakdown}>
            <View style={styles.ratingRow}>
                <Text style={styles.ratingNumber}>5</Text>
                <View style={styles.ratingBarContainer}>
                    <View style={[styles.ratingBar, { width: '67%' }]} />
                </View>
                <Text style={styles.ratingPercentage}>67%</Text>
            </View>
            <View style={styles.ratingRow}>
                <Text style={styles.ratingNumber}>4</Text>
                <View style={styles.ratingBarContainer}>
                    <View style={[styles.ratingBar, { width: '20%' }]} />
                </View>
                <Text style={styles.ratingPercentage}>20%</Text>
            </View>
            <View style={styles.ratingRow}>
                <Text style={styles.ratingNumber}>3</Text>
                <View style={styles.ratingBarContainer}>
                    <View style={[styles.ratingBar, { width: '7%' }]} />
                </View>
                <Text style={styles.ratingPercentage}>7%</Text>
            </View>
            <View style={styles.ratingRow}>
                <Text style={styles.ratingNumber}>2</Text>
                <View style={styles.ratingBarContainer}>
                    <View style={[styles.ratingBar, { width: '0%' }]} />
                </View>
                <Text style={styles.ratingPercentage}>0%</Text>
            </View>
            <View style={styles.ratingRow}>
                <Text style={styles.ratingNumber}>1</Text>
                <View style={styles.ratingBarContainer}>
                    <View style={[styles.ratingBar, { width: '2%' }]} />
                </View>
                <Text style={styles.ratingPercentage}>2%</Text>
            </View>
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
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingScore: {
        fontSize: 32,
        fontWeight: 'bold',
        marginRight: 10,
    },
    ratingText: {
        fontSize: 16,
        color: '#666',
    },
    ratingBreakdown: {
        marginBottom: 20,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    ratingNumber: {
        fontSize: 16,
        color: '#666',
        width: 20,
    },
    ratingBarContainer: {
        flex: 1,
        height: 8,
        backgroundColor: '#ccc',
        borderRadius: 4,
        marginHorizontal: 10,
    },
    ratingBar: {
        height: '100%',
        backgroundColor: '#1E90FF',
        borderRadius: 4,
    },
    ratingPercentage: {
        fontSize: 16,
        color: '#666',
        width: 50,
    },
})
