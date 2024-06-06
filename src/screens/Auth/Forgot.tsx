import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        if (validateEmail(email)) {
            Alert.alert('Password Reset', `A password reset link has been sent to: ${email}`);
            setEmail('');
            setEmailError('');
        } else {
            setEmailError('Please enter a valid email address.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Forgot Password</Text>
            <Text style={styles.infoText}>Enter your email to reset your password</Text>
            <TextInput
                style={[styles.input, emailError ? styles.inputError : null]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    setEmailError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backText: {
        fontSize: 24,
        color: 'black',
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 18,
        paddingVertical: 10,
        marginBottom: 10,
    },
    inputError: {
        borderBottomColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: 'blue',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ForgotPasswordScreen;
