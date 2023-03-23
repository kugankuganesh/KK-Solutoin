import React from "react"
import { project } from "../data/dummydata"
// import CountUp from "react-countup"

//yarn or npm add react-countup

export const Counter = () => {
  return (
    <>
      <div classNameName='hero counter'>
        <div classNameName='container grid3 grid4'>
          {project.map((item) => (
            <div classNameName='box' data-aos='zoom-in'>
              <i>{item.icon}</i>
              <h1 classNameName='heading'>
                {/* <CountUp enableScrollSpy duration={2} end={item.num} /> */}
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
