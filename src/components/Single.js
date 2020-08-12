import React from 'react'
import Process from './Process'
import Head from './Head'
import { withRouter } from 'react-router-dom'
import FourOFour from './404'
import Col from 'react-bootstrap/Col'
import handleClick from '../assets/handleClick'


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
                <Col md={9} lg={9} xl={9} className="single-post category-wrapper">
                    <Head title={title} />
                    <h1>{title}</h1>
                    <div onClick={handleClicks} dangerouslySetInnerHTML={createHTML()} className='wp-html' />
                </Col>
            </React.Fragment>
        );
    }
    else {
        return (
            <FourOFour />
        )
    }

    // Functions //////////////////////////////////////////////////////////////////////
    function createHTML() {
        return { __html: singleContent.map(html => (html.content_shortcode)) };
    }

    function handleClicks(e) {
        handleClick(e, props)
    }
}

export default withRouter(Single);