import React from "react"
import axios from "axios"
const API_URL = "http://localhost:5000/sessions"
class AuthService {
  login(email: string | undefined, password: string | undefined) {
    return axios.post(API_URL, {
      email,
      password
    }).then(response => {
      if (response?.data.accessToken) {
        localStorage.set("email", JSON.stringify(response.data))
      } 
      console.log(response.data)
      return response.data
    })
  }
  logout() {
    localStorage.removeItem("user");
  }
  // register(name: string, email: string, password: string) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }
  // getCurrentUser() {
  //   return JSON.parse(localStorage.getItem('user'));;
  // }
}
export default new AuthService();