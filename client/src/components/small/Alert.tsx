import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from "@/src/constants/Colors"
import Button from './Button'

interface CustomAlertProps {
    visible: boolean
    title: string
    message: string
    onClose: () => void
    onConfirm: () => void
    buttonText?: string
    buttonAction?: () => void
    type?: 'success' | 'error' | 'info' | 'warning'
}

const CustomAlert: React.FC<CustomAlertProps> = ({
    visible,
    title,
    message,
    onClose,
    onConfirm,
    buttonText = "OK",
    type = 'info',
}) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return Colors.status.success;
            case 'error':
                return Colors.status.error;
            case 'warning':
                return Colors.status.warning;
            default:
                return Colors.primary;
        }
    };

    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.overlay}>
                <View style={[styles.alertBox, { backgroundColor: getBackgroundColor() }]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.button}>
                        <Button
                            title="Close"
                            onPress={onClose}
                            widthType="small"
                            isGradient={false}
                            type="circle"
                        />
                        <Button
                            title={buttonText}
                            onPress={onConfirm}
                            widthType="small"
                            type="circle"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomAlert;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background.blur,
    },
    alertBox: {
        width: '95%',
        height: 100,
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 4.5,
    },
    message: {
        fontSize: 16,
        color: Colors.text.white,
        marginBottom: 10,
        opacity: 0.8,
    },
    button: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
