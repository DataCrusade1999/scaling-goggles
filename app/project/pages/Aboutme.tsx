import React from "react"
import Image from "next/image"
//https://www.w3schools.com/w3css/img_lights.jpg
import photo from "../../../public/MyPhoto.jpg"

export const About: React.FC = (): JSX.Element => {
  return (
    <>
      <div>
        <h1 className="m-3 p-3 animate-bounce w-96 pl-5 text-4xl">About</h1>
      </div>

      <div className="flex flex-row">
        <div className="w-3/4">
          <p className="m-3 p-5 text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className="flex justify-end w-1/4 m-3 p-5">
          <div className="overflow-hidden">
            <Image src={photo} alt="" height={350} width={300} />
          </div>
        </div>
      </div>
    </>
  )
}
export default About
