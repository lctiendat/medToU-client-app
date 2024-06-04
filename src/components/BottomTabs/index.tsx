import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/Auth/Signin';
import NotificationsScreen from '../../screens/Auth/Signin';
import AddScreen from '../../screens/Auth/Signin';
import OrdersScreen from '../../screens/Auth/Signin';
import ProfileScreen from '../../screens/Auth/Signin';
import { StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
    
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconType = 'Ionicons';

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                        if (focused) {
                            color = 'blue';
                        }
                    } else if (route.name === 'Notifications') {
                        iconName = 'notifications-outline';
                        if (focused) {
                            color = 'blue';
                        }
                    } else if (route.name === 'Add') {
                        iconName = 'add-box';
                        iconType = 'MaterialIcons';
                        color = 'white';
                        size = 30;
                        return (
                            <View style={styles.addButton}>
                                <MaterialIcon name={iconName} size={size} color={color} />
                            </View>
                        );

                    } else if (route.name === 'Orders') {
                        iconName = 'file-tray-full-outline';
                        if (focused) {
                            color = 'blue';
                        }
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                        if (focused) {
                            color = 'blue';
                        }
                    }

                    if (iconType === 'Ionicons') {
                        return <Icon name={iconName} size={size} color={color} />;
                    } else if (iconType === 'MaterialIcons') {
                        return <MaterialIcon name={iconName} size={size} color={color} />;
                    }
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
});


export default BottomTabs;
