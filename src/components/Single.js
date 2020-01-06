import React from 'react'
import Col from 'react-bootstrap/Col'
import Process from './Process'


const Single = (props) => {

    let postType = props.postType;
    let endpoint = props.endpoint;
    let rand = props.rand;

    const theContent = Process(postType, endpoint, rand);
    const singleContent = theContent;

    function createHTML() {
        return { __html: singleContent.map(html => (html.content.rendered)) };
    }
console.log(singleContent);
    if (singleContent) {
        return (
            <Col md={9} lg={9} xl={10}>
                <h4>{singleContent.map(html => (html.title.rendered))}</h4>
                <div dangerouslySetInnerHTML={createHTML()} className='wp-html' />
            </Col>
        );
    }
    else { return (<div className="wp-html"><h1>404 Not Found</h1></div>) }
}

export default Single;