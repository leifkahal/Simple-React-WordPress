import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navibar = props => {
  const [menu, setMenu] = useState([]);
  const [bloginfo, setInfo] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const apiUrl = global.Configs.apiUrl;
  const reactUrl = global.Configs.reactUrl;
  const logo = global.Configs.brandingLogo;
  let brandImg;
  const companyTitle = global.Configs.companyTitle;
  const navbarClasses = global.Configs.navbarClasses;
  useEffect(() => {
    async function getMenu() {
      const response = await fetch(`${apiUrl}/menu.json`);
      const navItems = await response.json();
      setMenu(navItems);
    }

    getMenu();
  }, [apiUrl]);
  useEffect(() => {
    async function getInfo() {
      const info = await fetch(`${global.Configs.apiUrl}/bloginfo`);
      const bloginfo = await info.json();
      setInfo(bloginfo);
    }

    getInfo();
  }, []);
  global.frontPage = bloginfo[2];
  global.Bloginfo = bloginfo;

  if (logo) {
    brandImg = /*#__PURE__*/React.createElement("img", {
      alt: companyTitle,
      src: logo,
      height: "32",
      className: "d-inline-block align-top"
    });
  } else {
    brandImg = '';
  }

  return /*#__PURE__*/React.createElement(Navbar, {
    expanded: expanded,
    collapseOnSelect: true,
    expand: "lg",
    className: navbarClasses
  }, /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "#home"
  }, brandImg, /*#__PURE__*/React.createElement("div", {
    className: "bloginfo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-title"
  }, bloginfo[0]), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "blog-description"
  }, bloginfo[1]))), /*#__PURE__*/React.createElement(Navbar.Toggle, {
    id: "navbar-toggler",
    onClick: () => setExpanded(expanded ? false : "expanded"),
    "aria-controls": "responsive-navbar-nav",
    className: "navbar-toggle",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    id: "responsive-navbar-nav"
  }, /*#__PURE__*/React.createElement(Nav, {
    className: "ml-auto"
  }, menu.map(navItem => {
    let url = new URL(navItem.url, reactUrl);
    let linkTo = url.pathname;
    return /*#__PURE__*/React.createElement(Link, {
      key: navItem.ID,
      onClick: () => setExpanded(false),
      to: linkTo,
      className: "navbar-right nav-link react-link"
    }, navItem.title);
  }))));
};

export default Navibar;