import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Header() {
    return (
    <View>
        <Text>Header</Text>
        <View>
            <TextInput placeholder='Search' />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({})