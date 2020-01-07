import React from 'react'
import { Link } from 'react-router-dom'
import Process from './Process'


const Footer = () => {

    const postType = 'footer';
    const postID = '';
    const theContent = Process(postType, postID);
    const footerContent = theContent;
    let i = 0;
    let j = 0;

    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        {footerContent.map(footerItem => {
                            i++;
                            return (
                                <div key={footerItem.title + i} className="col-sm-6 col-md-3 item">
                                    <h3 className="footer-title">{footerItem.title}</h3>
                                    <ul>
                                        {footerItem.links.map(linkItem => {
                                            j++;
                                            return (
                                                <li key={2354 + j}><Link to={linkItem.url} role="tab" data-rb-event-key="/blog/" aria-selected="true" className="navbar-footer nav-link active">{linkItem.label}</Link></li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                        <div className="col-md-6 item text">
                            <h3>{window.Configs.companyTitle}</h3>
                            <p>{window.Configs.companyDesc}</p>
                            <div className="col item social">
                                <a href={window.Configs.facebookUrl} target="blank"><i className="icon ion-social-facebook"></i></a>
                                <a href={window.Configs.twitterUrl}><i className="icon ion-social-twitter"></i></a>
                                <a href={window.Configs.snapchatUrl}><i className="icon ion-social-snapchat"></i></a>
                                <a href={window.Configs.instagramUrl}><i className="icon ion-social-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <p className="copyright">{window.Configs.copyright}</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;