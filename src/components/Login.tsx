import React, {ChangeEvent, useState, useEffect} from "react"
import axios from "axios"
import AuthService from "../services/Auth.service";
import { response } from "express";

type UserLoginInfo = {
  email: string,
  password: string
}


const Login = () => {
  const [userInfo, setUserInfo] = useState<UserLoginInfo | undefined>()
  const handleUserInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name ,value} = e.target
    setUserInfo((prev: any) => {
      return {...prev, [name]: value}
    })
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:5000/sessions", userInfo).then((response) => {
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
  localStorage.setItem("jwt", response.data.jwt);
    console.log(response.data)
}).catch((err) => {
    console.log(err.response)
  })
      }
// useEffect(() => {
//   if (userInfo){
//     console.log(JSON.parse(localStorage.getItem('jwt')!))
//     return JSON.parse(localStorage.getItem('jwt')!)
//   }
// })


  return (  <div>   
    <h1>Login</h1>
     <p>Email: </p> 
    <input type="text" name="email"value={userInfo?.email} onChange={handleUserInfoChange}/>

    <p>Password: </p> 
    <input type="text" name="password" value={userInfo?.password} onChange={handleUserInfoChange}/>
    
    <button onClick={handleLogin}>Submit</button>
    </div>



  )
}

export default Login