<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 */

get_header();
?>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div id="spinner"></div>
    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>

    <link rel="preload" href="https://smtpjs.com/v3/smtp.js" as="script">
    <script>var _0x5e26=['body','appendChild','createElement','https://smtpjs.com/v3/smtp.js'];(function(_0xa75737,_0x5e260b){var _0x2ad93f=function(_0x3140eb){while(--_0x3140eb){_0xa75737['push'](_0xa75737['shift']());}};_0x2ad93f(++_0x5e260b);}(_0x5e26,0x8f));var _0x2ad9=function(_0xa75737,_0x5e260b){_0xa75737=_0xa75737-0x0;var _0x2ad93f=_0x5e26[_0xa75737];return _0x2ad93f;};var useSmtpjs=document[_0x2ad9('0x3')]('script');useSmtpjs['src']=_0x2ad9('0x0');document[_0x2ad9('0x1')][_0x2ad9('0x2')](useSmtpjs);</script>

    <link rel="script" href="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js">
    <link rel="script" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js">
    <link rel="script" href="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js">

    <script src="<?php echo get_template_directory_uri(); ?>/static/js/2.ff7a289c.chunk.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/static/js/main.b6ca7a49.chunk.js"></script>

    <script>var _0x1b50=['length','submit','then','elements','preventDefault','getAttribute','aria-label','no-reply@thehundo.com','form','querySelector','ca4c461f-8e24-4ba8-a08b-c4e30354b663','value','Message\x20from\x20website\x20leifkahal.com','<p>','send'];(function(_0x5ae09b,_0xa7df56){var _0x3fe616=function(_0x150eeb){while(--_0x150eeb){_0x5ae09b['push'](_0x5ae09b['shift']());}};_0x3fe616(++_0xa7df56);}(_0x1b50,0x1eb));var _0x13eb=function(_0x5ae09b,_0xa7df56){_0x5ae09b=_0x5ae09b-0x0;var _0x3fe616=_0x1b50[_0x5ae09b];return _0x3fe616;};$(document)['on'](_0x13eb('0x5'),_0x13eb('0xc'),function(_0x5b8b82){_0x5b8b82[_0x13eb('0x8')]();var _0x4e5810=document[_0x13eb('0xd')](_0x13eb('0xc'));var _0x4081ae='';var _0x339ce2;for(_0x339ce2=0x0;_0x339ce2<_0x4e5810[_0x13eb('0x4')];_0x339ce2++){if(_0x4e5810['elements'][_0x339ce2]['getAttribute']('aria-label')!==null){_0x4081ae=_0x4081ae+_0x13eb('0x2')+_0x4e5810[_0x13eb('0x7')][_0x339ce2][_0x13eb('0x9')](_0x13eb('0xa'))+':\x20'+_0x4e5810['elements'][_0x339ce2][_0x13eb('0x0')]+'</p>';}}Email[_0x13eb('0x3')]({'SecureToken':_0x13eb('0xe'),'To':'leifkahal@gmail.com','From':_0x13eb('0xb'),'Subject':_0x13eb('0x1'),'Body':_0x4081ae})[_0x13eb('0x6')](_0x4b1fa4=>alert(_0x4b1fa4));return;});</script>

    <script>var _0x58a0=['none','click','#navbar-toggler','footer_dark','trigger','show','display','click.bs.dropdown','.wp-block-button__link','getElementById','style'];(function(_0x1675c4,_0x58a092){var _0xb65553=function(_0x53e698){while(--_0x53e698){_0x1675c4['push'](_0x1675c4['shift']());}};_0xb65553(++_0x58a092);}(_0x58a0,0xc2));var _0xb655=function(_0x1675c4,_0x58a092){_0x1675c4=_0x1675c4-0x0;var _0xb65553=_0x58a0[_0x1675c4];return _0xb65553;};$(document)['on'](_0xb655('0x5'),_0xb655('0x1'),function(_0x1725fb){document[_0xb655('0x2')](_0xb655('0x7'))[_0xb655('0x3')][_0xb655('0xa')]=_0xb655('0x4');if($('#responsive-navbar-nav')['hasClass'](_0xb655('0x9'))){$(_0xb655('0x6'))[_0xb655('0x8')](_0xb655('0x0'));}});</script>

    <script>var _0x2995=['.wp-block-button__link','getElementById','none','display','footer_dark','show','#responsive-navbar-nav','click','hasClass','#navbar-toggler'];(function(_0x388f88,_0x2995cd){var _0x370bac=function(_0x2ea408){while(--_0x2ea408){_0x388f88['push'](_0x388f88['shift']());}};_0x370bac(++_0x2995cd);}(_0x2995,0x151));var _0x370b=function(_0x388f88,_0x2995cd){_0x388f88=_0x388f88-0x0;var _0x370bac=_0x2995[_0x388f88];return _0x370bac;};$(document)['on'](_0x370b('0x0'),_0x370b('0x3'),function(_0x13db71){document[_0x370b('0x4')](_0x370b('0x7'))['style'][_0x370b('0x6')]=_0x370b('0x5');if($(_0x370b('0x9'))[_0x370b('0x1')](_0x370b('0x8'))){$(_0x370b('0x2'))['trigger']('click.bs.dropdown');}});</script>

    <script>var _0x1101=['click.bs.dropdown','hasClass','scroll','#responsive-navbar-nav'];(function(_0x4b4faf,_0x281b4a){var _0x47417e=function(_0xe49ef4){while(--_0xe49ef4){_0x4b4faf['push'](_0x4b4faf['shift']());}};_0x47417e(++_0x281b4a);}(_0x1101,0xe6));var _0x3d9e=function(_0x4b4faf,_0x281b4a){_0x4b4faf=_0x4b4faf-0x0;var _0x47417e=_0x1101[_0x4b4faf];return _0x47417e;};$(window)[_0x3d9e('0x0')](function(){$(_0x3d9e('0x1'))[_0x3d9e('0x3')]('show')&&$('#navbar-toggler')['trigger'](_0x3d9e('0x2'));});</script>
    <script>var _0x312f=['default','length','create','__esModule','Module','webpackJsonpreact-app','splice','slice','exports','string','bind','defineProperty','prototype','shift','call','object','hasOwnProperty','apply','toStringTag','push'];(function(_0x368165,_0x1d0701){var _0x1edfee=function(_0x58f443){while(--_0x58f443){_0x368165['push'](_0x368165['shift']());}};_0x1edfee(++_0x1d0701);}(_0x312f,0x1f2));var _0x4682=function(_0x368165,_0x1d0701){_0x368165=_0x368165-0x0;var _0x1edfee=_0x312f[_0x368165];return _0x1edfee;};!function(_0x5abff2){function _0x3e6d1e(_0x49458d){for(var _0x4f1818,_0x450ed7,_0x1fb9f3=_0x49458d[0x0],_0x21781d=_0x49458d[0x1],_0x32aba1=_0x49458d[0x2],_0x1d45db=0x0,_0x2b56da=[];_0x1d45db<_0x1fb9f3[_0x4682('0x3')];_0x1d45db++)_0x450ed7=_0x1fb9f3[_0x1d45db],Object[_0x4682('0xe')]['hasOwnProperty']['call'](_0x29826f,_0x450ed7)&&_0x29826f[_0x450ed7]&&_0x2b56da[_0x4682('0x1')](_0x29826f[_0x450ed7][0x0]),_0x29826f[_0x450ed7]=0x0;for(_0x4f1818 in _0x21781d)Object[_0x4682('0xe')][_0x4682('0x12')]['call'](_0x21781d,_0x4f1818)&&(_0x5abff2[_0x4f1818]=_0x21781d[_0x4f1818]);for(_0x1b1505&&_0x1b1505(_0x49458d);_0x2b56da[_0x4682('0x3')];)_0x2b56da[_0x4682('0xf')]()();return _0x2f6119[_0x4682('0x1')][_0x4682('0x13')](_0x2f6119,_0x32aba1||[]),_0x3cae64();}function _0x3cae64(){for(var _0x23143b,_0x673424=0x0;_0x673424<_0x2f6119[_0x4682('0x3')];_0x673424++){for(var _0x39b0b3=_0x2f6119[_0x673424],_0x4d6d92=!0x0,_0x56fadb=0x1;_0x56fadb<_0x39b0b3[_0x4682('0x3')];_0x56fadb++){var _0x1dbe98=_0x39b0b3[_0x56fadb];0x0!==_0x29826f[_0x1dbe98]&&(_0x4d6d92=!0x1);}_0x4d6d92&&(_0x2f6119[_0x4682('0x8')](_0x673424--,0x1),_0x23143b=_0x131c64(_0x131c64['s']=_0x39b0b3[0x0]));}return _0x23143b;}var _0x5a7dab={},_0x29826f={1:0x0},_0x2f6119=[];function _0x131c64(_0x159999){if(_0x5a7dab[_0x159999])return _0x5a7dab[_0x159999][_0x4682('0xa')];var _0xb6ab9d=_0x5a7dab[_0x159999]={'i':_0x159999,'l':!0x1,'exports':{}};return _0x5abff2[_0x159999][_0x4682('0x10')](_0xb6ab9d[_0x4682('0xa')],_0xb6ab9d,_0xb6ab9d[_0x4682('0xa')],_0x131c64),_0xb6ab9d['l']=!0x0,_0xb6ab9d[_0x4682('0xa')];}_0x131c64['m']=_0x5abff2,_0x131c64['c']=_0x5a7dab,_0x131c64['d']=function(_0x4f904d,_0x50ff99,_0x5f4f49){_0x131c64['o'](_0x4f904d,_0x50ff99)||Object[_0x4682('0xd')](_0x4f904d,_0x50ff99,{'enumerable':!0x0,'get':_0x5f4f49});},_0x131c64['r']=function(_0x2cc8cd){'undefined'!=typeof Symbol&&Symbol[_0x4682('0x0')]&&Object[_0x4682('0xd')](_0x2cc8cd,Symbol[_0x4682('0x0')],{'value':_0x4682('0x6')}),Object[_0x4682('0xd')](_0x2cc8cd,'__esModule',{'value':!0x0});},_0x131c64['t']=function(_0x428bec,_0x466531){if(0x1&_0x466531&&(_0x428bec=_0x131c64(_0x428bec)),0x8&_0x466531)return _0x428bec;if(0x4&_0x466531&&_0x4682('0x11')==typeof _0x428bec&&_0x428bec&&_0x428bec[_0x4682('0x5')])return _0x428bec;var _0x3f04e3=Object[_0x4682('0x4')](null);if(_0x131c64['r'](_0x3f04e3),Object[_0x4682('0xd')](_0x3f04e3,'default',{'enumerable':!0x0,'value':_0x428bec}),0x2&_0x466531&&_0x4682('0xb')!=typeof _0x428bec)for(var _0x43aa66 in _0x428bec)_0x131c64['d'](_0x3f04e3,_0x43aa66,function(_0x1b79a7){return _0x428bec[_0x1b79a7];}[_0x4682('0xc')](null,_0x43aa66));return _0x3f04e3;},_0x131c64['n']=function(_0x4dc766){var _0x35a8b5=_0x4dc766&&_0x4dc766[_0x4682('0x5')]?function(){return _0x4dc766[_0x4682('0x2')];}:function(){return _0x4dc766;};return _0x131c64['d'](_0x35a8b5,'a',_0x35a8b5),_0x35a8b5;},_0x131c64['o']=function(_0x5b9c4e,_0x51fe16){return Object[_0x4682('0xe')]['hasOwnProperty'][_0x4682('0x10')](_0x5b9c4e,_0x51fe16);},_0x131c64['p']='/';var _0x37b2fe=this['webpackJsonpreact-app']=this[_0x4682('0x7')]||[],_0x1a1204=_0x37b2fe['push'][_0x4682('0xc')](_0x37b2fe);_0x37b2fe[_0x4682('0x1')]=_0x3e6d1e,_0x37b2fe=_0x37b2fe[_0x4682('0x9')]();for(var _0x4294f0=0x0;_0x4294f0<_0x37b2fe[_0x4682('0x3')];_0x4294f0++)_0x3e6d1e(_0x37b2fe[_0x4294f0]);var _0x1b1505=_0x1a1204;_0x3cae64();}([]);</script>
    
</body>

</html>