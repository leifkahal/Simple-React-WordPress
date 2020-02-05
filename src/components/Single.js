import React from 'react'
import Col from 'react-bootstrap/Col'
import Process from './Process'
import Head from './Head' 
import { withRouter } from 'react-router-dom'


const Single = (props) => {

    let postType = props.postType;
    let endpoint = props.endpoint;
    let rand = props.rand;

    const theContent = Process(postType, endpoint, rand);
    const singleContent = theContent;
    const title = singleContent.map(html => (html.title.rendered))

    if (singleContent) {
        return (
            <Col md={9} lg={9} xl={9}>
                <Head title={title} />
                <h1>{title}</h1>
                <div onClick={handleClick} dangerouslySetInnerHTML={createHTML()} className='wp-html' />
            </Col>
        );
    }
    else { return (<div className="wp-html"><h1>404 Not Found</h1></div>) }

    // Functions //////////////////////////////////////////////////////////////////////
    function createHTML() {
        return { __html: singleContent.map(html => (html.content.rendered)) };
    }

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

export default withRouter(Single);