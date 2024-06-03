import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const products = [
    { id: '1', name: 'Accu-check Active Test Strip', price: '$112', rating: 4.2, sale: true },
    { id: '2', name: 'Omron HEM-8712 BP Monitor', price: '$150', rating: 4.2, discount: true },
    { id: '3', name: 'Accu-check Active Test Strip', price: '$112', rating: 4.2 },
    { id: '4', name: 'Omron HEM-8712 BP Monitor', price: '$150', rating: 4.2 },
];

const DiabetesCareScreen = () => {
    const renderProduct = ({ item }: any) => (
        <View style={styles.productCard}>
            {item.sale && <Text style={styles.saleBadge}>SALE</Text>}
            {item.discount && <Text style={styles.discountBadge}>15% OFF</Text>}
            <Image source={require('./path/to/image.png')} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <View style={styles.ratingContainer}>
                <Icon name="star" type="font-awesome" color="#f1c40f" size={16} />
                <Text style={styles.productRating}>{item.rating}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Save extra on every order</Text>
                    <Text style={styles.headerSubText}>Etiam mollis metus non faucibus sollicitudin.</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="sugar-cube" type="material-community" size={30} />
                        <Text style={styles.categoryText}>Sugar Substitute</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="local-drink" type="material" size={30} />
                        <Text style={styles.categoryText}>Juices & Vinegars</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="medical-bag" type="material-community" size={30} />
                        <Text style={styles.categoryText}>Vitamins Medicines</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionTitle}>All Products</Text>
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.productsContainer}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 20,
        backgroundColor: '#e1f5fe',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerSubText: {
        fontSize: 14,
        color: '#757575',
        textAlign: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    categoryCard: {
        alignItems: 'center',
    },
    categoryText: {
        marginTop: 10,
        fontSize: 12,
        color: '#757575',
    },
    sectionTitle: {
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    productsContainer: {
        paddingHorizontal: 10,
    },
    productCard: {
        backgroundColor: '#fff',
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        position: 'relative',
    },
    saleBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#e74c3c',
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 3,
        fontSize: 10,
        fontWeight: 'bold',
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#f1c40f',
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 3,
        fontSize: 10,
        fontWeight: 'bold',
    },
    productImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productRating: {
        marginLeft: 5,
        fontSize: 14,
        color: '#757575',
    },
});

export default DiabetesCareScreen;