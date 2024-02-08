import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }

        case 'signin':
            return { errorMessage: '', token: action.payload }


        case 'clear_error_message':
            return { errorMessage: '' }
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {

        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('TrackList')
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
        }


    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
        console.log(response.data)
    } catch (error) {
        console.log('errow with signing in')
        console.log(error.response.data);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }


}


const signout = () => {
    //somehow sign out!!!
}

const clearErrorMessage = dispatch => () => {
    console.log('to clear error message')
    dispatch({ type: 'clear_error_message' })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage },
    { token: null, errorMessage: '' }
)