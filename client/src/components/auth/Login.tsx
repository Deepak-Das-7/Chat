import { StyleSheet, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from "@/src/constants/Colors"
import Button from '../small/Button'

const Login = () => {
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
            <Button title="Login" onPress={() => { console.log("login pressed") }} widthType='large' />
        </View>
    )
}

export default Login

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
})
