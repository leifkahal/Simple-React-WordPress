import React from 'react';

const Stylesheets = () => {
    const apiDomain = window.Configs.apiDomain;
    const stylesheetUrls = window.Configs.stylesheetUrls;
    const bootstrapUrl = window.Configs.bootstrapUrl;
    const fontUrls = window.Configs.fontUrls;

    return (
        <style-sheets>
            {fontUrls.map(item => {
            return (<link key={item} rel="stylesheet" href={item} />)
            })}
            <link rel='stylesheet' id='wp-block-library-css'
                href={apiDomain + '/wp-includes/css/dist/block-library/style.min.css?ver=5.3'} media='all' />
            <link rel="stylesheet" href={bootstrapUrl} />
            {stylesheetUrls.map(item => {
            return (<link key={item} rel="stylesheet" href={item} />)
            })}
        </style-sheets>
    )

}

export default Stylesheets;