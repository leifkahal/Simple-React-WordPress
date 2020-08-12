import React from 'react';
import Helmet from 'react-helmet'


const Stylesheets = () => {
    
    const stylesheetUrls = global.Configs.stylesheetUrls;
    const bootstrapUrl = global.Configs.bootstrapUrl;
    const fontUrls = global.Configs.fontUrls; 
    const wpStylesheet = global.Configs.wpStylesheet

    return (
        <Helmet>
            {fontUrls.map(item => {
            return (<link key={item} rel="preload" as="style" onload="this.rel = 'stylesheet'" href={item} expiration="10d" />)
            })}
            {stylesheetUrls.map(item => {
            return (<link key={item} rel="preload" as="style" onload="this.rel = 'stylesheet'" href={item} />)
            })}
        </Helmet>
    )

}

export default Stylesheets;