//handles links in the html content from WordPress
function handleClick(e, props) {
    let closestA = e.target.closest('a')
    let getHref = closestA + ' '
    //if link is set to open in new tab
    if (closestA.getAttribute("target") === '_blank') {
        if (!getHref) return
        e.preventDefault()
        let resHref = getHref.split(/href="(.*?...)"/)
        let finalHref = resHref[0].replace(window.Configs.reactUrl, '')
        window.open(finalHref, '_blank');
    }
    //else the link is handled by BrowserRouter
    else {
        let getHref = closestA + ' ';
        if (!getHref) return;
        e.preventDefault();

        let resHref = getHref.split(/href="(.*?...)"/);

        let url = new URL(resHref[0], resHref[0])
        props.history.push(url.pathname)
    }
}

export default handleClick