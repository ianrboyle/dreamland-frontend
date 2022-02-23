import React from "react"

const API_URL = "http://localhost:5000/sessions"
class AuthService {
  login(email: any, password: any) {
    return fetch(API_URL, {
      email,
      password
    }).then(response => {
      if (response?.data.accessToken) {
        localStorage.set("email", JSON.stringify(response.data))
      } 
    })
  }
}