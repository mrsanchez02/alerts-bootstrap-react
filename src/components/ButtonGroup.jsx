import React,{useContext} from 'react'
import AlertContext from '../context/alertContext'

const ButtonGroup = () => {

    const alertContext = useContext(AlertContext);
    const { 
        primaryAlert,
        secondaryAlert,
        successAlert,
        dangerAlert,
        infoAlert,
        warningAlert 
    } = alertContext;

    return (
        <div className="btn-group btn-group-lg mt-5">
            <button type='button' onClick={()=> primaryAlert()} className="btn btn-primary">Primary</button>
            <button type='button' onClick={()=> secondaryAlert()} className="btn btn-secondary">Secondary</button>
            <button type='button' onClick={()=> successAlert()} className="btn btn-success">Success</button>
            <button type='button' onClick={()=> dangerAlert()} className="btn btn-danger">Danger</button>
            <button type='button' onClick={()=> infoAlert()} className="btn btn-info">Info</button>
            <button type='button' onClick={()=> warningAlert()} className="btn btn-warning">Warning</button>
        </div>
    )
}

export default ButtonGroup
