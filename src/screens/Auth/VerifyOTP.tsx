import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const VerifyOTP = ({ navigation }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);
    const [resendDisabled, setResendDisabled] = useState(true);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            setResendDisabled(false);
        }
    }, [timer]);

    const handleChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Automatically focus next input
        if (value && index < 5) {
            const nextInput = `input${index + 1}`;
            this[nextInput].focus();
        }
    };

    const handleSubmit = () => {
        if (code.join('').length === 6) {
            Alert.alert('Verification Code', `Code entered: ${code.join('')}`);
        } else {
            Alert.alert('Error', 'Please enter a 6-digit verification code.');
        }
    };

    const handleResend = () => {
        setTimer(59);
        setResendDisabled(true);
        Alert.alert('Verification Code', 'A new verification code has been sent.');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Enter the verify code</Text>
            <Text style={styles.infoText}>We just sent you a verification code via phone</Text>
            <Text style={styles.phoneText}>+65 556 798 241</Text>
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => { this[`input${index}`] = ref; }}
                        style={styles.codeInput}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleChange(index, value)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>SUBMIT CODE</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>The verify code will expire in 00:{timer < 10 ? `0${timer}` : timer}</Text>
            <TouchableOpacity style={styles.resendButton} onPress={handleResend} disabled={resendDisabled}>
                <Text style={[styles.resendText, resendDisabled && styles.resendTextDisabled]}>Resend Code</Text>
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
    },
    phoneText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 30,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    codeInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        textAlign: 'center',
        fontSize: 24,
        width: 40,
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
    timerText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    resendButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    resendText: {
        color: 'blue',
    },
    resendTextDisabled: {
        color: 'lightgray',
    },
});

export default VerifyOTP;
