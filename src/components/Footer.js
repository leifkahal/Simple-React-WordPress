import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Footer = (props) => {

    const [footerContent, setFooter] = useState([]);

    useEffect(() => {
        async function getFooter() {
            const content = await fetch(`${global.Configs.apiUrl}/footer`);
            const footer = await content.json();
            setFooter(footer);
        }
        getFooter();
    }, []);

    const reactUrl = global.Configs.reactUrl
    const footerClasses = global.Configs.footerClasses
    let reactLink
    let i = 0;
    let j = 0;

    return (
        <div id="footer_dark" className={footerClasses} style={{ opacity: '0' }}>
            <footer>
                <div className="container">
                    <div className="row">
                        {footerContent.map(footerItem => {
                            i++;
                            return (
                                <div key={footerItem.title + i} className="col-sm-6 col-md-3 item footer-menu-container">
                                    <h3 className="footer-title">{footerItem.title}</h3>
                                    <ul>
                                        {footerItem.links.map(linkItem => {
                                            j++;
                                            let url = new URL(linkItem.url, reactUrl)
                                            let linkTo = url.pathname
                                            // check if is react-link or _blank for footer display:none
                                            if (linkItem.target === '_blank') { reactLink = '' } else { reactLink = ' react-link' }
                                            if (reactLink) {
                                                return (
                                                    <li key={2354 + j}><Link to={linkTo} role="tab" data-rb-event-key="1" aria-selected="true" className={"navbar-footer nav-link" + reactLink} target={linkItem.target}>{linkItem.label}<ion-icon name="open-outline"></ion-icon></Link></li>
                                                );
                                            } else {
                                                return (
                                                    <li key={2354 + j}><a href={linkItem.url} role="tab" data-rb-event-key="1" aria-selected="true" className={"navbar-footer nav-link" + reactLink} rel="noopener noreferrer" target={linkItem.target}>{linkItem.label}<ion-icon name="open-outline"></ion-icon></a></li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                        <div className="col-md-6 item text company-info">
                            <h3>{global.Configs.companyTitle}</h3>
                            <p>{global.Configs.companyDesc}</p>
                        </div>
                    </div>
                    <div className="col item social">
                                <a href={global.Configs.facebookUrl} target="blank"><i className="icon ion-social-facebook"></i></a>
                                <a href={global.Configs.twitterUrl}><i className="icon ion-social-twitter"></i></a>
                                <a href={global.Configs.snapchatUrl}><i className="icon ion-social-snapchat"></i></a>
                                <a href={global.Configs.instagramUrl}><i className="icon ion-social-instagram"></i></a>
                            </div>
                    <p className="copyright">{global.Configs.copyright}  | Powered by <a href="http://simplereactwordpress.com" style={{color:'#fff'}}>Simple React WordPress®</a></p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;