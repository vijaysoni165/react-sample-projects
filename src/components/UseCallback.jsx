import React, {useEffect, useState} from 'react'


function UseCallback({ getItems }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        console.log('Updating items...');
        setItems(getItems());
    }, [getItems]);


  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default UseCallback