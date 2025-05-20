import React from 'react'

function JokeButton(props) {
  return (
    <div>
       <button onClick={props.callApi}>Generate Joke</button>
    </div>
  )
}

export default JokeButton
