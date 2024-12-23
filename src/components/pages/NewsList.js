import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function NewsList({category}) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = 'c46ac2ca763445b7890477ecaebeae99';

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`
                )
                setArticles(response.data.articles);
            } catch (error) {
                console.log(error);   
            }
            setLoading(false);
        }
        fetchNews();
    }, [category])


    if(loading) return <p>Loading...</p>

    if(articles.length === 0) return <p>No Articles Available for this category!</p>

  return (
    <div style={{marginTop: "20px"}}>
        {
            articles.map((article) => <NewsItem key={article.id} article={article} />)
        }
    </div>
  )
}

export default NewsList