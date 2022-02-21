import React,{useContext} from 'react'
import AlertContext from '../context/alertContext'

const DisplayAlert = () => {

    const alertContext = useContext(AlertContext);
    const { alert, btnClass, msg, noAlert } = alertContext;

    return (
        <div  className={`mt-3 ${btnClass} alert-dismissible fade show`} role='alert'>
            {
                alert 
                ? <> {msg} <button type="button" className="btn-close" onClick={()=>noAlert()}></button> </> 
                : null
            }
        </div>
    )
}

export default DisplayAlert