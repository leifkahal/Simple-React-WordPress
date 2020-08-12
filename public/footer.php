<script>$(document).on("click", ".wp-block-button__link", (function (o) { window.scrollTo(0, 0), $("#responsive-navbar-nav").hasClass("show") && $("#navbar-toggler").trigger("click.bs.dropdown"), document.getElementById("footer_dark").style.opacity = "0", document.querySelector(".single-post") && (document.querySelector(".single-post").style.opacity = "0") }))</script>
    
    <script>$(document).on("click", ".react-link", (function () { document.getElementById("footer_dark").style.opacity = "0", $("#responsive-navbar-nav").hasClass("show") && $("#navbar-toggler").trigger("click.bs.dropdown") }))</script>
    
    <script>$(window).scroll((function () { $("#responsive-navbar-nav").hasClass("show") && $("#navbar-toggler").trigger("click.bs.dropdown") }))</script>
        
    <script>!function (e) { function r(r) { for (var n, l, p = r[0], i = r[1], a = r[2], c = 0, s = []; c < p.length; c++)l = p[c], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0; for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]); for (f && f(r); s.length;)s.shift()(); return u.push.apply(u, a || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, p = 1; p < t.length; p++) { var i = t[p]; 0 !== o[i] && (n = !1) } n && (u.splice(r--, 1), e = l(l.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function l(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports } l.m = e, l.c = n, l.d = function (e, r, t) { l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, l.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function (e, r) { if (1 & r && (e = l(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) l.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, l.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return l.d(r, "a", r), r }, l.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, l.p = "/"; var p = this["webpackJsonpsimple-react-wordpress"] = this["webpackJsonpsimple-react-wordpress"] || [], i = p.push.bind(p); p.push = r, p = p.slice(); for (var a = 0; a < p.length; a++)r(p[a]); var f = i; t() }([])</script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/config.js"></script>
    
    <script src="<?php echo get_template_directory_uri(); ?>/static/js/2.c6155dd9.chunk.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/static/js/main.e24069ec.chunk.js"></script>

<?php 
wp_head();
wp_footer();
?>
</body>

</html>