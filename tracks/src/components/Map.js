import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)
    let points = [];
    // for (let i = 0; i < 20; i++) {
    //     points.push({
    //         latitude: 37.33233 + i * .001,
    //         longitude: -122.03121 + i * 0.001
    //     })
    // };
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    // console.log(currentLocation)

    return <MapView
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            // latitude: 37.33233,
            // longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01
        // }}
        >

            <Circle center={currentLocation.coords}
            radius = {30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"

            />
                
            

    </MapView>
}

const styles = StyleSheet.create({

    map: {
        height: 300
    }
});

export default Map;