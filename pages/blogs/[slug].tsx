/* eslint-disable @next/next/no-img-element */
import Moment from "react-moment"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import { GetStaticPaths, GetStaticProps } from "next"

const Article = ({ article }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  return (
    <>
      <canvas height={70} width={70} hidden></canvas>
      <div className="w-650 container">
        <div>
          <h1 className="text-blog-title pb-[20px]">{article.attributes.title}</h1>
          <div className="flex space-x-4">
            <div>
              {article.attributes.author.data.attributes.picture && (
                <img
                  src={getStrapiMedia(article.attributes.author.data.attributes.picture)}
                  alt={
                    article.attributes.author.data.attributes.picture.data.attributes
                      .alternativeText
                  }
                  style={{
                    position: "static",
                    borderRadius: "10%",
                    height: 60,
                  }}
                />
              )}
            </div>
            <div>
              <p>By {article.attributes.author.data.attributes.name}</p>
              <p>
                <Moment format="MMM Do YYYY">{article.attributes.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
        <div className="pb-[20px] pt-[20px]">
          <Image src={imageUrl} alt="" width={650} height={400} />
        </div>
        <div className="text-justify">
          <ReactMarkdown className="text-[18px] prose">{article.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params?.slug,
    },
    populate: ["image", "category", "author.picture"],
  })
  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  }
}

export default Article
