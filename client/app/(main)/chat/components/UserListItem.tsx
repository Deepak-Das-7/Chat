import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface User {
    name: string;
    profilePicture: string;
    lastMessage: string;
}

interface UserListItemProps {
    user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
            <View style={styles.textContainer}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.lastMessage}>{user.lastMessage}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        color: '#777',
        fontSize: 14,
    },
});

export default UserListItem;
