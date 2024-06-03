import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function Signin() {   

    return <View style={styles.container}>
        <Text><Icon name="arrow-back-outline" size={24} color="#000" /> </Text>
        <Text style={styles.welcomeText} > Wellcome Back! </Text>
        <View style={styles.formWrapper} >
            <View style={styles.formInputWrapper} >
                <TextInput style={styles.formInput} placeholder="Username" placeholderTextColor={'#D8D8D8'}></TextInput>
                <Icon style={styles.formInputIcon} name="person-outline" size={25} color="#000" />
            </View>
            <View style={styles.formInputWrapper} >
                <TextInput style={styles.formInput} placeholder="Password" placeholderTextColor={'#D8D8D8'}></TextInput>
                <Icon style={styles.formInputIcon} name="lock-closed-outline" size={25} color="#000" />
                <Text style={styles.forgotText}>Forgot?</Text>
            </View>
            <View>
                <TouchableOpacity style={
                    styles.button
                }>
                    <Text style={
                        styles.buttonText
                    }>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.bottomWrapper} >
            <Icon name="chevron-back-outline" style={styles.bottomWrapper__icon} size={15} color="#090F47" />
            <Text style={styles.textBottom}> Dont't have an account? Sign Up </Text>
        </View>
    </View>
};


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        justifyContent : "center",
        // alignItems : "center",
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginTop:30
    },
    formWrapper: {
        width: '100%',
        color: '#090F47'
    },
    formInput: {
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingLeft: 50,
        fontSize: 14
    },
    placeholderTextColor: {
        color: "#ccc"
    },
    formInputWrapper: {
        position: "relative",
        marginTop : 30
    },
    formInputIcon: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 100,
    },
    forgotText: {
        position: "absolute",
        top: 15,
        right: 10,
        zIndex: 100,
        fontSize: 12
    },
    button: {
        height: 50,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        borderRadius: 30,
        backgroundColor: '#4157FF',
        borderColor: "#ccc",
        borderWidth: 1,
        flexDirection: 'row',
        marginTop:30

    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        textTransform: "uppercase",
        fontWeight: "bold",
        color: '#fff'
    },
    textBottom: {
        color: "gray",
        fontSize: 13,
        textAlign: 'center',
        justifyContent: 'center',
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomWrapper__icon: {
        color: "gray",
        fontSize: 15,
    },
    
})
