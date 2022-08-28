import React from "react"
import ReactMarkdown from "react-markdown"

export const TechStack: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="m-3 p-3">
        <h1 className="text-4xl text-center animate-bounce p-3">Technologies That I use</h1>

        <div className="flex justify-center flex-row space-x-2">
          <ReactMarkdown className="p-5">
            [![My
            Skills](https://skillicons.dev/icons?i=html,css,docker,react,nextjs,bash,js,linux,python,tensorflow,pytorch,django,git,vim)](https://skillicons.dev)
          </ReactMarkdown>
        </div>
        <p className="text-2xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </>
  )
}

export default TechStack
