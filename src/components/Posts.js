import React from 'react';
import Sidebar from './Sidebar'
import PostList from './Post-List'
import Single from './Single'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 


const Posts = ({ props, match }) => {

    let postType = "";
    let endpoint = "";
    let singlePost = ""; 
    let pageNum = "";
    let title = "";
    const rand = Math.random();

    if (match) {
        endpoint = match.params.id;
        singlePost = match.params.post;
        pageNum = match.params.pageNum;
        // check the post type so we can set the correct endpoint
        if (match.params.year) {
            postType = 'archive';
            endpoint = { year: match.params.year, month: match.params.month };
            title = 'Archive: | ' +match.params.month +'/' + match.params.year;
        } else if (match.params.tag) {
            postType = 'tag';
            endpoint = match.params.tag;
            title = match.params.tag.replace(/^\w/, c => c.toUpperCase());
        } else if (match.params.post) {
            postType = 'post';
            endpoint = `?slug=` + match.params.id;
        } else if (match.params.pageNum) {
            postType = 'category';
            endpoint = [match.params.title, match.params.pageNum];
            title = match.params.title.replace(/^\w/, c => c.toUpperCase());
        } else if(match.params.blogPage) {
            postType = 'post';
            endpoint = ['/?page=' + match.params.blogPage];
            pageNum = match.params.blogPage;
            title = window.Configs.companyTitle;
        } else {
            postType = 'category';
            endpoint = [match.params.title, '1'];
            title = match.params.title.replace(/^\w/, c => c.toUpperCase());
        }
    }
    // if match is not set... is site root
    else {
        postType = 'post';
        endpoint = ['?page=1'];
        pageNum = '1';
        title = window.Configs.companyTitle;
    }


    if (singlePost) {
        return (
            <div className="category-wrapper close-nav">
                <Row>
                    <Col md={3} lg={3} xl={3} className="sidebar-container"><Sidebar /></Col>
                    <Single postType={postType} endpoint={endpoint} rand={rand} />
                </Row>

            </div>
        );
    } else {
        return (
            <div className="category-wrapper close-nav" style={{ minHeight: '100vh' }}>
                <Row>
                    <Col md={3} lg={3} xl={3} className="sidebar-container"><Sidebar /></Col>
                    <PostList postType={postType} endpoint={endpoint} rand={rand} currentPage={pageNum} title={title} />
                </Row>
            </div>
        );
    }

}



export default Posts;