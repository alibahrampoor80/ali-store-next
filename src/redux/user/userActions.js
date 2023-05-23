import {
    SIGNIN_USER_FAILURE,
    SIGNIN_USER_REQUEST,
    SIGNUP_USER_FAILURE,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_REQUEST,
    SIGNIN_USER_SUCCESS, SIGNOUT_USER,
} from './userTypes'
import http from "../../services/httpService";
import toast from "react-hot-toast";
import Router from "next/router";


export const signinUserRequest = () => {

    return {
        type: SIGNIN_USER_REQUEST
    }
}
export const signinUserSuccess = (users) => {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: users
    }
}
export const signinUserFailure = (error) => {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    }
}


export const signupUserRequest = () => {

    return {
        type: SIGNUP_USER_REQUEST
    }
}
export const signupUserSuccess = (users) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: users
    }
}
export const signupUserFailure = (error) => {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: error
    }
}

export const userSignin = (data) => {
    return (dispatch) => {
        dispatch(signinUserRequest())
        http.post('/user/signin', data)
            .then(res => {
                dispatch(signinUserSuccess(res.data))

                toast.success(` خوش اومدی ${res.data.name}`)
                Router.push('/')
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data.message ? err.response.data.message : err.message
                signinUserFailure(errorMessage)
                toast.error(errorMessage)
            })
    }
}

export const userSignup = (data) => {
    return (dispatch) => {
        dispatch(signupUserRequest())
        http.post('/user/signup', data)
            .then(res => {
                dispatch(signupUserSuccess(res.data))
                dispatch(signinUserSuccess(res.data))
                toast.success('ثبت نام موفقیت آمیز بود')
                Router.push('/')
            })
            .catch(err => {
                const errorMessage = err.response && err.response.data.message ? err.response.data.message : err.message
                signupUserFailure(errorMessage)
                toast.error(errorMessage)
                dispatch(signupUserFailure(errorMessage))
            })
    }
}
export const signout = () => (dispatch) => {
    dispatch({type: SIGNOUT_USER})
    localStorage.setItem('token ali', 'value ali')
    http.get('/user/logout', {withCredentials: true})
        .then(({data}) => {
            // Router.push('/')
            window.location.href = '/'
        }).catch((err) => {
        // dispatch({type: 'SIGNIN_REJECT', error: err?.response?.data?.message})

    })
}
export const loadUserData = (store) => {

    http.get('/user/load')
        .then(({data}) => {
            store.dispatch(signinUserSuccess(data))
        }).catch((err) => {
    })
}