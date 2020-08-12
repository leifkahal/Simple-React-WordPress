import React from 'react';
import Process from './Process';
import Head from './Head';
import { withRouter } from 'react-router-dom';

const Page = props => {
  const postType = 'page';
  let endpoint;
  let theContent;
  let pageContent; // Check if referrer is <Homepage/> or <Route/>

  if (props.id) {
    endpoint = props.id;
    theContent = Process(postType, endpoint, props.id);
    pageContent = theContent;
  } else if (props.match) {
    endpoint = props.match.params.id;
    theContent = Process(postType, endpoint, props.match);
    pageContent = theContent;
  } // If Process.js returns data


  if (pageContent) {
    const title = pageContent.map(html => html.title.rendered);
    return /*#__PURE__*/React.createElement("div", {
      id: "single",
      className: "page-wrapper",
      style: {
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement(Head, {
      title: title
    }), /*#__PURE__*/React.createElement("div", {
      className: "wp-page-html"
    }, /*#__PURE__*/React.createElement("div", {
      onClick: handleClick,
      dangerouslySetInnerHTML: createMarkup()
    })));
  } // return 404 for requests reffered by <Route/>
  else if (props.match) {
      return /*#__PURE__*/React.createElement("div", {
        className: "page-wrapper wp-page-html"
      }, /*#__PURE__*/React.createElement("h1", null, "404 Not Found"));
    } // return blank for everything else...
    else {
        return /*#__PURE__*/React.createElement("div", {
          className: "page-wrapper",
          style: {
            minHeight: '101vh'
          }
        });
      } // Functions //////////////////////////////////////////////////////////////////////


  function createMarkup() {
    return {
      __html: pageContent.map(html => html.content_shortcode)
    };
  }

  function handleClick(e) {
    let closestA = e.target.closest('a');

    if (closestA === null) {
      return;
    }

    if (closestA.hasAttribute('data-toggle')) {
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

export default withRouter(Page);