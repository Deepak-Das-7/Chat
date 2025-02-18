import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/src/constants/Colors'

interface ButtonProps {
    title: string
    onPress: () => void
    isGradient?: boolean
    widthType?: 'small' | 'medium' | 'large'
    type?: 'square' | 'circle'
}

const Button: React.FC<ButtonProps> = ({ title, onPress, isGradient = true, widthType = "large", type = "square" }) => {

    const width = widthType === 'small' ? '25%' : widthType === 'medium' ? '60%' : '100%';
    const borderRadius = type === 'circle' ? 100 : 12;

    return (
        <View style={[{ width, borderRadius }]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                {isGradient ? (
                    <LinearGradient
                        colors={[Colors.primary, Colors.tint.dark]}
                        style={[styles.button, { borderRadius }]}
                    >
                        <Text style={styles.buttonText}>{title}</Text>
                    </LinearGradient>
                ) : (
                    <View style={[styles.button, styles.plainButton, { borderRadius }]}>
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
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.shadow.dark,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    plainButton: {
        backgroundColor: Colors.placeholder,
    },
    buttonText: {
        color: Colors.text.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
})
