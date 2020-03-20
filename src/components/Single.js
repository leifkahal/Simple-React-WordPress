import React from 'react'
import Process from './Process'
import Head from './Head'
import { withRouter } from 'react-router-dom'
import Sidebar from './Sidebar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Single = (props) => {

    let postType = props.postType;
    let endpoint = props.endpoint;
    let rand = props.rand;
    let title;

    const theContent = Process(postType, endpoint, rand);
    const singleContent = theContent;

    if (singleContent) {
        title = singleContent.map(html => (html.title.rendered))
    }

    if (singleContent) {
        return (

            <React.Fragment>
                <div className="category-wrapper" style={{ minHeight: '100vh' }}>

                    <Row>
                        <Col md={3} lg={3} xl={3} className="sidebar-container"><Sidebar sidebar={props.sidebar} /></Col>
                        <Col md={9} lg={9} xl={9} className="single-post">
                            <Head title={title} />
                            <h1>{title}</h1>
                            <div onClick={handleClick} dangerouslySetInnerHTML={createHTML()} className='wp-html' />
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
    else {
        return (<div className="category-wrapper" style={{ minHeight: '100vh' }}>
            <Row>
                <Col md={3} lg={3} xl={3} className="sidebar-container"><Sidebar sidebar={props.sidebar} /></Col>
                <Col md={9} lg={9} xl={9} className="single-post">
                    <div className="wp-html"><h1>404 Not Found</h1></div>
                </Col>
            </Row>
        </div>)
    }

    // Functions //////////////////////////////////////////////////////////////////////
    function createHTML() {
        return { __html: singleContent.map(html => (html.content_shortcode)) };
    }
    //handles links in the html content from WordPress
    function handleClick(e) {
        let closestA = e.target.closest('a')
        let getHref = closestA + ' '
        //if link is set to open in new tab
        if (closestA.getAttribute("target") === '_blank') {
            if (!getHref) return
            e.preventDefault()
            let resHref = getHref.split(/href="(.*?...)"/)
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '')
            window.open(finalHref, '_blank');
        }
        //else the link is handled by BrowserRouter
        else {
            if (!getHref) return;
            e.preventDefault();
            let resHref = getHref.split(/href="(.*?...)"/);
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '')
            var url = new URL(finalHref)
            props.history.push(url.pathname)
        }
    }
}

export default withRouter(Single);