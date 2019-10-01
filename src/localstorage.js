export const getStateStorage= ()=>{

    const appointmentsStorage = localStorage.getItem('appointments');

    if(appointmentsStorage===null){
        return undefined
    }
    return JSON.parse(appointmentsStorage);



}


export const saveStateStorage = state => {
    const appointmentsState = JSON.stringify(state);
    localStorage.setItem('appointments' , appointmentsState);
}