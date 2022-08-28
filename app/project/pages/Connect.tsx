import React from "react"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { ConnectWithMe } from "app/auth/validations"
import LabeledTextField from "app/core/components/LabeledTextField"

export const Connect: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="p-3 m-3">
        <h1 className="text-4xl">Connect With Me</h1>
        <Form
          submitText="Send"
          schema={ConnectWithMe}
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={async (values) => {
            console.log(values)
          }}
        >
          <LabeledTextField className="text-black" name="name" label="Name" placeholder="Name" />
          <LabeledTextField className="text-black" name="email" label="Email" placeholder="Email" />
          <LabeledTextField
            className="text-black"
            name="message"
            label="Message"
            placeholder="Message"
          />
        </Form>
      </div>
    </>
  )
}
