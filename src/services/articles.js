import axios from 'axios'
const baseUrl = process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/articles`, {
    withCredentials: true,
  })
  return response.data.articles
}

const create =  async (article) => {
  const response = await axios(`${baseUrl}/articles`, {
    method: "POST",
    data: { article },
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
  console.log(article)
  return response.data
}
const articleService = { getAll, create }
export default articleService