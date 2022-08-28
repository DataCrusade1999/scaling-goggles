import React from "react"
import Image from "next/image"
import photo from "../../../public/MyPhoto.jpg"
export const Projects: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="m-3 p-3">
        <h1 className="text-4xl">Projects</h1>
        <div className="pt-5 flex flex-row">
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full h-96 md:h-auto md:w-48"
              src={photo}
              alt=""
              width={250}
              height={250}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects
