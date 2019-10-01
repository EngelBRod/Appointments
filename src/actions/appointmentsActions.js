export const AddAppointmentAction = appointment =>{
    return {
        type:   'ADD_APPOINTMENT',
        payload: appointment
    }
}

export const deleteAppointmentAction = id => {

    return {
        type:'DELETE_APPOINTMENT',
        payload:id
    }
}