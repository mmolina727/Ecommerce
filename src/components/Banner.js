import React from 'react'
import "../css/Banner.css";

export const Banner = () => {
  return (
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("../img/banner1.jpg")} className="d-block w-100" alt="banner"/>
    </div>
  </div>
</div>
  )
}
