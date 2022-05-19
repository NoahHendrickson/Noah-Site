import React from 'react'
import Navbar from "./Navbar"
import "./FullStory.css"
import { ReactComponent as DownCarat } from "./Assets/downCarat-18.svg"

const FullStory = () => {
  return (
    <div className='FullStoryPage'>
      <Navbar />
      <div className='story__grid'>
        <div>
          <h1 className='story__timeline'>Went to College for Graphic Design</h1>
          <DownCarat className='downCarat' />
       </div>
        <div className='span__6'>
          <h1 className='story__grid--title'>currently buidling this page!! its pretty harding to 1. not sound narcisstic and 2. make this stuff interesting so ppl want to read it 😬</h1>
        </div>
        <div className='span__2'>
          <h1 className='story__grid--title'>Building</h1>
          <p className='story__grid--text'>From a very young age I was obsessed with building things. I loved Legos, Duplos, Bionicles and many other building/architectirl toys. As I look back on those years with a bit more wisdom on myself I realized I liked those toys but loved the feeling of building or creating my own original ideas. To this day I feel fulfilled and proud of building and creating beautiful products, designs and experiences.</p>
        </div>
        <div>
          <h1 className='story__timeline'>Graduate and get a random job at amazon in July 2019</h1>
          <DownCarat className='downCarat' />
       </div>
        <div>
          <h1 className='story__timeline'>Get promoted 3 times in 10 months and become an Area Manager</h1>
          <DownCarat className='downCarat' />
       </div>
        <div className='span__2'>
          <h1 className='story__grid--title'>Competing</h1>
          <p className='story__grid--text'>"You need to hate losing more than you love winning" is one of the more memorable quotes from my tennis coach.</p>
        </div>
        <div>
          <h1 className='story__timeline'>Get promoted again 1 year later (2021)</h1>
          <DownCarat className='downCarat' />
       </div>
        <div>
          <h1 className='story__timeline'>Fully regained my confidence and decided to pursue a new career</h1>
          <DownCarat className='downCarat' />

       </div>
        <div className='span__2'>
          <h1 className='story__grid--title'>Creating</h1>
        </div>
        <div>
          <h1 className='story__timeline'>Loving UX Design and learning to Code</h1>
          <DownCarat className='downCarat' />
       </div>
      </div>
    </div>
  )
}

export default FullStory