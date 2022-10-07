import { fetchAPI } from "lib/api"
import Link from "next/link"
import React from "react"
import Head from "next/head"
import Arrow from "public/arrow"

const Categories = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Ashutosh Pandey | Categories</title>
      </Head>
      <div className="w-650 container">
        <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/categories</h1>
        <p className="text-list-heading pt-[20px]">Blogs by categories</p>
        <p className="pb-[20px]">Read Blogs by category</p>
        <ul>
          {categories.map((category) => {
            return (
              <li className="flex flex-row text-[18px] pt-[10px] pb-[10px]" key={category.id}>
                <Arrow />
                <Link href={`/categories/${category.attributes.slug}`}>
                  <a className="pl-[10px] text-[#5b34da] hover:underline">
                    {category.attributes.name}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Categories

export async function getStaticProps() {
  // Run API calls in parallel
  const categoriesRes = await fetchAPI("/categories", { populate: "*" })

  return {
    props: {
      categories: categoriesRes.data,
    },
    revalidate: 1,
  }
}
