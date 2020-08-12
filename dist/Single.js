import React from 'react';
import Process from './Process';
import Head from './Head';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Single = props => {
  console.log(props);
  let postType = props.postType;
  let endpoint = props.endpoint;
  let rand = props.rand;
  let title;
  const theContent = Process(postType, endpoint, rand);
  const singleContent = theContent;

  if (singleContent) {
    title = singleContent.map(html => html.title.rendered);
  }

  if (singleContent) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Col, {
      md: 9,
      lg: 9,
      xl: 9,
      className: "single-post category-wrapper"
    }, /*#__PURE__*/React.createElement(Head, {
      title: title
    }), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("div", {
      onClick: handleClick,
      dangerouslySetInnerHTML: createHTML(),
      className: "wp-html"
    })));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "category-wrapper",
      style: {
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: 3,
      lg: 3,
      xl: 3,
      className: "sidebar-container"
    }, /*#__PURE__*/React.createElement(Sidebar, {
      sidebar: props.sidebar
    })), /*#__PURE__*/React.createElement(Col, {
      md: 9,
      lg: 9,
      xl: 9,
      className: "single-post"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-html"
    }, /*#__PURE__*/React.createElement("h1", null, "404 Not Found")))));
  } // Functions //////////////////////////////////////////////////////////////////////


  function createHTML() {
    return {
      __html: singleContent.map(html => html.content_shortcode)
    };
  } //handles links in the html content from WordPress


  function handleClick(e) {
    let closestA = e.target.closest('a');
    let getHref = closestA + ' '; //if link is set to open in new tab

    if (closestA.getAttribute("target") === '_blank') {
      if (!getHref) return;
      e.preventDefault();
      let resHref = getHref.split(/href="(.*?...)"/);
      let finalHref = resHref[0].replace(window.Configs.reactUrl, '');
      window.open(finalHref, '_blank');
    } //else the link is handled by BrowserRouter
    else {
        let getHref = closestA + ' ';
        if (!getHref) return;
        e.preventDefault();
        let resHref = getHref.split(/href="(.*?...)"/);
        let url = new URL(resHref[0], resHref[0]);
        props.history.push(url.pathname);
      }
  }
};

export default withRouter(Single);