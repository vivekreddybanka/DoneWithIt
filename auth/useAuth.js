import { useContext } from "react"
import AuthContext from "./context"
import authStorage from './storage'
import jwtDecode from "jwt-decode"


export default useAuth = () => {
    const logOut = () => {
        setUser(null)
        authStorage.removeToken();
    }
    const logIn = (authToken) => {
        const user = jwtDecode(authToken)
        setUser(user);
        authStorage.storeToke(authToken);

    }
    const {user, setUser} = useContext(AuthContext);

    return { user, setUser, logOut, logIn}
}