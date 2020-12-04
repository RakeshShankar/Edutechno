$(window).on("load", function () {
    $(".loader .inner").fadeOut(300, function () {
        $(".loader").fadeOut(500);
    });
})


$('#nav, .a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});