import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Process from './Process'
import { withRouter } from 'react-router-dom'


const Sidebar = (props) => {

    const postType = 'sidebar';
    const postID = 'json';
    const theContent = Process(postType, postID);
    const widgetContent = theContent;
    const apiDomain = global.Configs.apiDomain;
    const reactUrl = global.Configs.reactUrl;
    let i = 0;

    return (
        <div className="sidebar">
            {widgetContent.map(sidebarItem => { i++;
                return (
                    <Nav key={i} defaultActiveKey="/home" className="flex-column widget-container">
                        <label className="sidebar-title">{sidebarItem.title}</label>
                        {sidebarItem.links.map(linkItem => {
                            if (linkItem.html) {
                                function createMarkup() { return { __html: linkItem.html }}
                                return (
                                    <div key={i} onClick={handleClick} dangerouslySetInnerHTML={createMarkup()} />
                                );
                            } else {
                                const linkTo = () => { return (linkItem.url.replace(apiDomain,'').replace(reactUrl,'')) }
                                return (
                                    <Link key={i} to={linkTo} className="navbar-left nav-link react-link">{linkItem.label}</Link>
                                );
                            }
                        })}
                    </Nav>
                );
            })}

        </div >
    );

    // Functions //////////////////////////////////////////////////////////////////////

    function handleClick(e) {
        let closestA = e.target.closest('a')
        if (closestA === null) {return}
        if (closestA.getAttribute("target") === '_blank') {
            let getHref = closestA + ' '
            if (!getHref) return
            e.preventDefault()
            let resHref = getHref.split(/href="(.*?...)"/)
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '')
            window.open(finalHref,'_blank');
        }
        else {
            let getHref = closestA + ' ';
            if (!getHref) return;
            e.preventDefault();
            let resHref = getHref.split(/href="(.*?...)"/);
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '')
            props.history.push(finalHref)
        }
    }
}

export default withRouter(Sidebar);