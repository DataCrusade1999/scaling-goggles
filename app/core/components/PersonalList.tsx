import { Routes } from "@blitzjs/next"
import Link from "next/link"
import Arrow from "public/arrow"
import React from "react"

export const PersonalList: React.FC = (): JSX.Element => {
  return (
    <>
      <ul className="text-[18px]">
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                /Uses
              </a>{" "}
              a list of (almost) everything that I use
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                Karma
              </a>{" "}
              a list of (almost) everything that I use
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                Keebs
              </a>{" "}
              that I own — I love mechanical keyboards 😄
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <Link href={Routes.Podcast()}>
                <a className="text-[#5b34da] hover:underline">Podcasts</a>
              </Link>{" "}
              that I listen to
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                Documentaries
              </a>{" "}
              that I have watched
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                Tooling
              </a>{" "}
              that I am always excited to use
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                Fancy Pants
              </a>{" "}
              if you&#39;re looking for, well, something a little more fancy
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                FAQ
              </a>{" "}
              in case the question you have is already answered
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-row pt-2 pb-2">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                /Uses
              </a>{" "}
              for the people who&#39;ve helped and inspired me to make this website
            </span>
          </div>
        </li>
      </ul>
    </>
  )
}
