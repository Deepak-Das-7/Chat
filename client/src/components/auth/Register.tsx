import { StyleSheet, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from "@/src/constants/Colors"
import Button from '../small/Button'
import { router } from 'expo-router'
import CustomAlert from '../small/Alert'

type AlertType = 'info' | 'success' | 'error' | 'warning'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('') // Optional field
    const [isTyping, setIsTyping] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const [alertData, setAlertData] = useState<{ title: string, message: string, type: AlertType }>({
        title: "", message: "", type: 'info'
    })

    const handleFocus = () => setIsTyping(true)
    const handleBlur = () => setIsTyping(false)

    const showAlert = (title: string, message: string, type: AlertType) => {
        setAlertData({ title, message, type })
        setAlertVisible(true)
    }

    const handleRegister = () => {
        if (!username.trim()) {
            showAlert("Registration Failed", "Usernames is required", 'error')
            return
        }
        if (!password.trim()) {
            showAlert("Registration Failed", "Password is required", 'error')
            return
        }

        console.log("Register Pressed", { username, password, email })
        showAlert("Registration Success", "You have successfully registered!", 'success')

        setTimeout(() => {
            setAlertVisible(false)
            router.replace('/auth/Auth')
        }, 2000)
    }

    return (
        <View style={styles.container}>
            {!isTyping && (
                <Image source={require('@/src/assets/images/logo.png')} style={styles.logo} />
            )}
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={Colors.text.muted}
                value={username}
                onChangeText={setUsername}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={Colors.text.muted}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <TextInput
                style={styles.input}
                placeholder="Email (Optional)"
                placeholderTextColor={Colors.text.muted}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <Button title="Register" onPress={handleRegister} widthType='large' type='circle'/>

            {/* CustomAlert Component */}
            <CustomAlert
                visible={alertVisible}
                title={alertData.title}
                message={alertData.message}
                onClose={() => setAlertVisible(false)}
                onConfirm={() => setAlertVisible(false)}
                type={alertData.type}
            />
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
    }
})
