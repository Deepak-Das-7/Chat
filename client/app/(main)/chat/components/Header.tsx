import { Colors } from '@/src/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header: React.FC = () => {
    return (
        <LinearGradient
            colors={[Colors.primary, Colors.tint.dark, Colors.accent]}
            style={styles.header}
        >
            <Text>Chat</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: Colors.accent,
    },
    headerText: {
        color: Colors.text.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
