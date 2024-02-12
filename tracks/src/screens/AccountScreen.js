import React, { useContext } from "react";
import { StyleSheet, Text } from 'react-native';
import Spacer from "../components/Spacer";
import { Button } from 'react-native-elements'
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    return (
        <>
            <SafeAreaView forceInset={{ top: 'always', bottom: 'always' }}>
                <Text style={{ fontSize: 48 }}>Account Screen</Text>
                <Spacer>
                    <Button title="Sign out" onPress={signout} />
                </Spacer>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({

})
AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name = "gear" size={20}/>
}
export default AccountScreen;