import { useEffect, useState } from "react"
import * as Location from "expo-location"

export default UseLocation = () => {
    const [location, setLocation] = useState();
    const getLocation = async() => {
        const { granted } = await Location.requestBackgroundPermissionsAsync();
        if(!granted) {
            return;
        }
        const {
            corrds: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({latitude, longitude})
    };

    useEffect(() => {
        getLocation();
    },[])
}