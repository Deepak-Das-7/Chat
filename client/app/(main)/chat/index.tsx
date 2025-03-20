import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserListItem from './components/UserListItem';
import FloatingActionButton from './components/FloatingActionButton';

interface User {
  name: string;
  profilePicture: string;
  lastMessage: string;
}

interface UserListScreenProps {
  users: User[];
}

const users = [
  {
    name: 'John Doe',
    profilePicture: 'https://example.com/profile1.jpg',
    lastMessage: 'Hello, how are you?',
  },
  {
    name: 'Jane Smith',
    profilePicture: 'https://example.com/profile2.jpg',
    lastMessage: 'Can we meet later?',
  }
];

const UserListScreen: React.FC<UserListScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <ScrollView style={styles.userList}>
        {users.map((user, index) => (
          <UserListItem key={index} user={user} />
        ))}
      </ScrollView>
      <FloatingActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userList: {
    flex: 1,
  },
});

export default UserListScreen;
