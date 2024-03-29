import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';

import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    return <>
        <NavigationEvents onWillFocus={fetchTracks} />

        {/* <Button title="Go to Track Details" onPress={() => {
            navigation.navigate('TrackDetail')
        }} /> */}
        <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate('TrackDetail', { _id: item._id })
                }}>
                    <ListItem>

                        <ListItem.Content>
                            <ListItem.Title>
                                {item.name}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>

                </TouchableOpacity>
            }}
        />
    </>
}

const styles = StyleSheet.create({

})
TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

export default TrackListScreen;