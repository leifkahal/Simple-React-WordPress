import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Process from './Process'

const Sidebar = () => {

    const postType = 'sidebar';
    const postID = 'json';
    const theContent = Process(postType, postID);
    const widgetContent = theContent;
    let i = 0;
    let j = 0;

    return (
        <div className="sidebar">
            {widgetContent.map(sidebarItem => {
                i++;
                return (
                    <Nav key={i} defaultActiveKey="/home" className="flex-column widget-container">
                        <label className="sidebar-title">{sidebarItem.title}</label>
                        {sidebarItem.links.map(linkItem => {
                            j++;
                            if (linkItem.html) {
                                function createMarkup() {
                                    return { __html: linkItem.html };
                                }
                                return (
                                    <div key={j} dangerouslySetInnerHTML={createMarkup()} />
                                );
                            } else {
                                return (
                                    <Link key={j} to={linkItem.url} className="navbar-left nav-link active">{linkItem.label}</Link>
                                );
                            }
                        })}
                    </Nav>
                );
            })}

        </div >
    );
}

export default Sidebar;