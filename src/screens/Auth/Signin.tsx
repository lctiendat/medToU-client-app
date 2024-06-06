import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function LoginScreen({ navigation }: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const validate = () => {

        let valid = true;
        if (!username) {
            setUsernameError('Username is required');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            Alert.alert('Login Successful', `Welcome back, ${username}!`);
            setTimeout(() => {
                navigation.navigate('Tabs');
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Icon name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Welcome Back!</Text>

            <View style={styles.inputContainer}>
                <Icon name="person-outline" size={24} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

            <View style={styles.inputContainer}>
                <Icon name="lock-closed-outline" size={24} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot?</Text>
                </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <TouchableOpacity style={styles.loginButton} onPress={validate}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={styles.signupText}>
                    Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
                </Text>
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
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
        color: 'black',
    },
    forgotText: {
        color: 'gray',
    },
    loginButton: {
        backgroundColor: 'blue',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    signupContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    signupText: {
        color: 'gray',
    },
    signupLink: {
        color: 'blue',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 10,
    },
});

export default LoginScreen;
