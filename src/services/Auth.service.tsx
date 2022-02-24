import React from "react"
import axios from "axios"
const API_URL = "http://localhost:5000/"
class AuthService {
  login(email: string | undefined, password: string | undefined) {
    return axios.post(API_URL + "sessions", {
      email,
      password
    }).then(response => {
      if (response?.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data))
      } 
      console.log("Response: ", response.data)
      return response.data
    })
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(name: string, email: string, password: string) {
    return axios.post(API_URL + "users", {
      name,
      email,
      password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')!);;
  }
}
export default new AuthService();