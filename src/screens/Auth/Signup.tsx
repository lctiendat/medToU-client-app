import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function Signup({ navigation }) {

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        password: '',
    });

    const validate = () => {
        let valid = true;
        let errors = {
            name: '',
            mobileNumber: '',
            email: '',
            password: '',
        };

        if (!name) {
            errors.name = 'Name is required';
            valid = false;
        }
        if (!mobileNumber) {
            errors.mobileNumber = 'Mobile number is required';
            valid = false;
        }
        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
            valid = false;
        }
        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        }

        setErrors(errors);
        if (valid) {
            Alert.alert('Account Created', `Welcome, ${name}!`);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Icon name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Create your account</Text>

            <TextInput
                style={styles.input}
                placeholder="Your Name"
                placeholderTextColor="gray"
                value={name}
                onChangeText={setName}
            />
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
            />
            {errors.mobileNumber ? <Text style={styles.errorText}>{errors.mobileNumber}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />
                </TouchableOpacity>
            </View>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            <TouchableOpacity style={styles.createButton} onPress={validate}>
                <Text style={styles.createButtonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginContainer} onPress={()=>navigation.navigate('SigninScreen')}>
                <Text style={styles.loginText}>
                    Already have account? <Text style={styles.loginLink}>Login</Text>
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
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 10,
        paddingVertical: 10,
        color: 'black',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 10,
        color: 'black',
    },
    createButton: {
        backgroundColor: 'blue',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    createButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loginContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginText: {
        color: 'gray',
    },
    loginLink: {
        color: 'blue',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 10,
    },
});
