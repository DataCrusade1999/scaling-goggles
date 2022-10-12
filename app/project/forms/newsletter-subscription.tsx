import { Form } from "app/core/components/Form"
import React, { useState } from "react"
import { Email } from "app/auth/validations"
import { LabeledTextField } from "app/core/components/LabeledTextField"

const NewsletterForm: React.FC = (): JSX.Element => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSubscribed, setisSubscribed] = useState(false)

  return (
    <Form
      className="w-[316px] h-[124.4px] m-5"
      submitText="Subscribe"
      schema={Email}
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        const API_KEY = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
        const response = await fetch(`https://www.getrevue.co/api/v2/subscribers`, {
          method: "POST",
          headers: {
            Authorization: `Token ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email, double_opt_in: false }),
        })
        if (response.status === 200) {
          setSuccess("Thanks for subscribing! 🤩🎉")
        } else if (response.status === 400) {
          setisSubscribed(true)
        } else {
          setError("Something went wrong, please try again later!")
        }
      }}
    >
      <LabeledTextField
        className="w-[316px] h-[42.4px] focus:outline-[#5b34da]"
        name="email"
        label="Email"
        placeholder="ashutosh@gmail.com"
      />
      {success ? (
        <span className="flex items-center text-sm font-bold text-green-700">{success}</span>
      ) : (
        <span className="flex items-center text-sm font-bold text-red-800">{error}</span>
      )}
      {isSubscribed && (
        <span className="flex items-center text-sm font-bold text-red-800">
          You are already subscribed to our newsletter!🤩🎉
        </span>
      )}
    </Form>
  )
}
export default NewsletterForm
