import { BlitzPage } from "@blitzjs/next"
import { PersonalList } from "app/core/components/PersonalList"
import Head from "next/head"
import React from "react"

const Uses: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Ashutosh Pandey | Uses</title>
      </Head>
      <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/uses</h1>
      <div className="w-650 container">
        <h2 className="text-list-heading text-[#5b34da] pt-[36px] font-bold">Equipment</h2>
        <PersonalList />
        <h2 className="text-list-heading text-[#5b34da] pt-[36px] font-bold">Equipment</h2>
        <PersonalList />
        <h2 className="text-list-heading text-[#5b34da] pt-[36px] font-bold">Equipment</h2>
        <PersonalList />
        <h2 className="text-list-heading text-[#5b34da] pt-[36px] font-bold">Equipment</h2>
        <PersonalList />
      </div>
    </>
  )
}

export default Uses
