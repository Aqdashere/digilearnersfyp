import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO DIGI-LEARNER"
              title="Best Online Education Expertise"
            />
            <p>
             The Only All-In-One Platform For all your Digital Needs where you can Learn Through Courses Or By Teachers, Or you can Purchase Services
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
