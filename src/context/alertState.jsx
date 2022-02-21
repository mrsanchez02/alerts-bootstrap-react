import React,{useReducer} from 'react'
import AlertContext from './alertContext'
import alertReducer  from './alertReducer'
import {
    NO_ALERT,
} from '../types';

const AlertState = ({children}) => {

    const initialState = {
        alert: false,
        msg: null,
        btnClass: null
    }

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const noAlert = () => {
        dispatch({
            type:NO_ALERT
        })
    }

    const newAlert = type => {
        dispatch({
            type
        })
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                msg:state.msg,
                btnClass:state.btnClass,
                noAlert,
                newAlert
            }}
        >
        {children}
        </AlertContext.Provider>
    )
}

export default AlertState