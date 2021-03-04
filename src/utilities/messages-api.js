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

