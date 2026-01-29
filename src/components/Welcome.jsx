import React from 'react'

function Welcome({sendDate, name}) {
  return (
    <div>
      <button onClick={() => sendDate('Hello Parent')}>Send Data to Parent</button>
      {name}
    </div>
  )
}

export default Welcome
