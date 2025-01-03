import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = () => {
        onSearch(searchTerm)
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search places..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity 
                    style={styles.searchButton}
                    onPress={handleSearch}
                >
                    <Ionicons name="search" size={20} color="#666" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    searchButton: {
        padding: 10,
    },
})
