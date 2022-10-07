import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Newsletter } from "../components/Newsletter"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "serious-effort"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      {children}
      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout
