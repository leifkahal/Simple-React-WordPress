import React from "react";
import { renderToString } from "react-dom/server";
import express from 'express'
import fs from 'fs'
import path from 'path'
import FourOFour from "../src/components/404";


const app = express();
const fetch = require('node-fetch');
let bloginfo;

fetch(`http://admin.simplereactwordpress.com/wp-json/wp/v2/bloginfo`)
    .then(ress => ress.json())
    .then(json => {
        bloginfo = json
    }).catch(err => console.error(err))


// Page Routes
app.get('/', (req, res) => {
    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        res.send(
            // eslint-disable-next-line
            data.replace(
                `<meta/>`,
                `<script>${'var Configs =' + global.Configs}</script><title>${json[0]}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${json[0]}"/> <meta name="twitter:description" content="${json[1]}"/> <meta name="description" content="${json[4]}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${json[0]}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[1]}"/> <meta name="twitter:image" content=""/> <meta property="og:image" content="${json[5]}"/> <meta property="og:image:url" content="${json[5]}"/> <meta property="og:image:secure_url" content="${json[5]}"/>`
            )
        )
    })

})
// had to put this here because root path would not load with it before app.get('/')
app.use('/', express.static(path.join(__dirname, '../build')))

app.get('/:id', (req, res) => {

    const slug = req.params.id
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        // get page data for replace in <head>
        fetch(`http://admin.simplereactwordpress.com/wp-json/wp/v2/pages?slug=${slug}`)
            .then(ress => ress.json())
            .then(json => {
                res.send(
                    // eslint-disable-next-line
                    data.replace(
                        `<meta/>`,
                        `<script>${'var Configs =' + global.Configs}</script><title>${json[0].title.rendered}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${json[0].title.rendered}"/> <meta name="twitter:description" content="${json[0].excerpt.rendered}"/> <meta name="description" content="${json[0].excerpt.rendered}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${json[0].title.rendered}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[0].excerpt.rendered}"/> <meta name="twitter:image" content="${json[0].fimg_url}"/> <meta property="og:image" content="${json[0].fimg_url}"/> <meta property="og:image:url" content=""/> <meta property="og:image:secure_url" content="${json[0].fimg_url}"/>`
                    ),
                )

            }).catch(err => console.error(err))
    })
})


// Post Routes
app.get('/category/:title', (req, res, next) => {

    const title = req.params.title.replace(/^\w/, c => c.toUpperCase())
    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        res.send(
            // eslint-disable-next-line
            data.replace(
                `<meta/>`,
                `<script>${'var Configs =' + global.Configs}</script><title>${title + ' | ' + json[0]}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${title + ' | ' + json[0]}"/> <meta name="twitter:description" content="${json[4]}"/> <meta name="description" content="${json[1]}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${title + ' | ' + json[0]}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[1]}"/> <meta name="twitter:image" content=""/> <meta property="og:image" content="${json[5]}"/> <meta property="og:image:url" content="${json[5]}"/> <meta property="og:image:secure_url" content="${json[5]}"/>`
            ),
        )

    })

})

app.get('/category/:title/page=:pageNum', (req, res, next) => {

    const title = req.params.title.replace(/^\w/, c => c.toUpperCase())
    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        res.send(
            // eslint-disable-next-line
            data.replace(
                `<meta/>`,
                `<script>${'var Configs =' + global.Configs}</script><title>${title + ' | ' + json[0]}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${title + ' | ' + json[0]}"/> <meta name="twitter:description" content="${json[4]}"/> <meta name="description" content="${json[1]}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${title + ' | ' + json[0]}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[1]}"/> <meta name="twitter:image" content=""/> <meta property="og:image" content="${json[5]}"/> <meta property="og:image:url" content="${json[5]}"/> <meta property="og:image:secure_url" content="${json[5]}"/>`
            ),
        )

    })

})

app.get('/tag/:tag', (req, res, next) => {

    const title = req.params.tag.replace(/^\w/, c => c.toUpperCase());
    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        res.send(
            // eslint-disable-next-line
            data.replace(
                `<meta/>`,
                `<script>${'var Configs =' + global.Configs}</script><title>${title + ' | ' + json[0]}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${title + ' | ' + json[0]}"/> <meta name="twitter:description" content="${json[4]}"/> <meta name="description" content="${json[1]}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${title + ' | ' + json[0]}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[1]}"/> <meta name="twitter:image" content=""/> <meta property="og:image" content="${json[5]}"/> <meta property="og:image:url" content="${json[5]}"/> <meta property="og:image:secure_url" content="${json[5]}"/>`
            ),
        )

    })

})

app.get('/archive/:year/:month', (req, res, next) => {

    var month = new Array();
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";

    const title = 'Archives: ' + month[req.params.month] + ' ' + req.params.year;
    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        res.send(
            // eslint-disable-next-line
            data.replace(
                `<meta/>`,
                `<script>${'var Configs =' + global.Configs}</script><title>${title + ' | ' + json[0]}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${title + ' | ' + json[0]}"/> <meta name="twitter:description" content="${json[4]}"/> <meta name="description" content="${json[1]}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${title + ' | ' + json[0]}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[1]}"/> <meta name="twitter:image" content=""/> <meta property="og:image" content="${json[5]}"/> <meta property="og:image:url" content="${json[5]}"/> <meta property="og:image:secure_url" content="${json[5]}"/>`
            ),
        )

    })

})

