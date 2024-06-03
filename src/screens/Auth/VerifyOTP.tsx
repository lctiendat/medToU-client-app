import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

const VerifyOTP = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleInputChange = (text: any, index: any): any => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    const handleSubmit = () => {
        // Logic xử lý khi nhấn nút Submit
        console.log('Submitted Code:', code.join(''));
    };

    const handleResendCode = () => {
        // Logic xử lý khi nhấn nút Resend Code
        setTimer(59);
        console.log('Resend Code');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>Enter the verify code</Text>
            <Text style={styles.subtitle}>We just send you a verification code via phone</Text>
            <Text style={styles.phoneNumber}>+65 556 798 241</Text>
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleInputChange(text, index)}
                        value={digit}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>SUBMIT CODE</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>The verify code will expire in 00:{timer < 10 ? `0${timer}` : timer}</Text>
            <TouchableOpacity onPress={handleResendCode}>
                <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginBottom: 5,
    },
    phoneNumber: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    timerText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    resendText: {
        fontSize: 14,
        color: '#007BFF',
    },
});

export default VerifyOTP;
