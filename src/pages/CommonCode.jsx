
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Home from './Home';

function CommonCode() {

    // ================== Alert Start ===============>
    // by Hooks Call Alert
    const[active, setAlert] = useState();
    const alerthandler = () => {       
        alert("Yes this is hook alert")
    }

    // Normal  Alert
    const ShowAlert = () => {
        alert("Yes this is alert");
    }

    // Sweat  Alert
    const SweatAlert = () => {
        Swal.fire({
            title: "Success!",
            text: "This is a better-looking alert!",
            icon: "success",
        })
        
    }
     // ================== Alert End ===============>

    // ================== Toogle Class Start ===============>
        const [isActive, setIsActive] = useState()          
        const mystyle = {
            color: isActive ? "red" : "black",           
         };     
      
        const toggleClass = () => {
            setIsActive(!isActive);
        }    
        
    // ================== Add Class End ===============>
    const [isActive1, setIsActive1] = useState()  
      const mystyle1 = {
          color: isActive1 ? "red" : "",           
       }; 
      const addClass = () => {       
          setIsActive1(true);
  
      }  


    // ================== Remove Class End ===============>
    const [isActive2, setIsActive2] = useState(true)  
    const mystyle2 = {
        color: isActive2 ? "red" : "",           
     }; 
    const removeClass = () => {       
        setIsActive2(false);

    }  

    // ================== Menu Selected Start ===============>
    const [selected, setSelected] = useState("Home"); // Default selected item
    const handleSelect = (menuItem) => {    
      setSelected(menuItem);
    };


    // ================== Accordian Design ===============>
    const[openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

        
    
        const [openIndexes, setOpenIndexes] = useState([0]); // First section open by default      
        const toggleAccordion1 = (index) => {
          setOpenIndexes((prevIndexes) =>
            prevIndexes.includes(index)
              ? prevIndexes.filter((i) => i !== index) // Close section
              : [...prevIndexes, index] // Open section
          );      
        };
    



    // ================== Smooth Scroll Section Start ===============>

    const[activeSection, setActiveSection] = useState("home");
    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "home";

        sections.forEach((section)=> {
            const sectionTop = section.offsetTop;
            if(window.scrollY >= sectionTop -50){
                currentSection = section.getAttribute("id");
            }
        });
        setActiveSection(currentSection);
    }

    // Attach scroll event listener
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    // Smooth scrolling function
        const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });        
    };



  return (    
            <>
            <style>
            {`
                ul {
                list-style-type: none;
                padding: 0;
                display:flex;
                margin-top:50px;
                }

                li {
                    padding: 10px;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .active1 {
                    background-color: blue;
                    color: white;
                }
            `}
            {/* smooth scroll */}
            {`
          body {
            font-family: Arial, sans-serif;
            scroll-behavior: smooth;
          }

          nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
            padding: 10px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          nav button {
            background: none;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 16px;
            color:#434343;
          }

          .active {
            color: blue;
            font-weight: bold;
          }

          section {
            height: 100vh;
            padding: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            border-bottom: 1px solid #ddd;
            background:#ddd;
          }
        `}

        {/* Accordian CSS */}
        {`
          .accordion {
            width: 100%;
            max-width: 400px;
            margin: 20px auto;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          .accordion-item {
            border-bottom: 1px solid #ddd;
          }

          .accordion-header {
            padding: 15px;
            background: #f5f5f5;
            cursor: pointer;
            font-size: 18px;
          }

          .accordion-content {
            padding: 15px;
            display: none;
          }

          .active .accordion-content {
            display: block;
          }
        `}
            </style>
            <h1>Common Code</h1>
            {/* Alert Design Start */}
            <h3  style={{marginTop: "50px"}}>Alert</h3>
            <button className="btn btn-primary" onClick={() => alerthandler()} style={{maxWidth: "120px"}}>Hook Alert</button>
            <button className="btn btn-primary" onClick={ShowAlert} style={{maxWidth: "120px", marginLeft: "8px"}}>Normal Alert</button>
            <div style={{marginBottom: '50px'}}></div>

        
            <h3  style={{marginTop: "50px"}}>Sweat Alert</h3>            
            <button className="btn btn-primary" onClick={SweatAlert} style={{maxWidth: "120px"}}>Sweat Alert</button>
            <div style={{marginBottom: '50px'}}></div>
            {/* Alert Design End*/}
            
            {/* Active Class Start */}
            <div>
                <h3 className={isActive ? "active" : ""} style={mystyle} >Toogle Class</h3>
                <button className="btn btn-primary" onClick={toggleClass} style={{maxWidth: "120px"}}>Toogle Class</button>
            </div>

            {/* Add Class Start */}
            <div style={{marginTop:"50px"}}>
                <h3 className={isActive1 ? "active" : ""} style={mystyle1} >Add Class</h3>
                <button className="btn btn-primary" onClick={addClass} style={{maxWidth: "150px"}}>Add Class</button>
            </div>

            {/* Remove Class Start */}
            <div style={{marginTop:"50px"}}>
                <h3 className={isActive2 ? "active" : ""} style={mystyle2} >Remove Class</h3>
                <button className="btn btn-primary" onClick={removeClass} style={{maxWidth: "150px"}}>Remove Class</button>
            </div>

            {/* Accordian HTML Start */}
            <h3 style={{marginTop:"50px"}}>Accordian Item</h3>
            <div className="accordion">
                {["Section 1", "Section 2", "Section 3" ].map((title, index) =>(
                    <div key={index} className={`accordion-item ${openIndex === index ? "active" : ""}`}>
                        <div className="accordion-header" onClick={()=> toggleAccordion(index)}>
                            {title}
                        </div>
                        <div className="accordion-content">
                            <p>This is the content for {title}.</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="accordion">
                {["Section 1", "Section 2", "Section 3" ].map((title, index) =>(
                  <div key={index}>
                    <button onClick={() => toggleAccordion1(index)}>
                      Section {index}
                    </button>
                    {openIndexes.includes(index) && (
                      <div className="content">Content for Section  {index}</div>
                    )}
                  </div>
                ))}
            </div>

            






            
            {/* Menu Design Start */}
            <h3 style={{marginTop:"50px"}}>Menu Item</h3>
            <ul>
                <li className={selected === "Home" ? "active1" : ""} onClick={() => handleSelect("Home")}> Home </li>
                <li className={selected === "About" ? "active1" : ""} onClick={() => handleSelect("About")}> About </li>
                <li className={selected === "Services" ? "active1" : ""} onClick={() => handleSelect("Services")}> Services </li>
                <li className={selected === "Contact" ? "active1" : ""} onClick={() => handleSelect("Contact")}> Contact </li>
            </ul>

            {/* Smooth Scroll Start */}


            <nav>
                <button className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}> Home </button>
                <button className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}> About </button>
                <button className={activeSection === "services" ? "active" : ""} onClick={() => scrollToSection("services")} > Services </button> 
                <button className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")} > Contact </button>
            </nav>

      {/* Sections */}
      <section id="home">Home Section</section>
      <section id="about">About Section</section>
      <section id="services">Services Section</section>
      <section id="contact">Contact Section</section>



            </>
  )
}

export default CommonCode