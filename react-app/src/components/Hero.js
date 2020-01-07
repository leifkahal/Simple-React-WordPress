import React from 'react';
import Excerpt from './excerpt'
import { Link } from 'react-router-dom';


//Add Hero image and text if present in `views` field from WP API data
const Hero = (props) => { 

  if (props.hero_img.length === 0) {
    return ('')
  } else {
    return (
      <div id="heroImg" className="clean-block clean-hero" style={{ backgroundImage: 'url(' + props.hero_img + ')' }}>
        <section className="color-overlay" ></section>
        <div className="clean-hero-text">
          <h2>{props.title}</h2>
          <Excerpt excerpt={props.excerpt} />
          <Link to={props.cta}><button className="btn btn-outline-light btn-lg" type="button">Learn More</button></Link>
        </div>
      </div>
    )
  }
}

export default Hero;

/*
<div className="text">
          <h2>{props.title}</h2>
          <Excerpt excerpt={props.excerpt} excerptLength={props.excerptLength} />
          <button className="btn btn-outline-light btn-lg" type="button">Learn More</button></div>
          */