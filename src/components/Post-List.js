import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Process from './Process'
import Paginate from './Paginate'
import Head from './Head' 


function PostList(props) {

    let fimg;
    let postDate;
    let postType = props.postType;
    let endpoint = props.endpoint;
    let rand = props.rand;
    const apiDomain = global.Configs.apiDomain;
    const reactUrl = global.Configs.reactUrl;
    const defaultThumb = global.Configs.defaultThumb

    const theContent = Process(postType, endpoint, rand);
    const listContent = theContent;

    const decodeHTML = function (html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    const title = props.title;

    if (listContent) {
        return (
            <Col id="post-list" className="main-content" md={9} lg={9} xl={9}>
             <Head title={title} />
                {listContent.map(apiString => {
                    if (apiString.fimg_url) { fimg = apiString.fimg_url } else { fimg = defaultThumb }
                    postDate = new Date(apiString.date).toDateString();
                    return (
                        <Card key={apiString.id}>
                            <Card.Body>
                                <Row>
                                    <Col md={4} className="post-list-img"><Card.Img variant="left" src={fimg} /></Col>
                                    <Col md={8}>
                                        <Card.Title>{apiString.title.rendered}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{postDate}</Card.Subtitle>
                                        <Card.Text>{decodeHTML(apiString.excerpt.rendered)}</Card.Text>
                                        <Link to={apiString.link.replace(apiDomain, '').replace(reactUrl, '')} className="react-link" >View Article</Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    );
                })}
                <Paginate currentPage={props.currentPage} />
            </Col>
        )
    }
    else { return (<div className="page-wrapper wp-html"><h1>404 Not Found</h1></div>) }
}

export default PostList;