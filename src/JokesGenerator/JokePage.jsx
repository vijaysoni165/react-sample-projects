import React, { useEffect, useState } from 'react'
import JokeButton from './JokeButton'

function JokePage() {
    const[joke, SetJokes] = useState("...Loading");
    
    const fetchApi = () => {
    const api = "https://v2.jokeapi.dev/joke/Programming?type=single";
     fetch(api)
    .then((res) => res.json())
    .then((data) => {SetJokes(data.joke)})
    .catch((error) => {
        SetJokes("Failed to load a joke. Please try again.");
    });
        
    }

    useEffect(() => {
        fetchApi();
    },[])
    
    

  return (
    <div className='container' style={{width:"800px", margin: "0 auto", textAlign: "center", marginTop: "20px"}}>
        <h6>Joke Generator Using React and Joke API</h6>
        <h2 style={{margin: "20px" }}>{joke}</h2>
        
        <JokeButton callApi={fetchApi}></JokeButton>
    </div>
  )
}

export default JokePage
