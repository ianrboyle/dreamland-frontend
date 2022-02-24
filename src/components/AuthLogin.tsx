import React , { Component, useState, ChangeEvent } from "react"
import AuthService from "../services/Auth.service";

const required = (value: any) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
type State = {
  loading: boolean,
  message: string
}
type UserLoginInfo = {
  email: string,
  password: string
}
const AuthLogin = () =>  {
  const [loadingState, setLoadingState] = useState<State>()
  
  const [userInfo, setUserInfo] = useState<UserLoginInfo | undefined>()
  const handleUserInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name ,value} = e.target
    setUserInfo((prev: any) => {
      return {...prev, [name]: value}
    })
  }
  
  const handleLogin = (e: any) => {
    e.preventDefault();
    

    setLoadingState({
      loading: true,
      message: ""
    })
 
    
    if (userInfo){
      AuthService.login(userInfo?.email, userInfo?.password).then(() => {
        // console.log("Login success: ", userInfo)
        // window.location.reload()
      }, error => {
        const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setLoadingState({
              loading: false,
              message: resMessage
            });
        }
      );
    } else {
      setLoadingState((prev: any) => {
        return {...prev, loading: false}
      });
    }
    console.log("Current: ", AuthService.getCurrentUser())
    const userI = JSON.stringify(localStorage.getItem("user"))
    console.log("AHH: ",userI)
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
      <form onSubmit={handleLogin}>
      <p>Email: </p> 
    <input type="text" name="email"value={userInfo?.email} onChange={handleUserInfoChange}/>

    <p>Password: </p> 
    <input type="text" name="password" value={userInfo?.password} onChange={handleUserInfoChange}/>
    
        <button>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default AuthLogin;