import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Components/Home/Header';
import Map from '../Components/Map';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.mapContainer}>
                <Map 
                    onInitialized={() => {}}
                    onMapPress={() => {}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1,
        marginTop: 10,
    }
})
