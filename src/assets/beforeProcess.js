function beforeProcess(post_type) {
    window.scrollTo(0, 0);
    document.getElementById("footer_dark").style.opacity = "0"
    if (document.querySelector(".react-fof-wrapper")) {
        document.querySelector('.react-fof-wrapper').style.display = 'none';
    }
    document.getElementById('spinner').style.display = 'block';
    if (document.querySelector(".single-post")) {
        document.querySelector(".single-post").style.opacity = "0"
    }
    if (post_type === "page") {
        document.querySelector(".sidebar-container").style.display = "none"
    }
    else {
        document.querySelector(".sidebar-container").style.display = "block"
        document.querySelector(".sidebar-container").style.position = "relative"
    }
    if (document.querySelector("#four-o-four")) {
        document.querySelector(".sidebar-container").style.position = "fixed"
    }
}

export default beforeProcess