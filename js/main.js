window.addEventListener('load', function () {
    $('a[href^="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var shift = target.html().length ? 0 : target.height();
                $('.content').animate({
                     scrollTop: target.offset().top + $('.content').scrollTop() + shift
                }, 300);
                return false;
            }
        }
    });

    $("#show-menu").click(function(e) {
        e.preventDefault();
        $(".menu").toggleClass('visible');
    });



    $('.menu a').click(function(e) {
        $(".menu").removeClass("visible");
    });


    if(!localStorage.rememberLanguage) {
        window.localStorage.rememberLanguage = "en";
    }
    var i18n = domI18n({
        languages: ['en', 'uk'],
        currentLanguage: window.localStorage.rememberLanguage

    });
    $(".uk").click(function (e) {
        e.preventDefault();
        i18n.changeLanguage('uk');
        window.localStorage.rememberLanguage = "uk";
    });
    $(".en").click(function (e) {
        e.preventDefault();
        i18n.changeLanguage('en');
        window.localStorage.rememberLanguage = "en";
    });


});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78006053-1', 'auto');
ga('send', 'pageview');
