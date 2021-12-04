import client from './client'

export const Register = (userInfo) => {
    return client.post('/users',userInfo)
}
export default{ Register }