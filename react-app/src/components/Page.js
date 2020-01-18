import React from 'react'
import Hero from "./Hero"
import Process from './Process' 


const Page = (props) => {

    const postType = 'page';
    let endpoint;
    let theContent;
    let pageContent;

    if (props.id) {
        endpoint = props.id;
        theContent = Process(postType, endpoint, props.id);
        pageContent = theContent;
    }
    else if (props.match) {
        endpoint = props.match.params.id;
        theContent = Process(postType, endpoint, props.match);
        pageContent = theContent;
    } 


        function createMarkup() {
            return { __html: pageContent.map(html => (html.content.rendered)) };
        }

        if (pageContent) {
            return (
                <div className="page-wrapper" style={{ minHeight: '100vh' }}>
                    {pageContent.map(apiString => {
                        return (
                            <Hero key={apiString.id} title={apiString.title.rendered} hero_img={apiString.hero_img} excerpt={apiString.excerpt.rendered} ctaBtn={apiString.cta_btn} ctaTxt={apiString.cta_txt} />
                        );

                    })}
                    <div className='wp-page-html'>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </div>
                </div>
            );
        }
        else if (props.match) {
            return (
                <div className="page-wrapper wp-page-html">
                    <h1>404 Not Found</h1>
                </div>)
        }
        else {
            return (
                <div className="page-wrapper" style={{ minHeight: '101vh' }}></div>
            );
        }

}

export default Page;