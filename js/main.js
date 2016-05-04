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
});
