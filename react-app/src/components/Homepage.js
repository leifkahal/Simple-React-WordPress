import React, { useEffect, useState } from 'react';
import Page from './Page'
import Posts from './Posts' 

const Homepage = ({ match }) => {

    const apiUrl = window.Configs.apiUrl;
    const [bloginfo, setInfo] = useState([]);

    useEffect(() => {
        async function getMenu() {
            const info = await fetch(`${apiUrl}/bloginfo`);
            const bloginfo = await info.json();
            setInfo(bloginfo);
        }
        getMenu();
    }, [apiUrl]);

    if (bloginfo[2] === 'blog/') {
        return (
            <Posts />
        );
    } else {
        return (
            <Page />
        );
    }

}

export default Homepage;