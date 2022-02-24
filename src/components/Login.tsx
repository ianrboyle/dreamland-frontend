import React, {ChangeEvent, useState} from "react"
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
    // AuthService.login(userInfo?.email, userInfo?.password).then(
    //   () => {
    //     window.location.reload();
    //   },error => {
    //     const resMessage =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //       console.log(resMessage)
    //     });

    axios.post("http://localhost:5000/sessions", userInfo).then((response) => {
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
  localStorage.setItem("jwt", response.data.jwt);
    console.log(response.data)
}).catch((err) => {
    console.log(err.response)
  })
        // try {
        //   if (userInfo){
        //     const {  email, password } = userInfo
            
        
        //     const body = { email, password }
            // const response =  await fetch("http://localhost:5000/sessions", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body) 

          
        // })
        // console.log(response)
        // const user: any = JSON.parse(localStorage.getItem('user')!);
        // console.log(user)
        // window.location.href = "/"
          // }
          
        // } catch (err: any) {
        //   console.error(err.message)
        // }

      }

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