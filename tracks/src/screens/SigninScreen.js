import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return <View style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}
        />
        <AuthForm
            headerText="Sign In to your account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
        />
        <NavLink routeName={'Signup'} text="Don't have account yet? Create an account" />

    </View>
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
})

export default SigninScreen;