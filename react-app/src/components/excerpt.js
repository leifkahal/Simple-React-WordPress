import React from 'react';

const Excerpt = (props) => {
    if (props.excerpt.length > 0) {
        return (<h5 className="hero">{props.excerpt}</h5>)
    }
    else {
        return (<p>Text in the excerpt will be displayed here.</p>)
    }
}

export default Excerpt; 