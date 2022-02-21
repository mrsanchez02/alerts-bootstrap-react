import React,{ useContext } from 'react'
import AlertContext from '../context/alertContext'
import {
    PRIMARY_ALERT,
    SECONDARY_ALERT,
    SUCCESS_ALERT,
    DANGER_ALERT,
    INFO_ALERT,
    WARNING_ALERT,
} from '../types';
import Button from './Button';

const ButtonGroup = () => {

    const alertContext = useContext(AlertContext);
    const { newAlert } = alertContext;

    const btnList = [
        {id:1,btnClass:'primary',btnMsg:'Mensaje1',type:PRIMARY_ALERT},
        {id:2,btnClass:'secondary',btnMsg:'Mensaje2',type:SECONDARY_ALERT},
        {id:3,btnClass:'success',btnMsg:'Mensaje3',type:SUCCESS_ALERT},
        {id:4,btnClass:'danger',btnMsg:'Mensaje4',type:DANGER_ALERT},
        {id:5,btnClass:'info',btnMsg:'Mensaje5',type:INFO_ALERT},
        {id:6,btnClass:'warning',btnMsg:'Mensaje6',type:WARNING_ALERT},
    ]

    return (
        <div className="btn-group btn-group-lg mt-5">
            {
                btnList.map(btn=> (
                    <Button
                        key={btn.id}
                        btnClass={btn.btnClass}
                        btnMsg={btn.btnMsg}
                        btnAction={()=>newAlert(btn.type)} 
                    />
                ))
            }
        </div>
    )
}

export default ButtonGroup