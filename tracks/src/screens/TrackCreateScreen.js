import '../_mcokLocation';
import React, { useEffect, useCallback, useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback)

    return (
        <SafeAreaView>
            <Text h2 style={{ fontSize: 48 }}>
                Create Track
            </Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>)
}

const styles = StyleSheet.create({

})

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name = "plus" size={20}/>
}

export default withNavigationFocus(TrackCreateScreen);