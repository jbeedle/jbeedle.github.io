$(document).ready(function(){
	$('.header').height($(window).height());
})


  (function(d,t) {
    var BASE_URL = "https://app.chatwoot.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src= BASE_URL + "/packs/js/sdk.js";
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'CXrtFEvX5ERFunJnJWazbfTX',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
