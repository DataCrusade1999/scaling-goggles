import Head from "next/head"
import React from "react"
import Articles from "app/core/components/Articles"
//import Seo from "app/core/components/Seo";
import { fetchAPI } from "../lib/api"

const Blogs = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Ashutosh Pandey | Blogs</title>
      </Head>
      <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/blogs</h1>
      <canvas width={40} height={40} hidden></canvas>
      <div className="w-[650px] container">
        <Articles articles={articles} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/articles", { populate: ["image", "category"] })

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  }
}

export default Blogs
