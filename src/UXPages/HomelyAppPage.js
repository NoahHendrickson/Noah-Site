import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import "./HomelyAppPage.css"
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import { useInView } from 'react-intersection-observer'
import FooterNav from '../FooterNav'
import Homely1 from "../Assets/NewHomely/Homely1-01-01.svg"
import Homely2 from "../Assets/NewHomely/Homely-02.svg"
import Homely3 from "../Assets/NewHomely/Homely-03.svg"
import Homely4 from "../Assets/NewHomely/Homely-04.svg"
import Homely5 from "../Assets/NewHomely/Homely-05.svg"
import Homely6 from "../Assets/HomelyApp/homelyNew-02.svg"
import Homely7 from "../Assets/NewHomely/HomelyWorkFlow.png"

const HomelyAppPage = () => {


  return (
    <motion.div className='HomelyPage'
    >
      <Navbar />
      <ProjectTitle page="projectText__padded" role="Principal Designer & Junior Developer" title="Homely App" subtitle="UX Design & App Development" text="Homely is property and tenant management software designed to streamline communication between the office and tenants." />
      <div>
        <img className="FirstImage" src={Homely1} />
        <div className='HomelyProcess'>
          <div className='TheJourney'>
            <h1 className='JourneyTitle'>
            The Journey
            </h1>
              <h2 className='JourneyText'>It began with writing down    all the features we wanted to include and marking their priority. We decided the chat and service ticket features were the highest priority and started as the main focus.</h2>
              <h2 className='JourneyText'> I took those high priority features and made wireframes and concepts on the general shaping and vibe of the experience.
              </h2> 
              <h2 className='JourneyText'> This part of the process undergoes a lot of transformation and iteration trying to nail down the finalized look and style of the UI. The inspiration for the design was to be clean, lively and modern.</h2>
          </div>
          <div className='ProcessImages'>
            <img className="HomelyImage" src={Homely2} />
            <img className="HomelyImage" src={Homely3} />
          </div>
        </div>
        <div className='ProcessImages--full'>
          <img className="HomelyImage HomelyImageSmaller" src={Homely4} />
          <img className="HomelyImage HomelyImageSmaller" src={Homely5} />
        </div>
        <h1 className='JourneyTitle2'>When building the user paths I structured the file and screens by feature to help with the design to development process</h1>
        <img className="HomelySlideImage" src={Homely7} />
        <img className="HomelyImage" src={Homely6} />
      </div>
      <FooterNav />
    </motion.div>
  )
}

export default HomelyAppPage