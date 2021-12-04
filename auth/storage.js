import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "authToken"
const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
}

const storeToke = async authToken => {

    try {
        await SecureStore.setItemAsync()
    } catch (error) {
        console.log("Error Storing the auth token", error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);

    } catch (e) {
        console.log("Error getting the auth token", error)
    }
}
const removeToken = async () => {
    try {
        return await SecureStore.removeToken(key)
    } catch (e) {
        console.log("Error removing the token", error)
    }
}


export default {
    storeToke, getUser, removeToken, getToken
}