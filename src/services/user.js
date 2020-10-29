import axios from "axios";

async function login(credentials) {
  const response = await axios(
    `${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/sessions`,
    {
      method: "POST",
      data: credentials,
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
  return response
}

// returns current_user object and no logged_in
async function getUser() {
  const response = await axios.get(`${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/current_user`, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  return response.data
}


async function logout() {
  const response = await axios(
    `${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/sessions`,
    {
      method: "DELETE",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
  return response.data
}

async function register(credentials) {
  const response = await axios(`${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/users`, {
    method: "POST",
    data: { user: credentials },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  return response.data
}


// //return user object and logged_in
async function isLoggedIn() {
  const response = await axios.get(
    `${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/logged_in`,
    {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
  return response.data
}



export default { login, logout, isLoggedIn, getUser, register  }