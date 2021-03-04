import axios from 'axios';

const BASE_URL = '/api/users';

// export function login (credentials) {
//     return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
// }

export async function login(credentials) {
    try {
      const p = credentials.password;
      const u = credentials.username;
      const result = await axios({
          method: 'post',
          url: 'https://messaging-test.bixly.com/api-token-auth/',
          headers: {},
          data: {
          "username":{u}.u, "password":{p}.p
          }
      })
      // see what's coming back
      console.log(result);
      console.log(credentials)
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

// Helper Function

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    // if the token exists, add it to header with correct syntax
    const token = localStorage.getItem('token');
    if (token) {
      // Ensure the headers object exists
      options.headers = options.headers || {};
      options.headers.Authorization = `Token ${token}`;
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }