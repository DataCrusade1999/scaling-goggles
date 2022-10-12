import React from "react"
import { BlitzPage } from "@blitzjs/next"
import { BlueGithubIcon, BlueTwitterIcon, DiscordIcon, LinkedIn, RedditIcon } from "public/logo"
import { PersonalList } from "app/core/components/PersonalList"
import Head from "next/head"

const About: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Ashutosh Pandey | About</title>
      </Head>
      <h1 className="text-7xl text-center pt-[20px] pb-[20px] font-bold">/about</h1>
      <div className="w-650 container">
        <h2 className="text-[2rem] text-[#5b34da] pt-[36px] font-bold">Hello there!</h2>
        <div className="text-[18px] text-justify">
          <p className="pt-[10px] pb-[10px]">
            I&#39;m Ashutosh Pandey, thanks for checking out my website!
          </p>
          <p className="pt-[10px] pb-[10px]">
            I&#39;m currently a front-end engineer at Remote. I enjoy working on React and all
            things JavaScript/TypeScript and am a big believer in the functional programming
            paradigm — lately, I&#39;ve been interested in learning Elixir.
          </p>
          <p className="pt-[10px] pb-[10px]">
            I&#39;m a self-taught developer with a degree in Metallurgy and Materials from NIT
            Warangal (psst, my alma mater&#39;s was the first big website I worked on!). I&#39;ve
            been fascinated by computers and the internet from around 8th grade when I used Google
            for the first time.
          </p>
          <p className="pt-[10px] pb-[10px]">
            In the past, I&#39;ve worked extensively with Python and the Google Cloud Platform, and
            been responsible for python and UI rewrites. I&#39;ve continued working with React and
            TypeScript since then and love the experiece, along with a bunch of other tooling — I
            firmly believe in developer tooling which allows one to become a 1.1x developer . 😉
          </p>
          <p className="pt-[10px] pb-[10px]">
            Outside of the world of programming, I am also a quizzer and was the lead at my
            college&#39;s Quiz Club. Having played a lot of CS in my childhood and college, I also
            love following the CS:GO esports scene. I enjoy using mechanical keyboards and lurk r/mk
            pretty much daily. I enjoy just about all genres of music and podcasts and am always
            looking for more ways to consume information from around the world.
          </p>
          <p className="pt-[10px] pb-[10px]">You can check me out on the following platforms:</p>
          <div className="pt-[10px] pb-[10px] flex flex-row justify-center space-x-4">
            <a>
              <BlueGithubIcon />
            </a>
            <a>
              <BlueTwitterIcon />
            </a>
            <a>
              <LinkedIn />
            </a>
            <a href="">
              <RedditIcon />
            </a>
            <a href="">
              <DiscordIcon />
            </a>
            <a href=""></a>
          </div>
          <p className="pt-[10px] pb-[10px]">
            If you&#39;re interested, you can take a look at my resume — and if you&#39;re intrigued
            still, thanks! You can reach out to me at Ashutosh at [
            <code className="bg-[#dcdcdc]">window.location.hostname</code>].
          </p>
          <p className="pt-[10px] pb-[10px]">Here&#39;s a list of pages that curate my website:</p>
          <PersonalList />
        </div>
      </div>
    </>
  )
}
export default About
