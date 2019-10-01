import{combineReducers} from 'redux';
import reducerAppointments from './reducerAppointments';
import validateReducer from './validateReducer';


export default combineReducers({

    appointments: reducerAppointments,
    error:validateReducer
})