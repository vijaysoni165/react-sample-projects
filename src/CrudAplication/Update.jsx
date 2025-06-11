import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Update() {
        const [id, setId] = useState(0);
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [age, setAge] = useState(0);
        const [mobile, setMobile] = useState(0);

        useEffect(() =>{
            setId(localStorage.getItem("id"));
            setName(localStorage.getItem("name"))
            setEmail(localStorage.getItem("email"))
            setMobile(localStorage.getItem("mobile"))
            setAge(localStorage.getItem("age"))            
        },[])

        const Navigate = useNavigate();

        const handleUpdate = (e) =>{
            e.preventDefault();            
            axios.put(`https://6836b219664e72d28e41b3a3.mockapi.io/crud-youtube/${id}`,{
                name : name,
                email : email,
                mobile : mobile,
                age : age
            }).then(()=>{
                Navigate("/view")
            })            
        }

  return (
    <>
      <div className='container '>
        <form className="row row-cols-lg-auto g-3 align-items-center mt-4 mb-4">
        <div className="col-12">
                <h2>Update</h2>
        </div>
            <div className="col-12">
                <label className="visually-hidden" >Name</label>
                <div className="input-group">                
                    <input type="text" className="form-control" value={name} 
                     onChange={(e) => setName(e.target.value)} 
                    id="" placeholder="Name" />
                </div>
            </div>
            <div className="col-12">
                <label className="visually-hidden">Email</label>
                <div className="input-group">                
                    <input type="email" className="form-control" value={email} 
                     onChange={(e) => setEmail(e.target.value)} 
                    id=""  placeholder="Email" />
                </div>
            </div>
            <div className="col-12">
                <label className="visually-hidden" >Number</label>
                <div className="input-group">                
                    <input type="number" className="form-control" value={mobile} 
                     onChange={(e) => setMobile(e.target.value)}
                     id="" placeholder="Mobile Number" />
                </div>
            </div>
            <div className="col-12">
                <label className="visually-hidden">Age</label>
                <div className="input-group">                
                    <input type="number" className="form-control" value={age} 
                     onChange={(e) => setAge(e.target.value)} 
                    id="" placeholder="age" />
                </div>
            </div>                    

            <div className="col-lg-3">
                <button type="submit"  className="btn btn-primary" style={{width: "85px", marginRight: "5px"}}  onClick={handleUpdate} >Update</button>
                <Link to ="/view">                
                <button type="submit"  className="btn btn-danger" style={{width: "85px", marginRight: "5px"}}>Back</button>
                </Link>
                {/* <button type="button" className="btn btn-secondary" style={{width: "85px", marginRight: "5px"}} onClick={handleUpdate}>Update</button> */}
            </div>
            
            </form>
    </div>
    </>
  )
}

export default Update
