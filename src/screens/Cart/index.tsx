import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Index() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Sugar free gold', subtitle: 'bottle of 500 pellets', price: 25, quantity: 1, image: 'https://via.placeholder.com/60' },
        { id: 2, title: 'Sugar free gold', subtitle: 'bottle of 500 pellets', price: 18, quantity: 1, image: 'https://via.placeholder.com/60' }
    ]);

    const handleQuantityChange = (itemId: any, change: any) => {
        setCartItems(cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + change } : item
        ));
    };

    const handleRemoveItem = (itemId: any) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your cart</Text>
                <TouchableOpacity>
                    <Icon name="notifications-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={styles.subHeader}>{cartItems.length} Items in your cart</Text>
            <TouchableOpacity style={styles.addMore}>
                <Text style={styles.addMoreText}>+ Add more</Text>
            </TouchableOpacity>
            <ScrollView>
                {cartItems.map(item => (
                    <View key={item.id} style={styles.productItem}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.productImage}
                        />
                        <View style={styles.productDetails}>
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productSubtitle}>{item.subtitle}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => handleQuantityChange(item.id, -1)}
                                disabled={item.quantity === 1}
                            >
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => handleQuantityChange(item.id, 1)}
                            >
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                            <Icon name="close" size={24} color="#666" />
                        </TouchableOpacity>
                    </View>
                ))}
                <TouchableOpacity style={styles.couponContainer}>
                    <Text style={styles.couponText}>1 Coupon applied</Text>
                    <TouchableOpacity>
                        <Icon name="close" size={24} color="#666" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.paymentSummary}>
                    <Text style={styles.paymentTitle}>Payment Summary</Text>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Order Total</Text>
                        <Text style={styles.paymentValue}>${calculateTotal().toFixed(2)}</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Items Discount</Text>
                        <Text style={styles.paymentValue}>- $28.80</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Coupon Discount</Text>
                        <Text style={styles.paymentValue}>- $15.80</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabel}>Shipping</Text>
                        <Text style={styles.paymentValue}>Free</Text>
                    </View>
                    <View style={styles.paymentRow}>
                        <Text style={styles.paymentLabelTotal}>Total</Text>
                        <Text style={styles.paymentValueTotal}>${(calculateTotal() - 28.80 - 15.80).toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.placeOrderButton}>
                <Text style={styles.placeOrderText}>Place Order @ ${(calculateTotal() - 28.80 - 15.80).toFixed(2)}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    subHeader: {
        paddingHorizontal: 20,
        paddingTop: 10,
        fontSize: 16,
        color: '#666',
    },
    addMore: {
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    addMoreText: {
        color: '#1E90FF',
        fontSize: 16,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    productSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 18,
        color: '#1E90FF',
    },
    quantityText: {
        fontSize: 16,
        color: '#000',
        marginHorizontal: 10,
    },
    couponContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    couponText: {
        flex: 1,
        fontSize: 16,
        color: '#1E90FF',
    },
    paymentSummary: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    paymentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    paymentLabel: {
        fontSize: 16,
        color: '#666',
    },
    paymentValue: {
        fontSize: 16,
        color: '#000',
    },
    paymentLabelTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    paymentValueTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    placeOrderButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        margin: 20,
    },
    placeOrderText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Index;

