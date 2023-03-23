import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section classNameName='about'>
        <div classNameName='container flex'>
          {about.map((val) => (
            <>
              <div classNameName='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div classNameName='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button classNameName='primaryBtn'>Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}