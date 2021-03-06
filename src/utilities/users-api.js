import axios from 'axios';


export async function login(credentials) {
    try {
      //see if you can eliminate these two lines later
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
      //save token in local storage
      localStorage.setItem('token', result.data.token)
      return result;
        
    } catch (err) {
        console.log(err);
        return err;
    }
};

