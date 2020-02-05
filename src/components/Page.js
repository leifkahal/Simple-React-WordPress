import React from 'react'
import Process from './Process'
import Head from './Head'
import { withRouter } from 'react-router-dom'


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
            <div className="page-wrapper close-nav" style={{ minHeight: '100vh' }}>
                <Head title={title} />
                <div className='wp-page-html'>
                    <div onClick={handleClick} dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>
        );
    }
    // return 404 for requests reffered by <Route/>
    else if (props.match) {
        return (
            <div className="page-wrapper wp-page-html">
                <h1>404 Not Found</h1>
            </div>)
    }
    // return blank for everything else...
    else {
        return (
            <div className="page-wrapper" style={{ minHeight: '101vh' }}></div>
        );
    }

    // Functions //////////////////////////////////////////////////////////////////////
    function createMarkup() {
        return { __html: pageContent.map(html => (html.content.rendered)) };
    }

    function handleClick(e) {
        let closestA = e.target.closest('a')
        if (closestA === null) {return}
        if (closestA.getAttribute("target") === '_blank') {
            let getHref = closestA + ' '
            if (!getHref) return
            e.preventDefault()
            let resHref = getHref.split(/href="(.*?...)"/)
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '')
            window.open(finalHref,'_blank');
        }
        else {
            let getHref = closestA + ' ';
            if (!getHref) return;
            e.preventDefault();
            let resHref = getHref.split(/href="(.*?...)"/);
            let finalHref = resHref[0].replace(window.Configs.reactUrl, '').replace(':3000', '')
            props.history.push(finalHref)
        }
    }
}

export default withRouter(Page);