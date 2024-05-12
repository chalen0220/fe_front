import React, { useState } from 'react'

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const login = async() =>{
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData = data)

    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors)
    }
  }

  const signup = async() =>{
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData = data)

    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors)
    }
    
  }

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="logsign">
        <div className="container d-flex flex-column">
          <h2 className="loginTitle">{state}</h2>
          <br />
          
            <div className="loginFields d-flex flex-column">
              {state === "Sign Up"? <input className="linput d-flex" name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name"/> : <></>}
              <input className="linput d-flex" name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address"/>
              <input className="linput d-flex" name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
            </div>
            <br />
            
            <button onClick={()=>{state === "Login"? login() : signup() }} class="buttonLogin wide primary">Send</button>
            
          
          <br/>
          {state === "Sign Up"?
          <span className="loginhere" onClick={()=>{setState("Login")}}>Already have an account? Login here!</span> :
          <span className="signupHere" onClick={()=>{setState("Sign Up")}}>New user? Sign up here!</span>
          }
        </div>
			</div>
    </>
  )
}

export default LoginSignup
