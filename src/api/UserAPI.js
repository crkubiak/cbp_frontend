const login = (credentialsObject) => {
  return fetch('http://localhost:3001/api/users/login?include=user', 
  {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  })
}

export default {
  login: login
}