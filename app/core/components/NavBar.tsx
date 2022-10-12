import React from "react"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import { Github, Twitter, RSSFeed, Home } from "public/logo"

export const NavBar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className="m-auto p-4 sticky top-0 text-[18px] flex space-x-4 justify-center flex-row bg-white z-10">
        <Link href={Routes.Home()}>
          <a>
            <Home />
          </a>
        </Link>
        <canvas width="100" height="30" hidden={true}></canvas>
        <Link href={Routes.About()} as="/about-me">
          <a className="hover:underline hover:text-[#5b34da]">about</a>
        </Link>
        <Link href={Routes.Blogs()} as="/blogs">
          <a className="hover:underline hover:text-[#5b34da]">blogs</a>
        </Link>
        <Link href={Routes.Newsletter()}>
          <a className="hover:underline hover:text-[#5b34da]">newsletter</a>
        </Link>
        <Link href={Routes.Categories()}>
          <a className="hover:underline hover:text-[#5b34da]">categories</a>
        </Link>

        <Link href={Routes.Uses()} as="/uses">
          <a className="hover:underline hover:text-[#5b34da]">uses</a>
        </Link>
        <a target="_blank" href="https://github.com/DataCrusade1999" rel="noreferrer">
          <Github />
        </a>
        <a target="_blank" href="https://twitter.com/DataCrusade1999" rel="noreferrer">
          <Twitter />
        </a>
        <a target="_blank" href="" rel="noreferrer">
          <RSSFeed />
        </a>
      </nav>
    </>
  )
}

export default NavBar
