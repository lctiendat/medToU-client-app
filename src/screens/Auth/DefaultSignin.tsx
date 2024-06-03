import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyle from "../../assets/styles/global";

export default function DefaultSignin({ navigation }: any) {

    return <View style={styles.container
    } >
        <View>
            <Image style={styles.banner} source={require('../../assets/images/banner1.png')} />
        </View>
        <View>
            <Text style={styles.welcome}>Welcome to MedToU</Text>
            <Text style={styles.description}> Do you want some help with your health to get better life ?
            </Text>
            <View style={styles.wrapperButton}>
                <TouchableOpacity style={{
                    ...styles.button,
                    backgroundColor: globalStyle.color,
                }} onPress={() => navigation.navigate('SigninScreen')}>
                    <Text style={{
                        ...styles.buttonText,
                        color: "#fff"
                    }}>
                        Sign in With Account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.button,
                    borderColor: "#ccc",
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                    <Image style={styles.buttonImage} source={require('../../assets/images/fb_logo.png')} />
                    <Text style={{
                        ...styles.buttonText,
                        color: "#000",
                    }}>
                        Continue with facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.button,
                    borderColor: "#ccc",
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',

                }}>
                    <Image style={styles.buttonImage} source={require('../../assets/images/gg_logo.png')} />
                    <Text style={{
                        ...styles.buttonText,
                        color: "#000"
                    }}>
                        Continue with google
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30

    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: "#000"
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "gray"
    },
    banner: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
    wrapperButton: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "auto",
        marginVertical: 20
    },
    button: {
        height: 50,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    buttonImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
})