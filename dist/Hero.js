import React from 'react';
import Excerpt from './excerpt';
import { Link } from 'react-router-dom'; //Add Hero image and text if present in `views` field from WP API data

const Hero = props => {
  let ctaTxt;

  if (props.hero_img.length === 0) {
    return '';
  } else {
    if (props.ctaTxt) {
      ctaTxt = props.ctaTxt;
    } else {
      ctaTxt = `This is set in 'Call to Action' on WP Page Editor.`;
    }

    return /*#__PURE__*/React.createElement("div", {
      id: "heroImg",
      className: "clean-block clean-hero",
      style: {
        backgroundImage: 'url(' + props.hero_img + ')'
      }
    }, /*#__PURE__*/React.createElement("section", {
      className: "color-overlay"
    }), /*#__PURE__*/React.createElement("div", {
      className: "clean-hero-text"
    }, /*#__PURE__*/React.createElement("h2", null, props.title), /*#__PURE__*/React.createElement(Excerpt, {
      excerpt: props.excerpt
    }), /*#__PURE__*/React.createElement(Link, {
      to: props.ctaBtn,
      className: "react-link"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline-light btn-lg",
      type: "button"
    }, ctaTxt))));
  }
};

export default Hero;
/*
<div className="text">
          <h2>{props.title}</h2>
          <Excerpt excerpt={props.excerpt} excerptLength={props.excerptLength} />
          <button className="btn btn-outline-light btn-lg" type="button">Learn More</button></div>
          */