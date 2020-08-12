import React from 'react';
import Process from './Process';

const FourOFour = () => {
  const backgroundImg = global.Configs.fofBackground; // eslint-disable-next-line

  let process = Process();
  return /*#__PURE__*/React.createElement("div", {
    className: "react-fof-wrapper",
    style: {
      minHeight: '100vh',
      'backgroundImage': `url(${backgroundImg})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "four-o-four"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '5em'
    }
  }, "404"), /*#__PURE__*/React.createElement("p", null, "Page not found")));
};

export default FourOFour;