import axios from 'axios';
import authHeader from './AuthHeader';
const API_URL = 'http://localhost:5000/';

const user: any = JSON.parse(localStorage.getItem('user')!);
class UserService {
 
  getPublicContent() {
    return axios.get(API_URL);
  }
  getCurrentCandidateInfo() {
    console.log(user)
    return axios.get(API_URL + 'candidates/' + user.user_id, { headers: authHeader() });
  }
}
export default new UserService();