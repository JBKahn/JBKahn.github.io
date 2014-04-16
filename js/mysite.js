/*global $, document, */
$(document).ready(function () {
    "use strict";
    $('#aboutMe').fadeIn(2200);
    $('.circle-wrap').hover(
        function () {
            $('.circle', this).stop().animate({width : '80px', height : '80px', 'margin-top' : '-40px', 'margin-left' : '-40px'  }, 200);
            $('.circle i.other', this).stop().animate({'font-size' : '43px' }, 200);
            $('.circle i.fa-github', this).stop().animate({'font-size' : '55px' }, 200);
        },
        function () {
            $('.circle', this).stop().animate({width : '60px', height : '60px', 'margin-top' : '-30px', 'margin-left' : '-30px'  }, 100);
            $('.circle i.other', this).stop().animate({'font-size' : '30px' }, 100);
            $('.circle i.fa-github', this).stop().animate({'font-size' : '40px' }, 100);
        }
    );
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49300323-1', 'jbkahn.github.io');
ga('send', 'pageview');

/**
* Function that tracks a click on an outbound link in Google Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label.
*/
var trackOutboundLink = function (url) {
    ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
        function () {
            document.location = url;
        }
    });
};
