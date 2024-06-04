import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const brands = [
    { id: '1', name: 'Himalaya Wellness', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Accu-Chek', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Vlcc', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Protinex', image: 'https://via.placeholder.com/150' },
];

const renderBrandItem = ({ item }: any) => (
    <View style={styles.brandItem}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.brandImage} resizeMode="contain" />
        </View>
        <Text style={styles.brandText}>{item.name}</Text>
    </View>
);

const Brands = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Featured Brands</Text>
            <FlatList
                data={brands}
                renderItem={renderBrandItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.brandList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000'
    },
    brandList: {
        paddingRight: 20,
    },
    brandItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    imageContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    brandImage: {
        width: 50,
        height: 50,
    },
    brandText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Brands;
