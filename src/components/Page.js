import React from 'react'
import Process from './Process'
import Head from './Head'
import FourOFour from './404'
import { withRouter } from 'react-router-dom'
import handleClick from '../assets/handleClick'


const Page = (props) => {

    const postType = 'page';
    let endpoint
    let theContent
    let pageContent


    // Check if referrer is <Homepage/> or <Route/>
    if (props.id) {
        endpoint = props.id
        theContent = Process(postType, endpoint, props.id)
        pageContent = theContent
    }
    else if (props.match) {
        endpoint = props.match.params.id
        theContent = Process(postType, endpoint, props.match)
        pageContent = theContent
    }

    // If Process.js returns data
    if (pageContent) {
        const title = pageContent.map(html => (html.title.rendered))

        return (
            <div id="single" className="page-wrapper" style={{ minHeight: '100vh' }}>
                <Head title={title} />
                <div className="wp-page-html" >
                    <div onClick={handleClicks} dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>
        );
    }
    // return 404 for requests referred by <Route/>
    else if (props.match) {
        return (
            <FourOFour />
        )
    }
    // return blank for everything else...
    else {
        return (
            <div className="page-wrapper" style={{ minHeight: '101vh' }}></div>
        );
    }

    // Functions //////////////////////////////////////////////////////////////////////

    function createMarkup() {
        return { __html: pageContent.map(html => (html.content_shortcode)) };
    }

    function handleClicks(e) {
        handleClick(e, props)
    }
}

export default withRouter(Page);