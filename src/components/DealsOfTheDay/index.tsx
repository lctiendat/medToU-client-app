import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const deals = [
    {
        id: '1',
        name: 'Accu-check Active Test Strip',
        price: '$112',
        rating: 4.2,
        image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
        id: '2',
        name: 'Omron HEM-8712 BP Monitor',
        price: '$150',
        rating: 4.5,
        image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    // Add more items as needed
];

const renderDealItem = ({ item }: any) => (
    <View style={styles.dealItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="#FFDF00" />
                <Text style={styles.rating}>{item.rating}</Text>
            </View>
        </View>
    </View>
);

const DealsOfTheDay = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Deals of the Day</Text>
                <Text style={styles.more}>More</Text>
            </View>
            <FlatList
                data={deals}
                renderItem={renderDealItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.dealsList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    more: {
        fontSize: 14,
        color: '#007BFF',
    },
    dealsList: {
        paddingRight: 20,
    },
    dealItem: {
        backgroundColor: 'white',
        borderRadius: 8,
        // padding: 10,
        marginRight: 20,
        width: 170,
        height  : 200,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // elevation: 5,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
        objectFit : 'cover'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        fontWeight: 'bold',
        marginLeft : 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFC002',
        padding: 5,
        borderTopLeftRadius : 5,
        borderBottomLeftRadius : 5,
    },
    rating: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight : 'bold',
        color : '#fff'
    },
    priceContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    }
});

export default DealsOfTheDay;