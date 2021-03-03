import axios from 'axios';
import { Link } from 'react-router-dom';

const apiUrl = 'https://messaging-test.bixly.com'
export async function login() {
    try {
        const result = await axios({
            method: 'post',
            url: `${apiUrl}/api-token-auth/`,
            headers: {},
            data: {
            "username":"test", "password":"test123!"
            }
        })
        //see what's coming back
        console.log(result);
        //save token in local storage
        localStorage.setItem('token', result.data.token)
        const token = localStorage.getItem('token');
        console.log(token);
        
    } catch (err) {
        console.log(err);
    }
};

// const accessToken = {"username":"test", "password":"test123!"};
  

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.Authorization = `Token ${accessToken}`;
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );
  // console.log(accessToken);