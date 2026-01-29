import React from "react";

const styles = {
    container: { textAlign: "center", marginTop: "50px" },
    form: { display: "flex", flexDirection: "column", width: "300px", margin: "auto" },
    input: { padding: "10px", margin: "10px 0", fontSize: "16px" },
    button: { padding: "10px", background: "blue", color: "#fff", border: "none", cursor: "pointer" },
    error: { color: "red", marginTop: "10px" },
  };

const Login = () => {
    return (
        <div style={styles.container}>           
            <h2>Login Page</h2>
            <p>Welcome! Please log in.</p>        
        </div>
    )
}
export default Login;