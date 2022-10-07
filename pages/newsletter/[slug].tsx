import React from "react"
import Moment from "react-moment"

const NewsletterContent = ({ newsletter }) => {
  return (
    <>
      <canvas height={70} width={70} hidden={true}></canvas>
      <div className="w-650 container">
        <h1 className="text-blog-title">{newsletter.title}</h1>
        <div className="pt-[10px] pb-[10px]">
          <Moment className="text-[18px] pt-[10px] pb-[10px]" format="MMM Do YYYY">
            {newsletter.sent_at}
          </Moment>
          <p className="text-justify text-[18px] pt-[10px] pb-[10px] ">
            {newsletter.html.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const API_KEY = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
  const allIssues = await fetch(`http://localhost:8010/proxy/v2/issues`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${API_KEY}`,
    },
  })
  const issues = await allIssues.json()

  return {
    paths: issues.map((issue) => ({
      params: {
        slug: String(issue.id),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const API_KEY = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
  const res = await fetch(`http://localhost:8010/proxy/v2/issues/${params.slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${API_KEY}`,
    },
  })
  const newsletterRes = await res.json()
  return {
    props: { newsletter: newsletterRes.issue[0] },
    revalidate: 1,
  }
}

export default NewsletterContent
