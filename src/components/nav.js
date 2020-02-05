import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navibar = (props) => {

    const [menu, setMenu] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [bloginfo, setInfo] = useState([]);
    const apiUrl = global.Configs.apiUrl;
    const apiDomain = global.Configs.apiDomain;
    const reactUrl = global.Configs.reactUrl;

    useEffect(() => {
        async function getMenu() {
            const info = await fetch(`${apiUrl}/bloginfo`);
            const bloginfo = await info.json();
            setInfo(bloginfo);
            const response = await fetch(`${apiUrl}/menu.json`);
            const navItems = await response.json();
            setMenu(navItems);
        }
        getMenu();
    }, [apiUrl]);

    global.frontPage = bloginfo[2];

    return (
        <Navbar expanded={expanded} sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="http://cdn.hundositebuilder.com/simple-react-wordpress.svg"
                    width="62"
                    height="36"
                    className="d-inline-block align-top"
                />{' '}
                <div className="bloginfo">{bloginfo[0]}<br /><span className="blog-description">{bloginfo[1]}</span></div>
            </Navbar.Brand>
            <Navbar.Toggle id="navbar-toggler" onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" className="navbar-toggle" style={{ display: 'none' }} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {menu.map(navItem => {
                        const linkTo = () => { return (navItem.url.replace(apiDomain, '').replace(reactUrl, '')) }
                        return (
                            <Link key={navItem.ID} onClick={() => setExpanded(false)} to={linkTo} className="navbar-right nav-link react-link">{navItem.title}</Link>);
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navibar;