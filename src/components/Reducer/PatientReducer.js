
export const patientState = {
    patients: []
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatient];
            console.log(action);
            return { patients: allPatients };
        case 'REMOVE_PATIENT':
            const curentPatients = state.patients.filter(patient => patient.id !== action.id);
            console.log(action);
            return { patients: curentPatients };
        default:
            return state;
    }
}