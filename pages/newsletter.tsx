import { fetchAPI } from "lib/api"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

const Newsletter = ({ issuesSent }) => {
  return (
    <>
      <div className="w-650 container">
        <Head>
          <title>Ashutosh Pandey | Newsletter</title>
        </Head>

        <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/newsletter</h1>

        <ul>
          {issuesSent.map((issue) => (
            <li key={issue.id}>
              <Link href={`/newsletter/${issue.id}`}>
                <a>
                  <p className="pt-[36px] text-blog-list-title">{issue.title}</p>
                </a>
              </Link>
              <p className="pt-[10px] pb-[10px] text-[20px] text-justify">
                {issue.description.replace(/(<([^>]+)>)/gi, "")}
              </p>
              <Moment className="pt-[10px] pb-[10px] text-[18px]" format="MMM Do YYYY">
                {issue.sent_at}
              </Moment>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Newsletter

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
  const res = await fetch("http://localhost:8010/proxy/v2/issues", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${API_KEY}`,
    },
  })
  const issuesSent = await res.json()
  return {
    props: {
      issuesSent,
    },
    revalidate: 1,
  }
}
