import React from "react"
import NewsletterForm from "../../project/forms/newsletter-subscription"

export const Newsletter: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="w-650 h-80 container">
        <h1 className="pt-[100px] text-[36px] font-bold">Sign up for my newsletter!</h1>
        <div className="flex flex-row space-x-16">
          <div className="flex flex-col">
            <div className="w-80">
              <p className="pt-5 text-justify">
                I curate links keeping up with the JavaScript, React and webdev world. Join 222
                others! May include Mechanical Keyboards.
              </p>
              <p className="pt-5 text-justify">
                No spam, unsubscribe anytime :) You can also view previous issues, and subscribe via
                RSS!
              </p>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </>
  )
}
