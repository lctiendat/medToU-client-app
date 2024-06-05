import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

function Index() {
    const [selectedAddress, setSelectedAddress] = useState('Home');
    const [selectedPayment, setSelectedPayment] = useState('CreditCard');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
                <Text style={styles.cartInfo}>2 Items in your cart</Text>
                <Text style={styles.total}>TOTAL $185.00</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery Address</Text>
                <TouchableOpacity style={styles.addressContainer} onPress={() => setSelectedAddress('Home')}>
                    <View style={styles.radioButton}>
                        {selectedAddress === 'Home' && <View style={styles.radioButtonInner} />}
                    </View>
                    <View style={styles.addressInfo}>
                        <Text style={styles.addressTitle}>Home</Text>
                        <Text>(205) 555-024</Text>
                        <Text>1786 Wheeler Bridge</Text>
                    </View>
                    <Icon name="create-outline" size={24} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.addressContainer} onPress={() => setSelectedAddress('Office')}>
                    <View style={styles.radioButton}>
                        {selectedAddress === 'Office' && <View style={styles.radioButtonInner} />}
                    </View>
                    <View style={styles.addressInfo}>
                        <Text style={styles.addressTitle}>Office</Text>
                        <Text>(205) 555-024</Text>
                        <Text>1786 w Dallas St underfield</Text>
                    </View>
                    <Icon name="create-outline" size={24} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.addAddress}>
                    <Text style={styles.addAddressText}>+ Add Address</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment method</Text>
                <TouchableOpacity style={styles.paymentContainer} onPress={() => setSelectedPayment('CreditCard')}>
                    <View style={styles.radioButton}>
                        {selectedPayment === 'CreditCard' && <View style={styles.radioButtonInner} />}
                    </View>
                    <Image source={require('../../assets/images/payment_method/cc.png')} />
                    <Text style={styles.paymentText}>Credit card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentContainer} onPress={() => setSelectedPayment('Paypal')}>
                    <View style={styles.radioButton}>
                        {selectedPayment === 'Paypal' && <View style={styles.radioButtonInner} />}
                    </View>

                    <Text style={styles.paymentText}>Paypal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentContainer} onPress={() => setSelectedPayment('GooglePay')}>
                    <View style={styles.radioButton}>
                        {selectedPayment === 'GooglePay' && <View style={styles.radioButtonInner} />}
                    </View>
                    <Text style={styles.paymentText}>Google pay</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentContainer} onPress={() => setSelectedPayment('ApplePay')}>
                    <View style={styles.radioButton}>
                        {selectedPayment === 'ApplePay' && <View style={styles.radioButtonInner} />}
                    </View>
                    <Text style={styles.paymentText}>Apple pay</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>Pay Now $185.00</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 40,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cartInfo: {
        color: 'gray',
        marginVertical: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginBottom: 10,
    },
    radioButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'blue',
    },
    addressInfo: {
        flex: 1,
        marginLeft: 15,
    },
    addressTitle: {
        fontWeight: 'bold',
    },
    addAddress: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
    },
    addAddressText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    paymentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginBottom: 10,
    },
    paymentText: {
        marginLeft: 15,
    },
    payButton: {
        marginVertical: 30,
        backgroundColor: 'blue',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    payButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Index;
