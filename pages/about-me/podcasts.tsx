import { fetchAPI } from "lib/api"
import { GetStaticProps } from "next"
import ReactMarkdown from "react-markdown"

const Podcast = ({ podcasts }) => {
  return (
    <>
      <div className="w-650 container">
        <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/podcasts</h1>
        <p className="pt-[10px] pb-[10px] text-[18px]">
          Here&#39;s the podcasts that I listen to, in a rough order of preference:
        </p>
        <ul>
          {podcasts.map((podcast) => (
            <li key={podcast.id}>
              <ReactMarkdown className="pt-[36px] text-[36px] font-bold">
                {podcast.attributes.title}
              </ReactMarkdown>
              <ReactMarkdown className="prose pt-[10px] pb-[10px] text-[18px]">
                {podcast.attributes.description}
              </ReactMarkdown>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Podcast

export const getStaticProps: GetStaticProps = async () => {
  const podcastRes = await fetchAPI("/podcasts")
  return {
    props: {
      podcasts: podcastRes.data,
    },
    revalidate: 1,
  }
}
