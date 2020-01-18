import React from 'react';

const Stylesheets = () => {
    const apiDomain = window.Configs.apiDomain;
    const stylesheetUrls = window.Configs.stylesheetUrls;
    const bootstrapUrl = window.Configs.bootstrapUrl;
    const fontUrls = window.Configs.fontUrls;

    return (
        <style-sheets>
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
        </style-sheets>
    )

}

export default Stylesheets;