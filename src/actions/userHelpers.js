import axios from "axios";

// //return user object and logged_in
export async function isLoggedIn() {
  return await axios.get(
    `${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/logged_in`,
    {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
}

// returns current_user object and no logged_in
export async function getUser() {
  return await axios.get(
    `${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/current_user`,
    {
      method: "GET",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
}

export async function registerUser(credentials) {
  return await axios(`${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/users`, {
    method: "POST",
    data: { user: credentials },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => console.log("Success:", response))
    .catch(error => console.error("Error:", error));
}

export async function loginUser(credentials) {
  return await axios(
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
}

export async function logoutUser() {
  return await axios(
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
}
