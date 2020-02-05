// eslint-disable-next-line
import React, { useEffect, useState } from 'react';



const Comments = (props) => {

    let postItems;
    const apiUrl = global.Configs.apiUrl;


        async function getMenu() {
            const response = await fetch(`${apiUrl}/wp-json/wp/v2/comments?author_email=[author email]&author_name=[author name]&content=test&post=185`, {
                method: 'POST'})
            console.log(response);
        }
        getMenu()
    

    return (
        <div className="page-wrapper">
         {postItems}
        </div>
    );
}

export default Comments;