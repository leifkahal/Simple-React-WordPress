import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navibar = (props) => {

    const [menu, setMenu] = useState([]);
    const [bloginfo, setInfo] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const apiUrl = global.Configs.apiUrl;
    const reactUrl = global.Configs.reactUrl;
    const logo = global.Configs.brandingLogo
    let brandImg
    const companyTitle = global.Configs.companyTitle
    const navbarClasses = global.Configs.navbarClasses

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

    global.frontPage = bloginfo[2]
    global.Bloginfo = bloginfo

    if (logo) {
        brandImg = <img alt={companyTitle} src={logo} height="32" className="d-inline-block align-top" />
    } else { brandImg = '' }

    return (
        <Navbar expanded={expanded} collapseOnSelect expand="lg" className={navbarClasses} >
            <Navbar.Brand href="#home">
                {brandImg}
                <div className="bloginfo"><span className="blog-title">{bloginfo[0]}</span><br /><span className="blog-description">{bloginfo[1]}</span></div>
            </Navbar.Brand>
            <Navbar.Toggle id="navbar-toggler" onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" className="navbar-toggle" style={{ display: 'none' }} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {menu.map(navItem => {
                        let url = new URL(navItem.url, reactUrl)
                        let linkTo = url.pathname
                        return (
                            <Link key={navItem.ID} onClick={() => setExpanded(false)} to={linkTo} className="navbar-right nav-link react-link">{navItem.title}</Link>);
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navibar;