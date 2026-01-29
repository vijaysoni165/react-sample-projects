import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function View() {
    const [data, setData] = useState([]);
    const [tabledark, settabledark] = useState("");
    
    const header = {"Access-Control-Allow-Origin" : "*"};

    function getData() {       
       axios.get(
        'https://6836b219664e72d28e41b3a3.mockapi.io/crud-youtube',
        ) 
        .then((response) => {
           setData(response.data)
        })
        .catch((error)=>{
            console.log("Error fetching data", error);
        })
    }
    
   const handleDelete = (id)=>{
        axios.delete(`https://6836b219664e72d28e41b3a3.mockapi.io/crud-youtube/${id}`)
         .then(() =>{
            getData();
         })
    }

    const setToLocalStorageData = (id, name, email, mobile, age) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("age", age);
    }
     useEffect(()=> {
        getData();
    }, []);
  



  return (
    <div className='container'>       
    <div className='d-flex' style={{justifyContent:  'space-between'}} >
                <h2>View Data</h2>    
                <div className="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" onClick={()=>{
                        if(tabledark === 'table-dark') settabledark("")
                        else settabledark("table-dark")
                    }} id="switchCheckDefault"/>
                    <label class="form-check-label" for="switchCheckDefault">Toogle Button</label>
                </div>
                <Link to="/crudapplication">
                <button type="submit"  className="btn btn-primary" style={{width: "85px", marginRight: "5px"}}>Create Data</button>
                </Link>
            </div>

        <table className={`table table-bordered ${tabledark}`}>
            <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th style={{width:"25%"}}>Email</th>
                    <th>Mobile Number</th>
                    <th>Age</th>
                    <th style={{width:"15%"}}>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((eachdata)=>{
                    return(
                            <tr>
                    <td>{eachdata.id}</td>
                    <td>{eachdata.name}</td>
                    <td>{eachdata.email}</td>
                    <td>{eachdata.mobile}</td>
                    <td>{eachdata.age}</td>
                    <td>
                    <Link to="/update">
                        <button type="button" className="btn btn-primary btn-sm" style={{marginRight: "10px"}} onClick={() => setToLocalStorageData(eachdata.id, eachdata.name, eachdata.email, eachdata.mobile, eachdata.age)}>Edit</button>
                    </Link>                
                     <button type="button" className="btn btn-danger btn-sm" onClick={() => {handleDelete(eachdata.id)}}>Delete</button></td>
                </tr>
                        )
                    
                })
            }
                
            </tbody>
        </table>
    </div>
  )
}

export default View;
