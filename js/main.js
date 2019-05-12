// Fade In Page Elements

// $(document).on("scroll", function () {
//   var pageTop = $(document).scrollTop();
//   var pageBottom = pageTop + $(window).height();
//   var tags = $("div, img");
//
//   for (var i = 0; i < tags.length; i++) {
//     var tag = tags[i];
//
//     if ($(tag).position().top < pageBottom){
//       $(tag).addClass("visible");
//     } else {
//       $(tag).removeClass("visible");
//     }
//   }
// });

$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.1s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});
