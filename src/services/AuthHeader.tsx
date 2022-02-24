import axios from "axios"

export default function authHeader(): any {
  var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}
  // const user: any = JSON.parse(localStorage.getItem('jwt')!);
  // if (user && user.jwt) {
  //   return { Authorization: 'Bearer ' + user.jwt };
  // } else {
  //   return {};
  // }
}



