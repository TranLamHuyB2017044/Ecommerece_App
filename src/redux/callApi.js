import {Logout} from './userRedux'

export const logout = async (dispatch) => {
    await dispatch(Logout)
}

