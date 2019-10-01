import React,{useState} from 'react';
import {useDispatch,useSelector} from'react-redux';
import {AddAppointmentAction} from '../actions/appointmentsActions';
import uuid from 'uuid/v4';
import{validateFormAction} from '../actions/validateActions';


const AddAppointments = () =>{


    const[pet,savePet]= useState('');
    const[owner,saveOwner]= useState('');
    const[date,saveDate]= useState('');
    const[hour,saveHour]= useState('');
    const[symptoms,saveSymptoms]= useState('');


    //Dispatch for executing actions

    const dispatch =useDispatch();
    const addNewAppointment = (appointment) => dispatch(AddAppointmentAction(appointment)) ;
    const validateForm = (status)=>dispatch(validateFormAction(status));

    //

    const error = useSelector((state)=>state.error);
    console.log(error);
    //when form is send

    const submitNewAppointment =e =>{
        e.preventDefault();

        if(pet.trim()===''|| owner.trim()===''|| date.trim()===''|| hour.trim()===''|| symptoms.trim()===''){
            validateForm(true);
        }

        //validate form

        //create new appointment
        addNewAppointment({
            id: uuid(),
            pet,
            owner,
            date,
            hour,
            symptoms
        });

        //reset form

        savePet('');
        saveOwner('');
        saveDate('');
        saveHour('');
        saveSymptoms('');



    }



    return(


        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Add Appointments here</h2>
                <form onSubmit={submitNewAppointment}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet's Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Pet's Name" 
                                value={pet}
                                onChange={e =>savePet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Owner's Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Owner's Name"
                                value={owner}
                                onChange={e =>saveOwner(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={date}
                                onChange={e =>saveDate(e.target.value)}
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control"
                                value={hour}
                                onChange={e =>saveHour(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Symptons</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={symptoms}
                                onChange={e =>saveSymptoms(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Add</button>
                        </div>
                    </div>
                </form>

                {error.error ? <div className="alert alert-danger text-center p2">All fields are required</div>:null}
               
            </div>
    </div>

    );
}



export default AddAppointments;