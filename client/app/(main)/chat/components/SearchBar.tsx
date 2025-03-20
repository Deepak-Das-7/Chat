import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder="Search"
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        fontSize: 16,
    },
});

export default SearchBar;
