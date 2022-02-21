import {
    NO_ALERT,
    PRIMARY_ALERT,
    SECONDARY_ALERT,
    SUCCESS_ALERT,
    DANGER_ALERT,
    INFO_ALERT,
    WARNING_ALERT,
} from '../types';

const alertReducer = (state, action) => {
    switch (action.type) {
        case NO_ALERT:
            return{
                alert: false,
                msg: null
            } 
        case PRIMARY_ALERT:
            return{
                alert: true,
                msg: 'Este es un mensaje.',
                btnClass: 'alert alert-primary'
            }
        case SECONDARY_ALERT:
            return{
                alert: true,
                msg: 'Este es un mensaje.',
                btnClass: 'alert alert-secondary'
            }
        case SUCCESS_ALERT:
            return{
                alert: true,
                msg: 'Este es un mensaje.',
                btnClass: 'alert alert-success'
            }
        case DANGER_ALERT:
            return{
                alert: true,
                msg: 'Este es un mensaje.',
                btnClass: 'alert alert-danger'
            }
        case INFO_ALERT:
            return{
                alert: true,
                msg: 'Este es un mensaje.',
                btnClass: 'alert alert-info'
            }
        case WARNING_ALERT:
            return{
                alert: true,
                msg: 'Este es un mensaje.',
                btnClass: 'alert alert-warning'
            }
        default:
            return state;
    }
}

export default alertReducer;