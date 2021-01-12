//JQuery introduction

$(".square").click(function () {
  console.log("el cuadrado es ok!");
});

$(".circle").click(function () {
  console.log("el círculo es ok!");
});

//JQuery selectors

$(".button").click(function () {
  $("#text").hide();
});

//JQuery advanced selectors

/*Ocultará el primer li del primer ul que encuentre*/
$(".button").click(function () {
  $("ul li:first").hide();
});

/*Ocultará el primer li de CADA ul que encuentre*/
$(".button").click(function () {
  $("ul li:first-child").hide();
});

/*this use:
En el bloque de código a continuación indicamos que cuando la página se encuentre
cargada (document ready) se empezará a ejecutar una función en todos los p que hará que
se ocultarán cuando se haga click sobre sí mismo*/

$(document).ready(function () {
  $(".thisExample").click(function () {
    $(this).hide();
  });
});

/*.mouseenter es una acción Jquery que funciona cuando el ratón hace hover sobre el elemento indicado*/
/*.mouseleave es una acción Jquery que funciona cuando el ratón hace mouseover sobre el elemento indicado*/
/*.mousedown es una acción Jquery que funciona cuando el ratón hace click en cualquiera de sus botones*/
/*.focus es una acción JQuery que funciona al seleccionar un input o un botón (por ejemplo)*/
/*.blur es una acción JQuery que funciona al perder el foco en un elemento indicado*/

//Manipulate CSS using JQuery
/* En el primer párrafo cambiamos una única propiedad, para varias propiedades (segundo párrafo)
la sintaxis cambia y se usa un objeto dentro de los paréntesis de la acción CSS: */

$(".cssButton").click(function () {
  console.log($(".cssParragraph").css("color", "red"));
  console.log(
    $(".cssParragraphTwo").css({
      color: "white",
      "background-color": "skyblue",
    })
  );
});

//Manipulate HTML using JQuery

/*El btn1 podrá cambiar el contenido del elemento html seleccionado, 
el segundo botón podrá cambiar el contenido añadiendo html directamente y 
el tercer botón podrá modificar el value de los inputs:*/

$(document).ready(function () {
  $(".btn1").click(function () {
    $(".htmlParragraph").text("Hello Marta!");
  });

  $(".btn2").click(function () {
    $(".htmlParragraphTwo").html("<strong>I love my people</strong>");
  });

  $(".btn3").click(function () {
    $(".htmlInput").val("Minnie Mouse");
  });
});

//Adding HTML using JQuery

/*.append añade contenido al final del elemento seleccionado (ya sea contenido string
o html):

$(document).ready(function () {
  $(".htmlBtn1").click(function () {
    $(".htmlP").append("<strong> Hola! Soy un appended de esos!</strong>");
  });

  $(".htmlBtn2").click(function () {
    $(".htmlList").append(
      "<li class='htmlLi'> Hola! Soy un appended en formato li!</li>"
    );
  });
});
*/

/*.prepend hace lo mismo que el anterior pero al principio del elemento seleccionado: 

$(document).ready(function () {
  $(".htmlBtn1").click(function () {
    $(".htmlP").prepend("<strong> Hola! Soy un appended de esos!</strong>");
  });

  $(".htmlBtn2").click(function () {
    $(".htmlList").prepend(
      "<li class='htmlLi'> Hola! Soy un appended en formato li!</li>"
    );
  });
});
*/

/*Podemos hacer append o prepend de variables también:*/
$(document).ready(function () {
  $(".htmlBtn1").click(function () {
    const content = $("<p> </p>").text("Hola!");
    $(".htmlP").prepend(content);
  });

  $(".htmlBtn2").click(function () {
    $(".htmlList").prepend(
      "<li class='htmlLi'> Hola! Soy un appended en formato li!</li>"
    );
  });
});

/*.after y .before funcionan igual pero en vez de introducir el contenido
dentro del elemento HTML seleccionado lo hará después o antes.*/

//Adding, removing and toggleling the classes:

$(document).ready(function () {
  $(".classBtn").click(function () {
    $(".classHeadingOne, .classHeadingTwo, .classPOne").addClass("blue");
    $(".classDiv").addClass("important");
  });

  $(".classBtnRm").click(function () {
    $(".classHeadingOne, .classHeadingTwo, .classPOne").removeClass("blue");
    $(".classDiv").removeClass("important");
  });

  $(".classBtnToggle").click(function () {
    $(".classHeadingOne, .classHeadingTwo, .classPOne").toggleClass("blue");
    $(".classDiv").toggleClass("important");
  });
});

//JQuery hide and show methods:
/*Entre los paréntesis podremos indicar el tiempo en milisegundos que va a tardar
en transicionar a oculto o mostrarse. Además, después de una coma le podemos dar
una función callback que funcionará cuando la acción de hide/show acabe de ocurrir:*/

$(document).ready(function () {
  $(".hideBtn").click(function () {
    $(".hideP").hide(3000, function () {
      console.log("p está oculto!");
    });
  });

  $(".showBtn").click(function () {
    $(".hideP").show(3000);
  });
});

//JQuery fade and slide methods:
/*Entre los paréntesis podemos pasarle parámetros: rapidez con la que aparece, en ms
o poniendo "slow", callback, etc 
fadeIn: hará aparecer el elemento y fadeOut: lo hará desaparecer de nuevo.
Tenemos que darle estilo inicial de display: none!!!! importante!!!!
fadeToggle hará toggle de fade in y out y fadeTo hará fade hasta un punto de opacidad
concreto que le marquemos entre paréntesis:
*/

$(".fadeBtn").click(function () {
  $(".fadeDivOne").fadeIn();
});

$(".fadeOutBtn").click(function () {
  $(".fadeDivOne").fadeOut();
});

$(".fadeToggleBtn").click(function () {
  $(".fadeDivOne").fadeToggle();
});

$(".fadeToBtn").click(function () {
  $(".fadeDivOne").fadeTo(1000, 0.4);
});

//slide method:

$(".slideDiv").click(function () {
  $(".slideDivTwo").slideDown("slow");
});

$(".slideDiv").click(function () {
  $(".slideDivThree").slideUp("slow");
});

//JQuery animate:

$(".animateBtn").click(function () {
  $(".animateDiv").animate({
    "margin-left": "250px",
  });
});
