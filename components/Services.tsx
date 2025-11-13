"use client"

import Title from "./ui/Title"
import Image from "next/image"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Services = () => {


gsap.registerPlugin(ScrollTrigger)

useEffect(() => {
  const frames = gsap.utils.toArray(".car-frame")

  gsap.set(frames, { autoAlpha: 0 })
  gsap.set(frames[0], { autoAlpha: 1 })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
    }
  })

  frames.forEach((frame, i) => {
    if (i === 0) return
    tl.to(frames[i - 1], { autoAlpha: 0, duration: 1 }, ">")
      .to(frames[i], { autoAlpha: 1, duration: 1 }, "<")
  })

}, [])



  return (
    <div className="container sections" id="services">
      <Title title="Services" />

      <ul className="nav-services responsive relative w-full h-[70vh] my-20 mb-60 overflow-visible">
        

        <li className="absolute inset-0 flex justify-center items-center car-frame" data-step="dirty">
          <Image
            src="/images/911-dirty.png"
            width={2000}
            height={1000}
            alt="911-dirty"
            className="car-image w-auto h-[35vh]"
          />
        </li>


        <li className="absolute inset-0 flex justify-center items-center car-frame" data-step="clean">
          <Image
            src="/images/911-clean.png"
            width={2000}
            height={1000}
            alt="911-clean"
            className="car-image w-auto h-[35vh]"
          />
        </li>


        <li className="absolute inset-0 flex justify-center items-center car-frame" data-step="yellow">
          <Image
            src="/images/911-yellow.png"
            width={2000}
            height={1000}
            alt="911-yellow"
            className="car-image w-auto h-[35vh]"
          />
        </li>

      </ul>
    </div>
  )
}

export default Services
