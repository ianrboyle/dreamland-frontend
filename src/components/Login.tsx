import React, {ChangeEvent, useState} from "react"

import AuthService from "../services/Auth.service";

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

  const handleLogin = () => {
    AuthService.login(userInfo?.email, userInfo?.password).then(
      () => {
        window.location.reload();
      },error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage)
        });
      }
  
  console.log(userInfo)
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