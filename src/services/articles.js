import axios from 'axios'
const baseUrl = process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/articles`, {
    withCredentials: true,
  })

  return response.data.articles
}

export default { getAll }