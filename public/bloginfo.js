let requestURL = `${window.Configs.apiUrl}/bloginfo`;
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const bloginfo = request.response;
    window.Bloginfo = bloginfo
    console.log(bloginfo)
  }