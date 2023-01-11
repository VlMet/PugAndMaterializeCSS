document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.autocomplete');
    let instances = M.Autocomplete.init(elems, options);
  });

$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
        indicators: true,
        fullWidth: true
    })

    $('.modal').modal();

    $('.parallax').parallax();

    $('input.autocomplete').autocomplete({
        data: {
          "Зима": null,
          "Весна": null,
          "Лето": null,
          "Осень": null
        },
      });
  });