function userAuth() {
  event.preventDefault()
  document.getElementById('user-auth').style.display = "none"
  // if login button clicked, log in form displays
  if (event.target.innerText === "Log In") {
    document.querySelector('#user-form').innerHTML = `<form id="login" onsubmit="handleLogin()">
      <input type="text" placeholder="Username" id="userLog">
      <input type="text" placeholder="Email" id="emailLog">
      <input type="submit" value="Log In">
    </form>`
  }
  // if sign up button clicked, sign up form displays
  else {
    document.querySelector('#user-form').innerHTML = `<form id="signup" onsubmit="handleSignup()">
      <input type="text" placeholder="Username" id="username">
      <input type="text" placeholder="Email" id="email">
      <input type="submit" value="Sign Up">
    </form>`
  }
}

// sends to users controller
function handleLogin() {
  event.preventDefault()
  let userLog = {
    username: document.getElementById('userLog').value,
    email: document.getElementById('emailLog').value
  }
  fetch('http://localhost:3000/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(userLog)
  })
  .then(resp => resp.json())
  .then(obj => console.log(obj))
}

// Sends to sessions controller
function handleSignup() {
  event.preventDefault()

  let userSign = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
  }
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(userSign)
  })
  .catch( err => {
    console.log(err)})
}