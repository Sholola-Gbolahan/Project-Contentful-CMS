import React from "react"
import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, repellat mollitia alias quasi, similique omnis
            voluptatem incidunt numquam accusantium quam accusamus ducimus
            atque. Aliquam repellendus aliquid ducimus ipsam. Voluptatum,
            provident!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
