import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducer/PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);

    const handleSubmit = event => {
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = '';

        event.preventDefault();
    }

    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={nameRef}
                />
            </form>
            {
                state.patients.map((p) => {
                    return (
                        <li
                            key={p.id}
                            onClick={() => dispatch({
                                type: 'REMOVE_PATIENT',
                                id: p.id,
                                name: p.name
                            })}
                        >
                            {p.name}
                        </li>
                    )
                })
            }
        </div>
    );
};

export default PatientManagement;