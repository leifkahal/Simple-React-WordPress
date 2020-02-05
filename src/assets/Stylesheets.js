import React from 'react';
import Helmet from 'react-helmet'


const Stylesheets = () => {
    const apiDomain = global.Configs.apiDomain;
    const stylesheetUrls = global.Configs.stylesheetUrls;
    const bootstrapUrl = global.Configs.bootstrapUrl;
    const fontUrls = global.Configs.fontUrls;

    return (
        <Helmet>
            {fontUrls.map(item => {
            return (<link key={item} rel="stylesheet" href={item} expiration="10d" />)
            })}
            <link rel='stylesheet' id='wp-block-library-css'
                href={apiDomain + '/wp-includes/css/dist/block-library/style.min.css?ver=5.3'} media='all' expiration="10d" />
            <link rel="stylesheet" href={bootstrapUrl} />
            {stylesheetUrls.map(item => {
            return (<link key={item} rel="stylesheet" href={item} />)
            })}
            <link rel="stylesheet" href={apiDomain + "/wp-content/themes/simpleReactWP/style.css?ver=1.0"} />
        </Helmet>
    )

}

export default Stylesheets;