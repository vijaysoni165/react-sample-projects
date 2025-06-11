import React from 'react'

function Test() {
  return (
    <div>
        {process.env.REACT_APP_SECRET_KEY}
    </div>
  )
}

export default Test
