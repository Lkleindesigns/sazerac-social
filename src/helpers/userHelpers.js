export const getUser = async () => {
  let response = await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/current_user", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then(data => (data))
    .catch(err => console.log(err));
  if(response.current_user) {
    return response.current_user
  } else {
    console.log('wrong', response)
  }
};

export const logoutUser = async () => {
  let response = await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/sessions", {
    method: "DELETE",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then(data => (data))
    .catch(err => console.log(err));
    return response
};
