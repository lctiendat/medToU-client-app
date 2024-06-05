import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://via.placeholder.com/100' }} // Thay thế bằng URL ảnh thực tế
                />
                <View style={styles.profileText}>
                    <Text style={styles.profileName}>Hi, Ben Cline</Text>
                    <Text style={styles.welcomeMessage}>Welcome to Medtech</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="document-text-outline" size={24} color="gray" />
                    <Text style={styles.menuItemText}>Private Account</Text>
                    <Icon name="chevron-forward-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="cart-outline" size={24} color="gray" />
                    <Text style={styles.menuItemText}>My Consults</Text>
                    <Icon name="chevron-forward-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="document-outline" size={24} color="gray" />
                    <Text style={styles.menuItemText}>My Orders</Text>
                    <Icon name="chevron-forward-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="time-outline" size={24} color="gray" />
                    <Text style={styles.menuItemText}>Billing</Text>
                    <Icon name="chevron-forward-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="help-circle-outline" size={24} color="gray" />
                    <Text style={styles.menuItemText}>Faq</Text>
                    <Icon name="chevron-forward-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="settings-outline" size={24} color="gray" />
                    <Text style={styles.menuItemText}>Settings</Text>
                    <Icon name="chevron-forward-outline" size={24} color="gray" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileText: {
        marginLeft: 15,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    welcomeMessage: {
        color: 'gray',
    },
    menu: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    menuItemText: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
    },
});

export default Index;
