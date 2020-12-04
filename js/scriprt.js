$('#view-work').on('click', function(){
    const images = $("img").position().top;

    $('html, body').animate({
        scrollTop: images,

    }, 900);
});