import {loginFailure, loginStart, loginSuccess} from './userRedux'
import {publicRequest} from '../request'
export const login = async (dispatch, user) => {
    dispatch(loginStart(user));
    try {
        const rs = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(rs.data));
    } catch (error) {
        dispatch(loginFailure(user));
    }
}