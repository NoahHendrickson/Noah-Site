import React, { useEffect } from 'react'
import leaf from "../Assets/Leaf-06.svg"
import { motion, useAnimation, transform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const LeavesAnimation = () => {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 1 })
  
  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView]);

  const variants2 = {
    visible: {
      x: 0,
      opacity: 1,
    },
    
    hidden: {
      x: "100%",
      opacity: 0,
    },
  }

  useEffect(() => {
    const container = document.querySelector(".LeavesHolder");
    const leaf = document.querySelector(".leaf")

    for (let i = 0; i < 32; i++) {
      const clone = leaf.cloneNode(true)

      const layer =
        i > 24 ? .5 + (i - 25) :
        i > 16 ? 0 + (i - 17) :
        i > 7 ? .5 + (i - 9) :
        i + 1;
      
      const layer2 =
        i > 24 ? -300 :
        i > 16 ? -200 :
        i > 7 ? -100 : 0;
      
      const offset = layer % 8 ? 200 : 0;
      const number = i % 8;
      const delay = i * 200
      const random = Math.floor(Math.random() * 1000)

      const transforms = [
        `translateY(${140 * layer}px)`,
        `translateX(${layer2}px)`,
      ];

      clone.style.zIndex = 100 - i;
      clone.style.transform = transforms.join(" ");
      clone.firstElementChild.style.animationDelay = `${random}ms`

      container.appendChild(clone)


    }

    window.addEventListener('scroll', myFunction)
  
    function myFunction() {
      console.log('hey')
      const thing = document.querySelectorAll(".leafimg")
      thing.classList.add("leafscroll")
    }
  }, [])

  return (
    <div className='LeavesHolder'>
      <div className='leaf'>
        <img className="leafimg" src={leaf} />
      </div>
    </div>
  )
}

export default LeavesAnimation