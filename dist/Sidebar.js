import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

const Sidebar = props => {
  const [widgetContent, setContent] = useState([]); //get the sidebar content

  useEffect(() => {
    async function getWidgets() {
      const content = await fetch(`${global.Configs.apiUrl}/sidebar/json`);
      const widgets = await content.json();
      setContent(widgets);
    }

    getWidgets();
  }, [props]);
  const reactUrl = global.Configs.reactUrl;
  let reactLink;
  let i = 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Col, {
    md: 3,
    lg: 3,
    xl: 3,
    className: "sidebar-container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "sidebar",
    className: "sidebar"
  }, widgetContent.map(sidebarItem => {
    i++;
    return /*#__PURE__*/React.createElement(Nav, {
      key: i,
      defaultActiveKey: "/home",
      className: "flex-column widget-container"
    }, /*#__PURE__*/React.createElement("label", {
      className: "sidebar-title"
    }, sidebarItem.title), sidebarItem.links.map(linkItem => {
      if (linkItem.html) {
        function createMarkup() {
          return {
            __html: linkItem.html
          };
        }

        return /*#__PURE__*/React.createElement("div", {
          key: Math.random(),
          onClick: handleClick,
          dangerouslySetInnerHTML: createMarkup()
        });
      } else {
        let url = new URL(linkItem.url, reactUrl);
        let linkTo = url.pathname; // check if is react-link or _blank for footer display:none

        if (linkItem.target === '_blank') {
          reactLink = '';
        } else {
          reactLink = ' react-link';
        }

        if (reactLink) {
          return /*#__PURE__*/React.createElement(Link, {
            key: Math.random(),
            to: linkTo,
            className: "navbar-left nav-link react-link"
          }, linkItem.label);
        } else {
          return /*#__PURE__*/React.createElement("a", {
            key: Math.random(),
            href: linkItem.url,
            className: "navbar-left nav-link",
            rel: "noopener noreferrer",
            target: "_blank"
          }, linkItem.label);
        }
      }
    }));
  })))); // Functions //////////////////////////////////////////////////////////////////////

  function handleClick(e) {
    let closestA = e.target.closest('a');

    if (closestA === null) {
      return;
    }

    if (closestA.getAttribute("target") === '_blank') {
      let getHref = closestA + ' ';
      if (!getHref) return;
      e.preventDefault();
      let resHref = getHref.split(/href="(.*?...)"/);
      let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '');
      window.open(finalHref, '_blank');
    } else {
      let getHref = closestA + ' ';
      if (!getHref) return;
      e.preventDefault();
      let resHref = getHref.split(/href="(.*?...)"/);
      let url = new URL(resHref[0], resHref[0]);
      props.history.push(url.pathname);
    }
  }
};

export default withRouter(Sidebar);