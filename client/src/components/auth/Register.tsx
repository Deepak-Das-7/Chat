import { StyleSheet, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from "@/src/constants/Colors"
import Button from '../small/Button'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    const handleFocus = () => { setIsTyping(true) }
    const handleBlur = () => { setIsTyping(false) }
    
    return (
        <View style={styles.container}>
            {!isTyping && (
                <Image source={require('@/src/assets/images/logo.png')} style={styles.logo} />
            )}
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor={Colors.text.muted}
                value={name}
                onChangeText={setName}
                onFocus={handleFocus}  // Hide image when focusing
                onBlur={handleBlur}    // Show image again when focus is lost
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={Colors.text.muted}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onFocus={handleFocus}  // Hide image when focusing
                onBlur={handleBlur}    // Show image again when focus is lost
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={Colors.text.muted}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onFocus={handleFocus}  // Hide image when focusing
                onBlur={handleBlur}    // Show image again when focus is lost
            />
            <Button title="Register" onPress={() => { console.log("register pressed") }} widthType='large' />
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background.dark,
    },
    logo: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.background.gray,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: Colors.border.light,
        shadowColor: Colors.shadow.light,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.shadow.dark,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginTop: 20,
    },
    buttonText: {
        color: Colors.text.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
})
