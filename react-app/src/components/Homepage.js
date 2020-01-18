import React from 'react';
import Page from './Page'
import Posts from './Posts' 

const Homepage = () => {

    if (window.Configs.frontPage === 'blog/') {
        return (
            <Posts />
        );
    } else {
        return (
            <Page id={window.Configs.frontPage} />
        );
    }

}

export default Homepage;