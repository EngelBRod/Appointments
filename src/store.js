import {createStore} from 'redux';
import reducer from './reducers';
import {getStateStorage, saveStateStorage} from './localstorage';


// define initial state

//GET APPOINTMENTS FROM STORAGE
const storageState = getStateStorage();




 const store = createStore(

    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    

);

store.subscribe(()=>{
    saveStateStorage({
        appointments: store.getState().appointments
    })
})

export default store;