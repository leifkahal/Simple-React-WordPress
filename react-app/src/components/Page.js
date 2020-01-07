import React from 'react'
import Hero from "./Hero"
import Process from './Process' 


const Page = ({ match }) => {

    const postType = 'page';
    let endpoint;
    let theContent;
    let pageContent;

    if (match) {
        endpoint = match.params.id;
        theContent = Process(postType, endpoint, match);
        pageContent = theContent;


        function createMarkup() {
            return { __html: pageContent.map(html => (html.content.rendered)) };
        }

        if (pageContent) {
            return (
                <div className="page-wrapper" style={{ minHeight: '100vh' }}>
                    {pageContent.map(apiString => {
                        return (
                            <Hero key={apiString.id} title={apiString.title.rendered} hero_img={apiString.hero_img} excerpt={apiString.excerpt.rendered} cta={apiString.cta_btn} />
                        );

                    })}
                    <div className='wp-page-html'>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="page-wrapper wp-page-html">
                    <h1>404 Not Found</h1>
                </div>)
        }
    }
    // match not set return empty div and set height to hide footer during page load.
    // inline style is so it is applied immediately.
    else {
        return (
            <div className="page-wrapper" style={{ minHeight: '101vh' }}></div>
        );
    }



}

export default Page;