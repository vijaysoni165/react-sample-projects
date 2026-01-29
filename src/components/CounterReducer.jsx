import React, {useReducer} from 'react'
const initialState = {count : 0, inc: 2, dec: 2}

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':            
            return {...state, count: state.count + 1};
            case 'DECREMENT':
            return {...state, count: state.count - 1};
            case 'RESET' :
            return {...state, count: 0};    
            default:
            return state;        
     } 
}

function CounterReducer() {    
    const [state, dispatch] = useReducer(reducer, initialState);
     return (
        <>
        <hr />
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type : 'INCREMENT'}) }>+ Add</button>
            <button onClick={() => dispatch({type : 'DECREMENT'}) }>- Sub</button>
            <button onClick={() => dispatch({type : 'RESET'}) }>Reset</button>
        </>
     )
}

export default CounterReducer