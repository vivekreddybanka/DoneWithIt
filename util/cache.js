import AsyncStorage from '@react-native-async-storage/async-storage'

import moment from 'moment';
const prefix = "cache"
const expireInMinutes = 5;
const store = (key,value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
         AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
    AsyncStorage.setItem
}
const isExpired = (item) => {
    const now = moment(Date.now())
    const storedtime = moment(item.timestamp)
    const isExpired = now.diff(storedtime, 'minutes') > expireInMinutes
    return isExpired;
}
const get = async(key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value)
        if (!item) return null;
        
        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        return item.value;

    } catch (e) {
        console.log(e)
    }
    
}
export default {
    store, get
}