import React, { createContext, useState, useEffect, useMemo, useContext} from 'react'
import axios from 'axios'

export const ArticleContext = createContext(null)

const initialArticleData = []

const ArticleProvider = (props) => {
  const [articles, setArticles] = useState(initialArticleData)

  useEffect(() => {

    async function getArticles() {
      const currentArticles = await axios.get(`${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/articles`, {
          withCredentials: true,
        })

      if(currentArticles.data.articles) {
        setArticles(currentArticles.data.articles)
      }
    }
    console.log('leak?')
    getArticles()
  }, [])


  const articleData = useMemo(() => ([...articles]), [articles])

  return <ArticleContext.Provider value={articleData} {...props} />
}

export const useArticleContext = () => useContext(ArticleContext)

export default ArticleProvider
