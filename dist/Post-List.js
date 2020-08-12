import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Process from './Process';
import Paginate from './Paginate';
import Head from './Head';

function PostList(props) {
  let fimg;
  let postDate;
  let postType = props.postType;
  let endpoint = props.endpoint;
  let rand = props.rand;
  const apiDomain = global.Configs.apiDomain;
  const reactUrl = global.Configs.reactUrl;
  const defaultThumb = global.Configs.defaultThumb;
  const theContent = Process(postType, endpoint, rand);
  const listContent = theContent;

  const decodeHTML = function (html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const title = props.title;

  if (listContent) {
    return /*#__PURE__*/React.createElement(Col, {
      id: "post-list",
      className: "main-content",
      md: 9,
      lg: 9,
      xl: 9
    }, /*#__PURE__*/React.createElement(Head, {
      title: title
    }), listContent.map(apiString => {
      if (apiString.fimg_url) {
        fimg = apiString.fimg_url;
      } else {
        fimg = defaultThumb;
      }

      postDate = new Date(apiString.date).toDateString();
      return /*#__PURE__*/React.createElement(Card, {
        key: apiString.id
      }, /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
        md: 4,
        className: "post-list-img"
      }, /*#__PURE__*/React.createElement(Card.Img, {
        variant: "left",
        src: fimg
      })), /*#__PURE__*/React.createElement(Col, {
        md: 8
      }, /*#__PURE__*/React.createElement(Card.Title, null, apiString.title.rendered), /*#__PURE__*/React.createElement(Card.Subtitle, {
        className: "mb-2 text-muted"
      }, postDate), /*#__PURE__*/React.createElement(Card.Text, null, decodeHTML(apiString.excerpt.rendered)), /*#__PURE__*/React.createElement(Link, {
        to: apiString.link.replace(apiDomain, '').replace(reactUrl, ''),
        className: "react-link"
      }, "View Article")))));
    }), /*#__PURE__*/React.createElement(Paginate, {
      currentPage: props.currentPage
    }));
  } else {
    return /*#__PURE__*/React.createElement(Col, {
      md: 9,
      lg: 9,
      xl: 9,
      className: "single-post"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-html"
    }, /*#__PURE__*/React.createElement("h1", null, "404 Not Found")));
  }
}

export default PostList;