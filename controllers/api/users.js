module.exports = {
    login
}

async function login(req, res) {
    try {
        const result = await axios({
            method: 'post',
            url: 'https://messaging-test.bixly.com/api-token-auth/',
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