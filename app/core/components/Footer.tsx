import React from "react"

export const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <canvas width={60} height={60} hidden></canvas>
      <div className="w-607 container p-[25px]">
        <footer>
          <span>
            Made with{" "}
            <a
              target="_blank"
              href="https://nextjs.org/"
              className="text-[#5b34da] hover:underline"
              rel="noreferrer"
            >
              Next.js
            </a>
          </span>{" "}
          <span>•</span>{" "}
          <span>
            View source on{" "}
            <a
              target="_blank"
              href="https://github.com/DataCrusade1999"
              className="text-[#5b34da] hover:underline"
              rel="noreferrer"
            >
              Github
            </a>
          </span>{" "}
          <span>•</span>{" "}
          <span>
            Find me on{" "}
            <a
              target="_blank"
              href="https://twitter.com/DataCrusade1999"
              className="text-[#5b34da] hover:underline"
              rel="noreferrer"
            >
              Twitter
            </a>
          </span>
        </footer>
      </div>
    </>
  )
}
