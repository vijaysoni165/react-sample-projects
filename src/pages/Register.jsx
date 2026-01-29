import React, { useState } from 'react'
import { Last } from 'react-bootstrap/esm/PageItem';
import { useNavigate } from 'react-router-dom';

function Register() {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isChecked: false,
      });
      const [error, setError] = useState("");
      const navigate = useNavigate();
      const goToLogin = () => {
            navigate("/login", { replace: true }); // Navigate to About page
          };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSignup = async (e) => {
        e.preventDefault();
      
        if (!formData.isChecked) {
          setError("You must accept the Terms and Conditions.");
          console.error("Checkbox error:", "You must accept the Terms and Conditions.");
          return;
        }
      
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match!");
          console.error("Password error:", "Passwords do not match!");
          return;
        }
      
        try {
          const response = await fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            setError(data.error || "Signup failed. Try again.");
            console.error("API error:", data.error || "Signup failed. Try again.");
            return;
          }
          
          alert("Signup Successful!");
          setTimeout(() => navigate("/dashboard"), 1000);
        } catch (error) {
          setError("Network Error! Try again.");
          console.error("Network error:", error);
        }
      };
    
  return (
    <div className='container'>
    <div className="login-container" style={{maxWidth: "400px", margin: "200px auto"}}>
      <h2 style={{marginBottom:"20px"}}>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="firstName"
          placeholder="Full Name"
          value={formData.firstName}
          onChange={handleChange} style={{marginBottom:"20px"}}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange} style={{marginBottom:"20px"}}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange} style={{marginBottom:"20px"}}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange} style={{marginBottom:"20px"}}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange} style={{marginBottom:"20px"}}
          required
        />

        {/* ✅ Terms & Conditions Checkbox */}
        <div className="checkbox-container"style={{marginBottom:"20px"}} >
          <input
            type="checkbox"
            name="isChecked"
            id="terms"
            checked={formData.isChecked} 
            onChange={handleChange}
          />
          <label htmlFor="terms">
            I accept the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>

        <button type="submit"  style={{marginBottom:"20px"}}>
          Signup
        </button>
      </form>
      <p>Already have an account? <a style={{color: "#0d6efd"}} onClick={goToLogin}>Login here</a></p>

    </div>
    </div>
  )
}

export default Register
