import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const Services = () => {
  return (
    <>
      <section classNameName='services'>
        <div classNameName='container'>
          <Heading title='Services' />
          <div classNameName='content grid3'>
            {services.map((item) => (
              <div classNameName='box' data-aos='flip-left'>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
