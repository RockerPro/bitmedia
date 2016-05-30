
$(document).ready(function() {
    new WOW().init();
      $('#fullpage').fullpage({
        scrollOverflow: true,
        css3:false,
        scrollBar:true,
        anchors: ['Inicio', 'Nosotros', 'Servicios', 'Portafolio', 'Clientes','Contáctanos','8','9','10','11','12','13'],
        menu: '#menu',
        scrollingSpeed: 1000
      });
    });