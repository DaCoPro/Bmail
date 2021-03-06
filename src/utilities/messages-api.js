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
    return message;
}

export async function deleteMsg(id) {
    const message = await axios({
        method:'delete', 
        url:`https://messaging-test.bixly.com/messages/${id}/`,
        headers: {
            Authorization: `Token ${token}`
        },
        data: {}
    })
    return message;
}

export async function sendMsg(content) {
    const r = content.receiver
    const t = content.title
    const b = content.body
    const result = await axios({
        method:'post',
        url:'https://messaging-test.bixly.com/messages/',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "title": {t}.t,
            "body": {b}.b,
            "receiver": {r}.r
        }
    
    })
    return result;
}
