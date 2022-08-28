import React from "react"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
export const NavBar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="m-3 p-3 flex flex-row">
        <div className="flex flex-row space-x-2 w-1/2">
          <div>
            <Link href={Routes.Home()}>
              <a className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Home</span>
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Blogs</span>
            </a>
          </div>
        </div>
        <div className="flex justify-end flex-row space-x-2 w-1/2">
          <div>
            <Link href={Routes.LoginPage()}>
              <a className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Login</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href={Routes.SignupPage()}>
              <a className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Sign-Up</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
