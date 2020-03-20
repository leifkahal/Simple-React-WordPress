import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom'


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

    const apiDomain = global.Configs.apiDomain;
    const reactUrl = global.Configs.reactUrl;
    let reactLink
    let i = 0;

    return (
        <React.Fragment>
            <div id="sidebar" className="sidebar">
                {widgetContent.map(sidebarItem => {
                    i++;
                    return (
                        <Nav key={i} defaultActiveKey="/home" className="flex-column widget-container">
                            <label className="sidebar-title">{sidebarItem.title}</label>
                            {sidebarItem.links.map(linkItem => {
                                if (linkItem.html) {
                                    function createMarkup() { return { __html: linkItem.html } }
                                    return (
                                        <div key={Math.random()} onClick={handleClick} dangerouslySetInnerHTML={createMarkup()} />
                                    );
                                } else {
                                    const linkTo = () => { return (linkItem.url.replace(apiDomain, '').replace(reactUrl, '')) }
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
        </React.Fragment>
    );

    // Functions //////////////////////////////////////////////////////////////////////

    function handleClick(e) {
        let closestA = e.target.closest('a')
        if (closestA === null) { return }
        if (closestA.getAttribute("target") === '_blank') {
            let getHref = closestA + ' '
            if (!getHref) return
            e.preventDefault()
            let resHref = getHref.split(/href="(.*?...)"/)
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '')
            window.open(finalHref, '_blank');
        }
        else {
            let getHref = closestA + ' ';
            if (!getHref) return;
            e.preventDefault();
            let resHref = getHref.split(/href="(.*?...)"/);
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '')
            var url = new URL(finalHref)
            props.history.push(url.pathname)
        }
    }
}

export default withRouter(Sidebar);