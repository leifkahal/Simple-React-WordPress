import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Process from './Process'
import Paginate from './Paginate' 



function PostList(props) {

    let fimg;
    let postType = props.postType;
    let endpoint = props.endpoint;
    let rand = props.rand;
    const apiDomain = window.Configs.apiDomain;

    const theContent = Process(postType, endpoint, rand);
    const listContent = theContent;

    const decodeHTML = function (html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    if (listContent) {
        return (
            <Col className="main-content" md={9} lg={9} xl={10}>
                {listContent.map(apiString => {
                    if (apiString.fimg_url !== null) { fimg = apiString.fimg_url } else { fimg = `https://via.placeholder.com/250` }
                    return (
                        <Card key={apiString.id}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}><Card.Img variant="left" src={fimg} /></Col>
                                    <Col md={9}>
                                        <Card.Title>{apiString.title.rendered}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{apiString.date}</Card.Subtitle>
                                        <Card.Text>{decodeHTML(apiString.excerpt.rendered)}</Card.Text>
                                        <Link to={apiString.link.replace(apiDomain, '')}>View Article</Link>
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