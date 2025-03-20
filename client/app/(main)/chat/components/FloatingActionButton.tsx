import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const FloatingActionButton: React.FC = () => {
    return (
        <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#128C7E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabText: {
        color: '#fff',
        fontSize: 30,
    },
});

export default FloatingActionButton;
