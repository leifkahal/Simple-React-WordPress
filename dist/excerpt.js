import React from 'react';

const Excerpt = props => {
  if (props.excerpt.length > 0) {
    return /*#__PURE__*/React.createElement("h5", {
      className: "hero"
    }, props.excerpt);
  } else {
    return /*#__PURE__*/React.createElement("h5", {
      className: "hero"
    }, "Text in the excerpt will be displayed here.");
  }
};

export default Excerpt;