import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  const [footerContent, setFooter] = useState([]);
  useEffect(() => {
    async function getFooter() {
      const content = await fetch(`${global.Configs.apiUrl}/footer`);
      const footer = await content.json();
      setFooter(footer);
    }

    getFooter();
  }, []);
  const reactUrl = global.Configs.reactUrl;
  const footerClasses = global.Configs.footerClasses;
  let reactLink;
  let i = 0;
  let j = 0;
  return /*#__PURE__*/React.createElement("div", {
    id: "footer_dark",
    className: footerClasses,
    style: {
      opacity: '0'
    }
  }, /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, footerContent.map(footerItem => {
    i++;
    return /*#__PURE__*/React.createElement("div", {
      key: footerItem.title + i,
      className: "col-sm-6 col-md-3 item footer-menu-container"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "footer-title"
    }, footerItem.title), /*#__PURE__*/React.createElement("ul", null, footerItem.links.map(linkItem => {
      j++;
      let url = new URL(linkItem.url, reactUrl);
      let linkTo = url.pathname; // check if is react-link or _blank for footer display:none

      if (linkItem.target === '_blank') {
        reactLink = '';
      } else {
        reactLink = ' react-link';
      }

      if (reactLink) {
        return /*#__PURE__*/React.createElement("li", {
          key: 2354 + j
        }, /*#__PURE__*/React.createElement(Link, {
          to: linkTo,
          role: "tab",
          "data-rb-event-key": "1",
          "aria-selected": "true",
          className: "navbar-footer nav-link" + reactLink,
          target: linkItem.target
        }, linkItem.label, /*#__PURE__*/React.createElement("ion-icon", {
          name: "open-outline"
        })));
      } else {
        return /*#__PURE__*/React.createElement("li", {
          key: 2354 + j
        }, /*#__PURE__*/React.createElement("a", {
          href: linkItem.url,
          role: "tab",
          "data-rb-event-key": "1",
          "aria-selected": "true",
          className: "navbar-footer nav-link" + reactLink,
          rel: "noopener noreferrer",
          target: linkItem.target
        }, linkItem.label, /*#__PURE__*/React.createElement("ion-icon", {
          name: "open-outline"
        })));
      }
    })));
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6 item text company-info"
  }, /*#__PURE__*/React.createElement("h3", null, global.Configs.companyTitle), /*#__PURE__*/React.createElement("p", null, global.Configs.companyDesc))), /*#__PURE__*/React.createElement("div", {
    className: "col item social"
  }, /*#__PURE__*/React.createElement("a", {
    href: global.Configs.facebookUrl,
    target: "blank"
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon ion-social-facebook"
  })), /*#__PURE__*/React.createElement("a", {
    href: global.Configs.twitterUrl
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon ion-social-twitter"
  })), /*#__PURE__*/React.createElement("a", {
    href: global.Configs.snapchatUrl
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon ion-social-snapchat"
  })), /*#__PURE__*/React.createElement("a", {
    href: global.Configs.instagramUrl
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon ion-social-instagram"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "copyright"
  }, global.Configs.copyright, "  | Powered by ", /*#__PURE__*/React.createElement("a", {
    href: "http://simplereactwordpress.com",
    style: {
      color: '#fff'
    }
  }, "Simple React WordPress\xAE")))));
};

export default Footer;