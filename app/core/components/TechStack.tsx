import Arrow from "public/arrow"
import React from "react"
// import ReactMarkdown from "react-markdown"

const TechStack: React.FC = (): JSX.Element => {
  return (
    <>
      <p className="text-[18px] pb-3 pt-3">
        Here&#39;s a couple of other things that I love working with:
      </p>
      <ul>
        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://reactjs.org/"
              >
                React:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>

        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://nextjs.org/"
              >
                Next.js:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>

        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://blitzjs.com/"
              >
                Blitz.js:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>

        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://www.typescriptlang.org/"
              >
                Typescript:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>

        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://tailwindcss.com/"
              >
                Tailwind:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>
      </ul>
      <p className="text-[18px] pt-[10px] pb-[10px]">
        and a couple of techs that I&#39;ve been keeping an eye out for:
      </p>
      <ul>
        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://formik.org/"
              >
                Formik:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>

        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://redwoodjs.com/"
              >
                Redwood:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>
        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://supabase.com/"
              >
                Supabase:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>
        <li className="pt-[10px] pb-[10px] text-[18px]">
          <div className="flex flex-row">
            <Arrow />
            <span className="pl-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-[#5b34da] hover:underline"
                href="https://kubernetes.io/"
              >
                Kubernetes:
              </a>{" "}
              can&#39;t believe I put off working on NextJS for so long; it is an absolute delight!
            </span>
          </div>
        </li>
      </ul>
    </>
  )
}

export default TechStack
