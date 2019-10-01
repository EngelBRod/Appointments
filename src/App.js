import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import AddAppointment from './components/AddAppointments';
import AppointmentsList from './components/AppointmentsList';



function App() {
  return (
    <Provider store={store}>

    <div className="container">
      <header >
        <h1 className="text-center">Veterinary pet's administrator</h1>
      </header>
    
      <div className="row">
        <div className="col-md-6">
          <AddAppointment/>
        </div>
        <div className="col-md-6">
          <AppointmentsList/>
        </div>
      </div>
    </div>

    </Provider>
    
   
  );
}

export default App;
