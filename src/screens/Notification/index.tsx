import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
    {
        id: '1',
        icon: 'settings-outline',
        title: 'We know that—for children AND adults—learning is most effective when it is',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: true
    },
    {
        id: '2',
        icon: 'calendar-outline',
        title: 'The future of professional learning is immersive, communal experiences for',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false
    },
    {
        id: '3',
        icon: 'notifications-outline',
        title: 'With this in mind, Global Online Academy created the Blended Learning Design',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false
    },
    {
        id: '4',
        icon: 'notifications-outline',
        title: 'Technology should serve, not drive, pedagogy. Schools often discuss',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false
    },
    {
        id: '5',
        icon: 'notifications-outline',
        title: 'Peer learning works. By building robust personal learning communities both',
        date: 'Aug 12, 2020 at 12:08 PM',
        unread: false
    }
];

function Index() {
    const renderItem = ({ item }: any) => (
        <View style={styles.notificationContainer}>
            <Icon name={item.icon} size={24} color="gray" />
            <View style={styles.notificationText}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationDate}>{item.date}</Text>
            </View>
            {item.unread && <View style={styles.unreadDot} />}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notification</Text>
                <TouchableOpacity>
                    <Text style={styles.clearAll}>Clear all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    clearAll: {
        color: 'blue',
        fontWeight: 'bold',
    },
    list: {
        marginTop: 20,
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginBottom: 10,
    },
    notificationText: {
        flex: 1,
        marginLeft: 15,
    },
    notificationTitle: {
        fontWeight: 'bold',
    },
    notificationDate: {
        color: 'gray',
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
    },
});

export default Index;