app.get('/:post/:id/', (req, res, next) => {

    const slug = req.params.id
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        // get page data for replace in <head>
        fetch(`http://admin.simplereactwordpress.com/wp-json/wp/v2/posts?slug=${slug}`)
            .then(ress => ress.json())
            .then(json => {
                res.send(
                    // eslint-disable-next-line
                    data.replace(
                        `<meta/>`,
                        `<script>${'var Configs =' + global.Configs}</script><title>${json[0].title.rendered}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${json[0].title.rendered}"/> <meta name="twitter:description" content="${json[0].excerpt.rendered}"/> <meta name="description" content="${json[0].excerpt.rendered}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${json[0].title.rendered}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[0].excerpt.rendered}"/> <meta name="twitter:image" content="${json[0].fimg_url}"/> <meta property="og:image" content="${json[0].fimg_url}"/> <meta property="og:image:url" content=""/> <meta property="og:image:secure_url" content="${json[0].fimg_url}"/>`
                    ),
                )

            }).catch(err => console.error(err))
    })

})

app.get('/page=:blogPage', (req, res, next) => {

    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        res.send(
            // eslint-disable-next-line
            data.replace(
                `<meta/>`,
                `<script>${'var Configs =' + global.Configs}</script><title>${json[0]}</title> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="${json[0]}"/> <meta name="twitter:description" content="${json[1]}"/> <meta name="description" content="${json[4]}"/> <meta property="og:url" content="${req.protocol + '://' + req.hostname + req.path}"/> <meta property="og:title" content="${json[0]}"/> <meta name="keywords" content=""/> <meta property="og:description" content="${json[1]}"/> <meta name="twitter:image" content=""/> <meta property="og:image" content="${json[5]}"/> <meta property="og:image:url" content="${json[5]}"/> <meta property="og:image:secure_url" content="${json[5]}"/>`
            ),
        )

    })

})

app.get('/*', function (req, res, next) {

    const json = bloginfo
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {

        const reactDom = renderToString(<FourOFour />)
        res.status(404).send(`<html lang="en"><head><meta content-type="text/html"><link rel="icon" href="/favicon.ico">
                <link rel="stylesheet" href="http://admin.simplereactwordpress.com/wp-content/themes/simpleReactWP/style.css?ver=1.0"><script>${'var Configs =' + global.Configs}</script>
                <meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#000000"><meta name="description" content="Web site created using create-react-app"><link rel="apple-touch-icon" href="logo192.png"><link rel="manifest" href="/manifest.json"><script src="http://admin.simplereactwordpress.com/wp-content/themes/simpleReactWP/js/config.js"></script><title>404 | Simple React WordPresss</title> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title" content="Uncategorized | Simple React WordPress"> <meta name="twitter:description" content="Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo."> <meta name="description" content="WordPress + React + Bootstrap"> <meta property="og:url" content="http://simplereactwordpress.com/category/uncategorized/"> <meta property="og:title" content="Uncategorized | Simple React WordPress"> <meta name="keywords" content=""> <meta property="og:description" content="WordPress + React + Bootstrap"> <meta name="twitter:image" content=""> <meta property="og:image" content="http://admin.simplereactwordpress.com/wp-content/uploads/2019/12/technology-3389904_1920-1.jpg"> <meta property="og:image:url" content="http://admin.simplereactwordpress.com/wp-content/uploads/2019/12/technology-3389904_1920-1.jpg"> <meta property="og:image:secure_url" content="http://admin.simplereactwordpress.com/wp-content/uploads/2019/12/technology-3389904_1920-1.jpg">
                <style>
                body {min-height:100vh !important}
                </style>
                <script>
                window.scrollTo(0, 0);
                document.domain="simplereactwordpress.com"
                </script>
                </head><body><noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">
                <div class="four-o-four-wrapper" style="background-image: url(${json[6]});background-position-x: 50%;background-position-y: 50%;">
                <div style="text-align:center;height:20vh;padding-top:20px;">${json[7]}</div>
                ${reactDom}
                <div class="wp-block-button aligncenter is-style-outline"><a id="fof" class="wp-block-button__link has-text-color has-very-dark-gray-color" href="${json[7]}" style="border-radius:50px">Homepage</a></div>
                </div>
                </div>
                <style-sheets><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" expiration="10d"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;display=swap" expiration="10d"><link rel="stylesheet" id="wp-block-library-css" href="http://admin.simplereactwordpress.com/wp-includes/css/dist/block-library/style.min.css?ver=5.3" media="all" expiration="10d"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"><link rel="stylesheet" href="http://cdn.hundositebuilder.com/css/style.css"></style-sheets></div></div><div id="spinner" style="display: none;"><div class="spinner-div"><div class="spinner-border text-primary"></div></div></div><script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

                <script>!function(l){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],a=0,p=[];a<n.length;a++)t=n[a],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&p.push(i[t][0]),i[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(l[r]=o[r]);for(s&&s(e);p.length;)p.shift()();return c.push.apply(c,u||[]),f()}function f(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==i[u]&&(n=!1)}n&&(c.splice(r--,1),e=a(a.s=t[0]))}return e}var t={},i={1:0},c=[];function a(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return l[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=l,a.c=t,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)a.d(t,n,function(e){return r[e]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/";var r=this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;f()}([])</script><script src="/static/js/2.a9fb2408.chunk.js"></script><script src="/static/js/main.67ef7463.chunk.js"></script></body></html>`)

})
})

app.listen(3001);