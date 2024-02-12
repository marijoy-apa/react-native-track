import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import { requestForegroundPermissionsAsync } from 'expo-location';


const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestForegroundPermissionsAsync();
            console.log('request permission')

        } catch (error) {
            console.log('handle error')
            setErr(error)
        }
    }

    useEffect(() => {
        // console.log('hello world')
        startWatching();
    }, [])


    return (
        <SafeAreaView>
            <Text h2 style={{ fontSize: 48 }}>
                Create Track
            </Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>)
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;