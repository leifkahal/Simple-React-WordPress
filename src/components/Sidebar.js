import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import handleClick from '../assets/handleClick'


const Sidebar = (props) => {

    const [widgetContent, setContent] = useState([]);
    //get the sidebar content
    useEffect(() => {
        async function getWidgets() {
            const content = await fetch(`${global.Configs.apiUrl}/sidebar/json`);
            const widgets = await content.json();
            setContent(widgets);
        }
        getWidgets();
    }, [props]);

    const reactUrl = global.Configs.reactUrl;
    let reactLink
    let i = 0;

    return (
        <React.Fragment>
            <Col md={3} lg={3} xl={3} className="sidebar-container">
                <div id="sidebar" className="sidebar">
                    {widgetContent.map(sidebarItem => { i++;
                        return (
                            <Nav key={i} defaultActiveKey="/home" className="flex-column widget-container">
                                <label className="sidebar-title">{sidebarItem.title}</label>
                                {sidebarItem.links.map(linkItem => {
                                    if (linkItem.html) {
                                        function createMarkup() { return { __html: linkItem.html } }
                                        return (
                                            <div key={Math.random()} onClick={handleClicks} dangerouslySetInnerHTML={createMarkup()} />
                                        );
                                    } else {
                                        let url = new URL(linkItem.url, reactUrl)
                                        let linkTo = url.pathname
                                        // check if is react-link or _blank for footer display:none
                                        if (linkItem.target === '_blank') { reactLink = '' } else { reactLink = ' react-link' }
                                        if (reactLink) {
                                            return (
                                                <Link key={Math.random()} to={linkTo} className="navbar-left nav-link react-link">{linkItem.label}</Link>
                                            );
                                        } else {
                                            return (
                                                <a key={Math.random()} href={linkItem.url} className="navbar-left nav-link" rel="noopener noreferrer" target="_blank">{linkItem.label}</a>
                                            );
                                        }
                                    }
                                })}
                            </Nav>
                        );
                    })}

                </div >
            </Col>
        </React.Fragment>
    );

    // Functions //////////////////////////////////////////////////////////////////////

    function handleClicks(e) {
        handleClick(e, props)
    }
}

export default withRouter(Sidebar);