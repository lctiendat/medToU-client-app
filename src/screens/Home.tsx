import React from 'react';
import {
    Image,

    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Category';
import DealsOfTheDay from '../components/DealsOfTheDay';

export interface ICate {
    label: string;
    img: string;
}


function Home(): React.JSX.Element {


    return (
        <View style={{backgroundColor: '#eee'}}>
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
            <View>

            </View>
            <View style={styles.container}>
                <Category />
                <DealsOfTheDay/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        marginTop:50
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
    title: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryList: {
        paddingRight: 20,
    },
    categoryItem: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        height: 100,
        width: 80
    },
    categoryText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Home;