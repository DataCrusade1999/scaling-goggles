import { fetchAPI } from "lib/api"
import { GetStaticProps } from "next"
import React from "react"

const Docmentaries = ({ docmentaries }) => {
  //console.log(docmentaries);
  return (
    <div className="w-650 container">
      <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/documentaries</h1>
      <p className="pt-[10px] pb-[10px] text-[18px]">
        Here&#39;s the podcasts that I listen to, in a rough order of preference:
      </p>
      <ul>
        {docmentaries.map((documentary) => (
          <li key={documentary.id}>
            <h2 className="pt-[36px] text-[36px] font-bold">{documentary.attributes.title}</h2>
            <p className="prose pt-[10px] pb-[10px] text-[18px]">
              {documentary.attributes.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Docmentaries

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchAPI("/documentries")
  return {
    props: {
      docmentaries: res.data,
    },
  }
}
