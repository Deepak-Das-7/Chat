import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/src/constants/Colors'

interface ButtonProps {
    title: string
    onPress: () => void
    isGradient?: boolean
    widthType?: 'small' | 'medium' | 'large' 
}

const Button: React.FC<ButtonProps> = ({ title, onPress, isGradient = true, widthType = "large" }) => {

    const width = widthType === 'small' ? '30%' : widthType === 'medium' ? '60%' : '100%';

    return (
        <View style={ { width }}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                {isGradient ? (
                    <LinearGradient
                        colors={[Colors.primary, Colors.tint.dark]}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>{title}</Text>
                    </LinearGradient>
                ) : (
                    <View style={[styles.button, styles.plainButton]}>
                        <Text style={styles.buttonText}>{title}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.shadow.dark,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    plainButton: {
        backgroundColor: Colors.primary,
    },
    buttonText: {
        color: Colors.text.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
})
