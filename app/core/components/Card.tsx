import React from "react"
import Link from "next/link"
import NextImage from "./Image"

const Card = ({ article }) => {
  return (
    <>
      <div>
        <NextImage image={article.attributes.image} />
      </div>
      <p id="category" className="text-[20px]">
        {article.attributes.category.data.attributes.name.toUpperCase()}
      </p>
      <Link href={`/blogs/${article.attributes.slug}`}>
        <a>
          <div>
            <div>
              <p id="title" className="text-blog-list-title">
                {article.attributes.title}
              </p>
            </div>
          </div>
        </a>
      </Link>
      <p id="description" className="text-[20px] text-justify">
        {article.attributes.description}
      </p>
      <canvas width={40} height={40} hidden></canvas>
    </>
  )
}

export default Card
