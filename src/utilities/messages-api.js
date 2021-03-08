import axios from "axios";
const token = localStorage.getItem("token");
const BASE_URL = "https://messaging-test.bixly.com";

export async function getMessages() {
  const messages = await axios({
    method: "get",
    url: `${BASE_URL}/messages/`,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
  });
  return messages;
}

export async function getSentMessages() {
  const sentMessages = await axios({
    method: "get",
    url: `${BASE_URL}/messages/sent/`,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
  });
  return sentMessages;
}

export async function getDetails(id) {
  const message = await axios({
    method: "get",
    url: `${BASE_URL}/messages/${id}/`,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
  });
  return message;
}

export async function deleteMsg(id) {
  const message = await axios({
    method: "delete",
    url: `${BASE_URL}/messages/${id}/`,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {},
  });
  return message;
}

export async function sendMsg(content) {
  const r = content.receiver;
  const t = content.title;
  const b = content.body;
  const result = await axios({
    method: "post",
    url: `${BASE_URL}/messages/`,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      title: { t }.t,
      body: { b }.b,
      receiver: { r }.r,
    },
  });
  return result;
}
