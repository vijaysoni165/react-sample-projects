import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [mobile, setMobile] = useState("");
    const header = {"Access-Control-Allow-Origin" : "*"};
    const history = useNavigate();
    const handleSubmit = (e) => {
       e.preventDefault();
       axios.post(
        'https://6836b219664e72d28e41b3a3.mockapi.io/crud-youtube',
        {
            name: name,
            email : email,
            mobile: mobile,
            age: age,
            header
        })        
        .then(response => {         
            console.log(response.data);
            history("/view");
        })
        .catch(error => {
            console.log("Error:", error);
        });
        
    }
    



  return (
    <div className='container '>  
        <div className='d-flex' style={{justifyContent:  'space-between'}} >
            <h2>Create</h2>    
            <Link to="/view">
            <button type="submit"  className="btn btn-primary" style={{width: "85px", marginRight: "5px"}}>View Data</button>
            </Link>
        </div> 
        <form className="row row-cols-lg-auto g-3 align-items-center mt-4 mb-4">        
            <div className="col-12">
                <label className="visually-hidden" >Name</label>
                <div className="input-group">                
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="" placeholder="Name" />
                </div>
            </div>
            <div className="col-12">
                <label className="visually-hidden">Email</label>
                <div className="input-group">                
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id=""  placeholder="Email" />
                </div>
            </div>
            <div className="col-12">
                <label className="visually-hidden" >Number</label>
                <div className="input-group">                
                    <input type="number" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} id="" placeholder="Mobile Number" />
                </div>
            </div>
            <div className="col-12">
                <label className="visually-hidden">Age</label>
                <div className="input-group">                
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} id="" placeholder="age" />
                </div>
            </div>                    

            <div className="col-lg-3">
                <button type="submit"  className="btn btn-primary" style={{width: "85px", marginRight: "5px"}} onClick={handleSubmit} >Submit</button>
                {/* <button type="submit"  className="btn btn-danger" style={{width: "85px", marginRight: "5px"}} onClick={handleclear}>Clear</button>
                <button type="button" className="btn btn-secondary" style={{width: "85px", marginRight: "5px"}} onClick={handleUpdate}>Update</button> */}
            </div>
            
            </form>
    </div>
  )
}

export default Create;
