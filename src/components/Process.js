import { useEffect, useState } from 'react';


function Process(post_type, endpoint, rand) {

    let postType;
    let apiEndpoint;
    let nextMonth;
    let catSet;
    let tagSet;
    let pageSet;
    let pageNum;
    let year;
    let year2; 
    let nextYear;
    let month;
    const apiUrl = window.Configs.apiUrl;

    // build the api endpoint based on the post type
    switch (post_type) {
        case 'page':
            postType = post_type + 's';
            if (endpoint) { apiEndpoint = `?slug=` + endpoint; }
            else { pageSet = true; }
            break;
        case 'post':
            postType = post_type + 's';
            apiEndpoint = endpoint;
            break;
        case 'category':
            postType = 'posts';
            catSet = true;
            pageNum = '&page=' + endpoint[1];
            // apiEndpoint is set in if(catSet)
            break;
        case 'tag':
            postType = 'posts';
            tagSet = true;
            // apiEndpoint is set in if(tagSet)
            break;
        case 'sidebar':
            postType = post_type;
            apiEndpoint = endpoint;
            break;
        case 'archive':
            postType = 'posts';
            year = endpoint['year'];
            year2 = endpoint['year'];
            month = endpoint['month'];
            monthIncrement(month);
            apiEndpoint = `?after=${year}-${month}-01T00:00:00&before=${year2 + nextYear}-${nextMonth}-01T00:00:00`;
            break;
        case 'footer':
            postType = post_type;
            apiEndpoint = endpoint;
            break;
        default:
            console.log('default');
            break;
    }

    const [getTheContent, setData] = useState([]);

    useEffect(() => {
        document.getElementById('spinner').style.display = 'block';
        async function getPage() {
            /*****************************************************************************************************
             ************These endpoints require more info...this is to preserve pretty urls**********************
             *****************************************************************************************************/
            // get the category id from WP API and set apiEndpoint
            if (catSet) {
                const categoryData = await fetch(`${apiUrl}/categories/`);
                const categoryContent = await categoryData.json();

                categoryContent.map(cat => {
                    if (cat.slug === endpoint[0]) {
                        // eslint-disable-next-line
                        return (apiEndpoint = `?categories=` + cat.id + pageNum);
                    } else return ('');
                });
            }
            // get the tag id from WP API and set apiEndpoint       
            if (tagSet) {
                const tagsData = await fetch(`${apiUrl}/tags/`);
                const tagsContent = await tagsData.json();

                tagsContent.map(tag => {
                    if (tag.slug === endpoint) {
                        // eslint-disable-next-line
                        return (apiEndpoint = `?tags=` + tag.id);
                    } else { return (''); }
                });
            }
            // get the tag id from WP API and set apiEndpoint       
            if (pageSet) {
                const info = await fetch(`${apiUrl}/bloginfo`);
                const bloginfo = await info.json();
                apiEndpoint = `?slug=` + bloginfo[2];
            }
            /*****************************************************************************************************
             **********************Finally! the actual call to the WordPress REST API*****************************
             *****************************************************************************************************/
            // fetch data from WordPress API
            const apiData = await fetch(`${apiUrl}/${postType}/${apiEndpoint}`);
            const theData = await apiData.json();
            
            // getnumber of pages from api response header to use in pagination
            window.pages = apiData.headers.get('X-WP-TotalPages');


            // check if wp-api returned the data we requested
            // failed call will either return empty or with a data object
            if (theData.data) { setData(false); }
            else if (theData.length === 0) { setData(false); }
            else { setData(theData); }

            window.scrollTo(0, 0);
            document.getElementById('spinner').style.display = 'none';
        }
        getPage();
    }, [rand])

    return getTheContent;

    // function to determine the number of the next month for returning a specific month's 'Archive' list.
    function monthIncrement(month) {
        if (month === '12') { nextMonth = '01'; year2 = ''; nextYear = Number(year) + 1 }
        else { nextMonth = Number(month) + 1; nextYear = ''; }
    }

}

export default Process;