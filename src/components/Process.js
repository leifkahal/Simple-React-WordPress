import { useEffect, useState } from 'react';
import beforeProcess from '../assets/beforeProcess';
import afterProcess from '../assets/afterProcess'

function Process(post_type, endpoint, rand) {

    let postType;
    let apiEndpoint;
    let catSet;
    let tagSet;
    let pageNum;
    let year;
    let year2;
    let nextYear;
    let nextMonth;
    let month;
    const apiUrl = global.Configs.apiUrl;

    // build the api endpoint based on the post type
    switch (post_type) {
        case 'page':
            postType = post_type + 's';
            apiEndpoint = `?slug=` + endpoint;
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
        case 'archive':
            postType = 'posts';
            year = endpoint['year'];
            year2 = endpoint['year'];
            month = endpoint['month'];
            monthIncrement(month);
            apiEndpoint = `?after=${year}-${month}-01T00:00:00&before=${year2 + nextYear}-${nextMonth}-01T00:00:00`;
            console.log()
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
        let spinner = setTimeout(() => {  document.getElementById('spinner').style.display = 'block'; }, 250)
        beforeProcess(post_type)

        //fetch WordPress API data
        async function getWpAPi() {
            /*****************************************************************************************************
             ***These post types require more info to construct an endpoint...this is to preserve pretty urls*****
             *****************************************************************************************************/
            // get the category id from category name and set apiEndpoint
            if (catSet) {
                const categoryData = await fetch(`${apiUrl}/categories/`);
                const categoryDataContent = await categoryData.json();

                categoryDataContent.map(cat => {
                    if (cat.slug === endpoint[0]) {
                        // eslint-disable-next-line
                        return (apiEndpoint = `?categories=` + cat.id + pageNum);
                    } else return ('');
                });
            }
            // get the tag id from tag name and set apiEndpoint       
            if (tagSet) {
                const tagsData = await fetch(`${apiUrl}/tags/`);
                const tagsDataContent = await tagsData.json();

                tagsDataContent.map(tag => {
                    if (tag.slug === endpoint) {
                        // eslint-disable-next-line
                        return (apiEndpoint = `?tags=` + tag.id);
                    } else { return (''); }
                });
            }
            /*****************************************************************************************************
             **********************Finally! the actual call to the WordPress REST API*****************************
             *****************************************************************************************************/
            

            // fetch data from WordPress API
            const apiData = await fetch(`${apiUrl}/${postType}/${apiEndpoint}`);
            const theData = await apiData.json();

            // getnumber of pages from api response header to use in pagination
            global.pages = apiData.headers.get('X-WP-TotalPages');

            // check if wp-api returned the data we requested
            // failed call will either return empty or with a data object
            if (theData.data) { setData(false); }
            else if (theData.length === 0) { setData(false); }
            else { setData(theData); }
            /*****************************************************************************************************
             **********************Finally! the actual call to the WordPress REST API*****************************
             *****************************************************************************************************/
        clearTimeout(spinner);    
        afterProcess()
        
        }
        getWpAPi();
        // rand is used because this component is sometimes called by a component that is not re-rendered
    }, [rand])

    return getTheContent;

    // function to determine the number of the next month for returning a specific month's 'Archive' list.
    function monthIncrement(month) {
        if (month === '12') { nextMonth = '01'; year2 = ''; nextYear = Number(year) + 1 }
        else if (month <= 8) { nextMonth = '0' + (Number(month) + 1).toString(); nextYear = ''; }
        else { nextMonth = Number(month) + 1; nextYear = ''; }
    }

}

export default Process;