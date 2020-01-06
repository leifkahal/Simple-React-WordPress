import React  from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'

const Paginate = (props) => {

    let active;
    let currentPage = props.currentPage;
    //check if current page is set and give it a default
    if (!currentPage) { currentPage = '1'; }
    // loop through number of pages and create buttons
    let items = [];
    for (let number = 1; number <= window.pages; number++) {
        if (number === Number(currentPage)) { active = 'active'; }
        else { active = '' }
        items.push(
            <li key={number} className={"page-item " + active}>
                <Link to={"page=" + number} className="page-link" onClick={window.scrollTo(0, 0)}>{number}</Link>
            </li>,
        );
    }
    
    if (window.pages > 1) {
        return (
            <Pagination>{items}</Pagination>
        );
    } else return ('');
}

export default Paginate;