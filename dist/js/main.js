
$(document).ready(function() {
    new WOW().init();
      $('#fullpage').fullpage({
        scrollOverflow: true,
        css3:false,
        scrollBar:true,
        anchors: ['inicio', 'marca-la-diferencia', 'nuestra-ideologia', 'nosotros', 'servicios','te-ayudamos','te-proponemos','portafolio','equipo','grandes-ideas','clientes','contactanos'],
        menu: '#menu',
        scrollingSpeed: 1000
      });
    });