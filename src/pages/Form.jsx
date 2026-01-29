import React, { useState } from 'react'
import "./Form.css";
import { Prev } from 'react-bootstrap/esm/PageItem';
import { Hand } from 'lucide-react';


function Form() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const[subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  })
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] =
  useState("");
const [about, setAbout] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(
          firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
  )
}

const handleSubjectChange = (sub) => {
  setSubjects((Prev)=> ({
    ...Prev,
    [sub] : !Prev[sub],

  }));
}


const handleReset = () => {
  setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
  
}
  
  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName} onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastName"
            value={lastName} onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label htmlFor="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact} onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <div style={{display: "inline-flex"}}>
          <label htmlFor="gender">Gender*</label>
          <input type="radio" name="gender" value="male" id="male"  style={{marginLeft: "20px"}} checked={gender === "male"} onChange={(e) => setGender(e.target.value)}  /> <span style={{marginLeft: "10px"}}>Male</span> 
          <input type="radio" name="gender" value="female" id="female" style={{marginLeft: "20px"}} checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> <span style={{marginLeft: "10px"}}>Female</span> 
          <input type="radio" name="gender" value="other"  style={{marginLeft: "20px"}} checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} /> <span style={{marginLeft: "10px"}}>other</span> 
          </div>
          
          <div style={{display: "inline-flex", marginBottom: "20px"}}>
            <label style={{whiteSpace: "nowrap"}} htmlFor="lang">Your best Subject </label>
            <input style={{marginLeft: "20px"}}  type="checkbox" name="lang" id="english" checked={subjects.english === true} onChange={(e) => handleSubjectChange("english")} /> <span style={{marginLeft: "10px"}}>English  </span>
            <input style={{marginLeft: "20px"}}  type="checkbox" name="lang" id="maths" checked={subjects.maths === true} onChange={(e) => handleSubjectChange("maths")} /> <span style={{marginLeft: "10px"}}> Maths </span>
            <input style={{marginLeft: "20px"}}  type="checkbox" name="lang" id="physics" checked={subjects.physics === true} onChange={(e) => handleSubjectChange("physics")} /> <span style={{marginLeft: "10px"}}> Physics </span>  
          </div>
          
          <div style={{marginBottom: "20px"}}>
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
          />
          </div>

          <div style={{marginBottom: "20px"}}>
            <label htmlFor="url">Enter URL*</label>
            <input type="url" name="url" id="url" placeholder="Enter url" />
          </div>
          
          <div style={{marginBottom: "20px"}}>
            <label>Select your choice</label>
            <select name="select" id="select" >
              <option>Select your Ans</option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="t">MongoDB</option>
              </optgroup>
            </select>
          </div>

          <div style={{marginBottom: "20px"}}>
            <label htmlFor="about">About</label>
            <textarea style={{width: "100%"}}
              name="about"
              id="about"
              cols="30"
              rows="10"
              placeholder="About your self"
            ></textarea>
          </div>
          
          <div style={{marginBottom: "20px"}}>

            <button style={{maxWidth: "100px"}} type="reset" onClick={() => handleReset()} > Reset</button>
            <button style={{maxWidth: "100px", marginLeft: "20px"}} type="submit"  >Submit</button>
          </div>                              
        </form>
      </fieldset>
    </div>
  );
}

export default Form;
