import React from "react"
import TechStack from "./TechStack"

export const Introduction: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className="font-bold text-[2.5rem] text-center h-24 pt-5 pb-5">
        Hey, I&#39;m Ashutosh Pandey!
        <span role="img" aria-label="wave">
          👋
        </span>
      </h1>
      <div className="p-3">
        <div className="text-[18px] text-justify pt-[10px] pb-[10px]">
          <p className="pt-[10px] pb-[10px]">
            I&#39;m a developer from India in love with all things React. I&#39;ve also worked with
            different languages like Python, JavaScript, Elixir, TypeScript and C++, as well as
            Node, Django and Redux.
          </p>
          <p className="pt-[10px] pb-[10px]">
            I&#39;m currently a front-end engineer at Remote who loves working with{" "}
            <span className="font-bold text-[#5b34da]">
              React <span className="font-extrabold text-[#5b34da]"> + </span>TypeScript.
            </span>
          </p>
        </div>
      </div>

      <TechStack />

      <div className="pt-5 text-[18px]">
        <span>I also</span>{" "}
        <span role="img" aria-label="heart">
          🖤
        </span>{" "}
        <span>a lot of other things, in no particular order:</span>
        <div className="pt-3">
          <p className="text-[18px]">
            CSGO, Reddit, Mechanical Keyboards, Open Source, GitHub, Factorio, Tactile Switches,
            Batman and the Internet!
          </p>
        </div>
      </div>
    </>
  )
}
