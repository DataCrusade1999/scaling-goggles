import Articles from "app/core/components/Articles"
import { GetStaticPaths, GetStaticProps } from "next"

import { fetchAPI } from "../../lib/api"

const Category = ({ category }) => {
  return (
    <>
      <canvas width={100} height={100} hidden></canvas>
      <div className="w-650 container">
        <div>
          <h1 className="pb-[20px] text-[18px]">Category Name: {category.attributes.name}</h1>
          <Articles articles={category.attributes.articles.data} />
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params?.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  })
  const allCategories = await fetchAPI("/categories")

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  }
}

export default Category
