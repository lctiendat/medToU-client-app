import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Category';
import DealsOfTheDay from '../components/DealsOfTheDay';
import Brands from '../components/Brands';
import BottomTabs from '../components/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


function Home(): React.JSX.Element {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: '#F7FBFF' }}>
                    <View style={styles.header}>
                        <View style={styles.header_top}>
                            <Image
                                source={require('../assets/images/fb_logo.png')}
                                style={styles.profileImage}
                            />
                            <View style={styles.icons}>
                                <Icon name="notifications" size={24} color="white" />
                                <Icon name="mail" size={24} color="white" style={styles.mailIcon} />
                            </View>
                        </View>

                        <View style={styles.header_text}>
                            <Text style={styles.greeting}>Hi, Ben</Text>
                            <Text style={styles.welcome}>Welcome to Medtech</Text>
                        </View>
                        <View >
                            <TextInput
                                style={styles.searchBox}
                                placeholder="Search Medicine & Healthcare products"
                                placeholderTextColor="#999"
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Category />
                        <DealsOfTheDay />
                        <Brands />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        marginTop: 50,
        backgroundColor: '#F7FBFF'
    },
    header: {
        paddingHorizontal: 20,
        backgroundColor: '#3E66FB',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'relative'
    },
    header_top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    header_text: {
        marginTop: 20
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
        borderWidth: 3,
        borderColor: 'white'
    },
    greeting: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    welcome: {
        color: 'white',
        fontSize: 16,
    },
    icons: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    mailIcon: {
        marginLeft: 20,
    },
    searchBox: {
        backgroundColor: 'white',
        height: 60,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: 'absolute',
        bottom: -75,
        width: '100%',
        zIndex: 1,
    },
});

export default Home;