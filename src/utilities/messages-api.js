import axios from 'axios';
const token = localStorage.getItem('token');

export async function getMessages() {
    const messages = await axios({
        method: 'get', 
        url: 'https://messaging-test.bixly.com/messages/',
        headers: {
            Authorization: `Token ${token}`
        },
        data: {},
    })
    return messages;
}

export async function getSentMessages() {
    const sentMessages = await axios({
        method: 'get',
        url:'https://messaging-test.bixly.com/messages/sent/',
        headers: {
            Authorization: `Token ${token}`
        },
        data: {}
    })
    return sentMessages;
}

//data is already saved, but getting again due to required route.
export async function getDetails(id) {
    const message = await axios({
        method:'get', 
        url:`https://messaging-test.bixly.com/messages/${id}/`,
        headers: {
            Authorization: `Token ${token}`
        },
        data: {}
    })
    console.log(message)
    return message;
}

//data is already saved, but getting again due to required route.
export async function deleteMsg(id) {
    const message = await axios({
        method:'delete', 
        url:`https://messaging-test.bixly.com/messages/${id}/`,
        headers: {
            Authorization: `Token ${token}`
        },
        data: {}
    })
    console.log(message);
    return message;
}

