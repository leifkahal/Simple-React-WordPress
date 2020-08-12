import React from 'react';
import PostList from './Post-List';
import Single from './Single';

const Posts = ({
  props,
  match
}) => {
  let postType;
  let endpoint;
  let singlePost;
  let pageNum;
  let title;

  if (match) {
    endpoint = match.params.id;
    singlePost = match.params.post;
    pageNum = match.params.pageNum; // check the post type so we can set the correct endpoint

    if (match.params.year) {
      postType = 'archive';
      endpoint = {
        year: match.params.year,
        month: match.params.month
      };
      title = 'Archive: | ' + match.params.month + '/' + match.params.year;
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
    } else if (match.params.blogPage) {
      postType = 'post';
      endpoint = ['/?page=' + match.params.blogPage];
      pageNum = match.params.blogPage;
      title = window.Configs.companyTitle;
    } else {
      postType = 'category';
      endpoint = [match.params.title, '1'];
      title = match.params.title.replace(/^\w/, c => c.toUpperCase());
    }
  } // if match is not set... was rendered by <Homepage> not <Route> and is Display Latest Posts
  else {
      postType = 'post';
      endpoint = ['?page=1'];
      pageNum = '1';
      title = window.Configs.companyTitle;
    }

  if (singlePost) {
    return /*#__PURE__*/React.createElement(Single, {
      postType: postType,
      endpoint: endpoint,
      rand: match
    });
  } else {
    return /*#__PURE__*/React.createElement(PostList, {
      postType: postType,
      endpoint: endpoint,
      rand: match,
      currentPage: pageNum,
      title: title
    });
  }
};

export default Posts;