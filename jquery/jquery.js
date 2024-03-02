$(document).ready(function() {
    inicializar();

});

function inicializar(){
    $("img").css("filter","grayscale(100%)");
}



    $( "#primeraPeli").on( {   
        mouseenter: function(){
            $("#primeraPeli").css("filter","grayscale(0%)");
        },

        mouseleave: function(){
            $("#primeraPeli").css("filter","grayscale(100%)");
        }

    });


