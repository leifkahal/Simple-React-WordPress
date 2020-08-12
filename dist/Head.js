import React from 'react';
import Helmet from 'react-helmet';

const Head = props => {
  return /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("title", null, props.title + ' | ' + global.Configs.companyTitle));
};

export default Head;