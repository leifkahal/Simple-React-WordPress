import React from 'react';
import Page from './Page';
import Posts from './Posts';

const Homepage = () => {
  if (global.Configs.frontPage === 'blog/') {
    return /*#__PURE__*/React.createElement(Posts, null);
  } else {
    return /*#__PURE__*/React.createElement(Page, {
      id: global.Configs.frontPage
    });
  }
};

export default Homepage;