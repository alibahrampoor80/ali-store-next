import {createContext, useContext, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Router from "next/router";
import {useReducerAsync} from "use-reducer-async";
import http from "../services/httpService";

const AuthContext = createContext()
const AuthContextDispatcher = createContext()

const initialState = {user: null, loading: true, error: null}
const reducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN_PENDING":
            return {user: null, error: false, loading: true}

        case "SIGNIN_SUCCESS":
            return {loading: false, error: null, user: action.payload}
        case "SIGNIN_REJECT":
            return {error: action.error, loading: false, user: null}
        default :
            return {...state};


    }
}


const asyncActionHandlers = {

    SIGNIN: ({dispatch}) => (action) => {

        dispatch({type: "SIGNIN_PENDING"})
        http.post('/user/signin', action.payload).then(({data}) => {
            toast.success('با موفقیت وارد شدین')
            dispatch({type: "SIGNIN_SUCCESS", payload: data})
            Router.push('/')
        }).catch((err) => {
            dispatch({type: "SIGNIN_REJECT", error: err?.response?.data?.message})
            toast.error(err?.response?.data?.message)
        })
    },
    SIGNUP: ({dispatch}) =>
        (action) => {
            dispatch({type: "SIGNIN_PENDING"})
            http.post('/user/signup', action.payload)
                .then(({data}) => {
                    toast.success('ثبت نام موفقیت آمیز بود')
                    dispatch({type: 'SIGNIN_SUCCESS', payload: data})
                    Router.push('/')
                }).catch((err) => {
                dispatch({type: 'SIGNIN_REJECT', error: err?.response?.data?.message})
                toast.error(err?.response?.data?.message)
            })
        },
    LOAD_USER: ({dispatch}) =>
        (action) => {
            dispatch({type: "SIGNIN_PENDING"})
            http.get('/user/load')
                .then(({data}) => {

                    dispatch({type: 'SIGNIN_SUCCESS', payload: data})

                }).catch((err) => {
                dispatch({type: 'SIGNIN_REJECT', error: err?.response?.data?.message})

            })
        },
    SIGNOUT: (action) => {

        http.get('/user/logout')
            .then(({data}) => {
                // Router.push('/')
                window.location.href = '/'
            }).catch((err) => {
            // dispatch({type: 'SIGNIN_REJECT', error: err?.response?.data?.message})

        })
    },
}
const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers)
    useEffect(() => {
        dispatch({type: "LOAD_USER"})
    }, [])
    return (
        <AuthContext.Provider value={user}>
            <AuthContextDispatcher.Provider value={dispatch}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}
export default AuthProvider

export const useAuth = () => useContext(AuthContext)
export const useAuthActions = () => useContext(AuthContextDispatcher)