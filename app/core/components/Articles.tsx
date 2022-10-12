import React from "react"
import Card from "./Card"

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);
  return (
    <>
      <div className="w-650 conatiner">
        <div>
          {articles.map((article, i) => {
            return <Card article={article} key={`article__left__${article.attributes.slug}`} />
          })}
        </div>
      </div>
    </>
  )
}

export default Articles
