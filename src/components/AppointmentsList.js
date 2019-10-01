import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import{deleteAppointmentAction} from '../actions/appointmentsActions'

const AppointmentsList = ()=>{


    //GET APPOINTMENTS FROM STATE
    const appointments =useSelector((state)=>state.appointments);
    //CONDITIONAL MESSATE
    const message= Object.keys(appointments.appointments).length===0 ? ' No Dates' :'Manage Your Appointments';
    console.log(appointments);
    //DISPATCH TO CALL  DELETE ACTION
    const dispatch = useDispatch();



    return(
        <div className="card mt-5">

            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
                <div className="lista-citas">
                    {appointments.appointments.map((appointment)=>(

                            <div key={appointment.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{appointment.pet}</h3>
                                <p className="card-text"><span>Owner's name:</span>{appointment.owner}</p>
                                <p className="card-text"><span>Date:</span>{appointment.date}</p>
                                <p className="card-text"><span>Hour:</span>{appointment.hour}  </p>
                                <p className="card-text"><span>Symptoms:</span> <br />{appointment.symptoms} </p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={()=>dispatch(deleteAppointmentAction(appointment.id))}
                                    
                                    >Delete &times;
                                    
                                    
                                </button>
                            </div>
                            </div>


                    ))}
                </div>

            </div>
            
        </div>

    );
}

export  default AppointmentsList;