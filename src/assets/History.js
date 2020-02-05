import createBrowserHistory from 'history/createBrowserHistory';

// export default createBrowserHistory(); --> This redirects the ### ### URL 
// but does not physically redirect

export default createBrowserHistory({
//pass a configuration object here if needed
forceRefresh: true
});