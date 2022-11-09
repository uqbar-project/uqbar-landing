const BIN_ID = "5f455fdc4d8ce41113809ad1"
const API_URL = `https://api.jsonbin.io/b/${BIN_ID}`
const SECRET_BADGE_KEY = "$2b$10$Q.HTJz84aOJcSRn55Toiqeto2Rd1Kp4xx3LC3cUbR6xxpjvTdyrs6"

const headers = [
  ["content-type", "application/json"],
  ["secret-key", SECRET_BADGE_KEY],
  ["versioning", "false"]
]

export default {
  get: () => fetch(API_URL, { headers }).then(response => response.json()).catch(e => console.error(e)),
  update: (newData) => fetch(API_URL, {
    headers,
    method: "PUT",
    body: JSON.stringify(newData)
  })
}