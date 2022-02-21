import React,{useReducer} from 'react'
import AlertContext from './alertContext'
import alertReducer  from './alertReducer'
import {
    NO_ALERT,
    PRIMARY_ALERT,
    SECONDARY_ALERT,
    SUCCESS_ALERT,
    DANGER_ALERT,
    INFO_ALERT,
    WARNING_ALERT,
} from '../types';

const AlertState = ({children}) => {

    const initialState = {
        alert: false,
        msg: null,
        btnClass: null
    }

    // Dispatch para ejecutar las acciones. Estado a ser modificado.
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const noAlert = () => {
        dispatch({
            type:NO_ALERT
        })
    }

    const primaryAlert = () => {
        dispatch({
            type:PRIMARY_ALERT,
        })
    }
    const secondaryAlert = () => {
        dispatch({
            type:SECONDARY_ALERT,
        })
    }
    const successAlert = () => {
        dispatch({
            type:SUCCESS_ALERT,
        })
    }
    const dangerAlert = () => {
        dispatch({
            type:DANGER_ALERT,
        })
    }
    const infoAlert = () => {
        dispatch({
            type:INFO_ALERT,
        })
    }
    const warningAlert = () => {
        dispatch({
            type:WARNING_ALERT,
        })
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                msg:state.msg,
                btnClass:state.btnClass,
                noAlert,
                primaryAlert,
                secondaryAlert,
                successAlert,
                dangerAlert,
                infoAlert,
                warningAlert

            }}
        >
        {children}
        </AlertContext.Provider>
    )
}

export default AlertState