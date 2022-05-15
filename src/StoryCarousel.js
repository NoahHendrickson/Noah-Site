import React from 'react'
import NoahPFP from './NoahPFP'
import html from "./Assets/html-1.svg"
import css from "./Assets/css-3.svg"
import java from "./Assets/logo-javascript.svg"
import react from "./Assets/react-2.svg"
import "./StoryCarousel.css"

const StoryCarousel = () => {
  return (
    <div className='storyCarousel'>
      <NoahPFP css={css} java={java} react={react} html={html} Title="Developer" Text="I began my coding journey in January 2022. I am mostly self taught and have learned by doing. I have always loved building and learning and found coding to be a great combination. I am currently working to become a Front End App Developer but ultimately aspire to be a Full Stack App Developer." />
      <div className='NoahHeadShot'></div>
      <NoahPFP Title="Designer" Text="I've been designing alot longer than I've been developing. I graduated with a BA in Advertising and Graphic Design in 2019 but I had trouble finding passion and drive in just design. For that reason I did not dive into that career path. I took a couple years and have found my passion again. I love to design and build. I have found a ton of love for UX Design in the past year."/>
    </div>
  )
}

export default StoryCarousel