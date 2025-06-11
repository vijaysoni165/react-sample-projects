import React from 'react'
import { useNavigate } from "react-router-dom";
import {Routes, Route, Link  } from "react-router-dom";
// import RoutesNav from '../RootNavigator1/RoutesNav';
import './Home.css';


function Home() {
// const navigate = useNavigate();
//   const goToLogin = () => {
//     navigate("/login", { replace: true }); // Navigate to About page
//   };
  return (
    <>
    <section>
    <div className='container banner-tb' style={{paddingTop: "60px", paddingBottom: "60px"}}>
    <div className='row'>
        <div className='col-md-8 d-flex'>
            <div className='d-flex' style={{alignItems: "center"}} >
                <div>
                    <h2>React Projects</h2>
                    <p>Projects are the most practical way to learn any language, andReact is no exception. Solidify your knowledge of React by creating these cool projects.</p>
                    <a href="" target="_blank" rel="noreferrer" className="btn hero-btn btn-primary">join the course</a>
                    
                </div>
                
            </div>
        </div>
        <div className='col-md-4'>
            <img src='https://react-projects.netlify.app/_next/static/media/hero-1.7c6a8341.svg' className='img-fluid' />
        </div>
    </div>
      
       </div>
    </section>
    <section className="bgcolor">
        <div className="container">
        <div class="title"><h2>Course Projects</h2><div class="title-underline"></div></div>        
          <nav> 
          <Link to="/login" className="img-tiles">              
              <span className="img-container">
                <img src="https://www.uxdt.nic.in/wp-content/uploads/2020/02/loginform2_p.png" className="img-fluid" />
              </span>
              <footer>
                <h5>Login</h5>
              </footer>
            </Link>             
            <Link to="/datatable" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>DataTable</h5>
              </footer>
            </Link>
            <Link to="/calculator" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Calculator</h5>
              </footer>
            </Link>
            <Link to="/commoncode" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Common Code</h5>
              </footer>
            </Link>  
            <Link to="/youtube" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>YouTube</h5>
              </footer>
            </Link> 
            <Link to="/userdata" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>User Data</h5>
              </footer>
            </Link> 
            <Link to="/jokes" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Jokes</h5>
              </footer>
            </Link>  
            <Link to="/form" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Form</h5>
              </footer>
            </Link>
            <Link to="/arraytable" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Array Table</h5>
              </footer>
            </Link> 
            <Link to="/weatherapp" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Weather App</h5>
              </footer>
            </Link>    
            <Link to="/todolist" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>TO DO APP</h5>
              </footer>
            </Link> 
            <Link to="/crudapplication" className="img-tiles">              
              <span className="img-container">
                <img src="https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-birthday.cc0a5499.png&w=1920&q=75" className="img-fluid" />
              </span>
              <footer>
                <h5>Crud Application</h5>
              </footer>
            </Link>                        
          </nav>          
        </div>
      </section>   
      </>
  )
}

export default Home;
