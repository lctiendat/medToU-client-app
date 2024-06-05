import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './component/Header';
import Rating from './component/Rating'
import Review from './component/Review';
import Package from './component/Package';

const Index = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />

            <Text style={styles.productTitle}>Sugar Free Gold Low Calories</Text>
            <Text style={styles.productSubtitle}>Etiam mollis metus non purus</Text>

            <Image
                source={{ uri: 'https://via.placeholder.com/300' }} // replace with your image URL
                style={styles.productImage}
            />



            <TouchableOpacity style={styles.addToCartButton}>
                <View>
                    <Text style={styles.price}>$56</Text>
                    <Text style={styles.subText}>Etiam mollis</Text>
                </View>
                <Text style={styles.addToCartText}><Text style={styles.addToCartIcon}>+</Text> Add to cart</Text>
            </TouchableOpacity>

            <Package />

            <Text style={styles.sectionTitle}>Product Details</Text>
            <Text style={styles.productDetails}>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
                Nunc risus massa, gravida id egestas a, pretium vel tellus. Praesent feugiat diam sit amet pulvinar
                finibus. Etiam et nisi aliquet, accumsan nisi sit.
            </Text>

            <Rating />

            <Review />

            <TouchableOpacity style={styles.goToCartButton}>
                <Text style={styles.goToCartText}>GO TO CART</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FBFF',
        paddingHorizontal: 20,
    },

    productTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    productSubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    productImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    subText: {
        fontSize: 16,
        color: '#666',
    },
    addToCartButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    addToCartText: {
        fontSize: 16,
        color: '#1E90FF',
    },
    addToCartIcon: {
        borderWidth: 2,
        borderColor: '#1E90FF',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
        color: '#1E90FF',
    },
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
    productDetails: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    goToCartButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    goToCartText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Index;
