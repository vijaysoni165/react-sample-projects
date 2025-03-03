import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const goToRegister = () => {
        navigate("/register"); // Navigate to About page
      };
   const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (!isChecked) {
          setError("You must accept the Terms and Conditions.");
          return;
        }
        localStorage.setItem("token", data.token); // Save token
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(data.message || "Invalid Credentials");
      }
    }catch(error){
      setError("Network Error! Try again.");
    }
   }
  
  return (
    <div className='container'>
    <div className="login-container" style={{maxWidth: "400px", margin: "200px auto"}}>
     <h2 style={{marginBottom:"20px"}}>Login Page</h2>
     <form onSubmit={handleLogin}>
     {error && <p className="error">{error}</p>}
        <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} required style={{marginBottom:"20px"}}  />
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required style={{marginBottom:"20px"}}  />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms">
            I accept the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <a onClick={goToRegister} class="btn btn-gray d-block" id="nextBtn">Create your Account</a>
      <p>Email: eve.holt@reqres.in</p>
      <p>Password: cityslicka</p>
    </div>
    </div>
  )
}

export default LoginPage
