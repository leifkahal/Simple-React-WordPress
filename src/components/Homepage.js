import React from 'react';
import Page from './Page'
import Posts from './Posts' 

const Homepage = () => {

    if (global.Configs.frontPage === 'blog/') {
        return (
            <Posts />
        );
    } else {
        return (
            <Page id={global.Configs.frontPage} />
        );
    }

}

export default Homepage;