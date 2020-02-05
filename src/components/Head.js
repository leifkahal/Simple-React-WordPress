import React from 'react'
import Helmet from 'react-helmet'


const Head = (props) => {

    return (
        <Helmet>
            <title>{props.title + ' | ' + global.Configs.companyTitle}</title>
        </Helmet>
    )
}

export default Head