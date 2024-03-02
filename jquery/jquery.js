$(document).ready(function() {
    

    cargarPelicula ();
    inicializar();

});

function inicializar(){
    $("img").css("filter","grayscale(100%)");
}

/*PREGUNTAS*/
function cargarPelicula () {


    $("#primeraPeli").on( {   
        mouseenter: function(){
            $("#primeraPeli").css("filter","brightness(150%)");
        },

        mouseleave: function(){
            $("#primeraPeli").css("filter","grayscale(100%)");
        },
        

        click: function(){
            $("#primeraPeli").css("border","10px solid blue");
            $("#primeraPeli").css("filter","contrast(100%)");
            $("#primeraPeli").css("filter","grayscale(0%)");
            $("#caratula_ampliada").attr("src", "./img/pel_acc.png");
           
            $(".imagenes_img_img").each(function(index) {
                $(this).attr("src", "./img/pel_acc_0" + (index+1) +".png");
            })

            $("figcaption").each(function(index) {
                $(this).text("Acción " + (index+1));
            })
        }

    });

    $("#segundaPeli").on( {   
        mouseenter: function(){
            $("#segundaPeli").css("filter","brightness(150%)");
        },

        mouseleave: function(){
            $("#segundaPeli").css("filter","grayscale(100%)");
        },

        click: function(){
            $("#segundaPeli").css("border","10px solid blue");
            $("#segundaPeli").css("filter","contrast(100%)");
            $("#segundaPeli").css("filter","grayscale(0%)");
            $("#caratula_ampliada").attr("src", "./img/pel_ani.png");

            $(".imagenes_img_img").each(function(index) {
                $(this).attr("src", "./img/pel_ani_0" + (index+1) +".png");
            });

            $("figcaption").each(function(index) {
                $(this).text("Anime " + (index+1));
            })
           
        }

    });


    $("#terceraPeli").on( {   
        mouseenter: function(){
            $("#terceraPeli").css("filter","brightness(150%)");
        },

        mouseleave: function(){
            $("#terceraPeli").css("filter","grayscale(100%)");
        },

        click: function(){
            $("#terceraPeli").css("border","10px solid blue");
            $("#terceraPeli").css("filter","contrast(100%)");
            $("#terceraPeli").css("filter","grayscale(0%)");
            $("#caratula_ampliada").attr("src", "./img/pel_med.png");
           
            $(".imagenes_img_img").each(function(index) {
                $(this).attr("src", "./img/pel_med_0" + (index+1) +".png");
            })

            $("figcaption").each(function(index) {
                $(this).text("Historia " + (index+1));
            })
           
        }

    });


};



