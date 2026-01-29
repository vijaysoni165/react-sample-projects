import React, { useState, useCallback  } from 'react'
import Welcome from './Welcome'
import Counter from './Counter';
import CounterReducer from './CounterReducer';

import UseCallback from './UseCallback';


function test() {

  const[message, setMessage] = useState('');
  const handleData = (data) => {
    setMessage(data)
  }
  
// NEW
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {    
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#000',
    padding: '10px'
  };

  return (
    <div>

      <p>Data from child: {message}</p>
      <Welcome name="vijay" sendDate = {handleData}  />     
       <Counter />  
        <Counter />  
        <CounterReducer />
        
        <div style={theme}>
            <h2>useCallback Example</h2>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <UseCallback getItems={getItems} />
           <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    </div>
  )
}

export default test
