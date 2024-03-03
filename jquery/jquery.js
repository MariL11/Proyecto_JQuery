$(document).ready(function() {
    
    cargar_pelicula ();
    elegirImagen();
    inicializar();
    //elegirPelicula();
});

function inicializar(){
    $("img").css("filter","grayscale(100%)");
}



function cargar_pelicula () {

    let peliculaSeleccionada = null;

    
    

    $("#primeraPeli, #segundaPeli, #terceraPeli").on({
        mouseenter: function() {
            if (!peliculaSeleccionada) {
                $(this).css("filter", "brightness(150%)");
            }
        },

        mouseleave: function() {
            if (!peliculaSeleccionada) {
                $(this).css("filter", "grayscale(100%)");
            }
        },

        focus: function(){
            $(this).css("filter", "contrast(150%)").css("border", "10px solid blue");
        },

        click: function() {

            if (peliculaSeleccionada){
                peliculaSeleccionada.css("filter", "grayscale(100%)").css("border", "none");
                
            }

            peliculaSeleccionada = $(this).css("filter", "contrast(150%)").css("border", "10px solid blue");

            elegirPelicula(peliculaSeleccionada);

            $("#titulo").text($(this).attr("data-titulo"));
            $("#informacion").text($(this).attr("data-informacion"));
            $("#sinopsis").text($(this).attr("data-sinopsis"));


            if(peliculaSeleccionada.is("#primeraPeli")) {
                $(".imagenes_img_img").each(function(index) {

                    $(this).attr("src", "./img/pel_acc_0" + (index+1) +".png");
                });
            }else if(peliculaSeleccionada.is("#segundaPeli")){
                $(".imagenes_img_img").each(function(index) {
                    $(this).attr("src", "./img/pel_ani_0" + (index+1) +".png");
                });
            }else if (peliculaSeleccionada.is("#terceraPeli")){
                $(".imagenes_img_img").each(function(index) {
                    $(this).attr("src", "./img/pel_med_0" + (index+1) +".png");
                })
            }

               
            $("#primeraPeli").click(function(){

                $("#caratula_ampliada").attr("src", "./img/pel_acc.png");
                $("#video").attr("src", "./video/video_01.mp4");
                
                //$("#z_multimediad_img_img").attr("src", "./img/pel_acc_01.png");

                $("figcaption").each(function(index) {
                    $(this).text("Acción " + (index+1));
                })

                
                
            });

            $("#segundaPeli").click(function(){
                $("#caratula_ampliada").attr("src", "./img/pel_ani.png");
                $("#video").attr("src", "./video/video_02.mp4");
                //$("#z_multimediad_img_img").attr("src", "./img/pel_ani_01.png");
                $("#z_multimediad_img_img").attr("src", ruta);

                $("figcaption").each(function(index) {
                    $(this).text("Anime " + (index+1));
                })
                
                   
            });

            $("#terceraPeli").click(function(){
                $("#caratula_ampliada").attr("src", "./img/pel_med.png");
                $("#video").attr("src", "./video/video_03.mp4");
                //$("#z_multimediad_img_img").attr("src", "./img/pel_med_01.png");
                $("#z_multimediad_img_img").attr("src", ruta);

                $("figcaption").each(function(index) {
                    $(this).text("Historia " + (index+1));
                })
            
               
        
        });
        }

    });

};


function elegirImagen(){

    //Preguntar
    $("#primeraPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_acc_01.png");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "brightness(150%)").css("width","80%");
        $(".circulo_selector_img").removeClass("circulos");
        $(".circulo_selector_img").eq(0).addClass("circulos");
        //console.log(onclick($(".circulo_selector_img")));
        elegirImagenNoPredeterminada();
        elegirCirculo();
        
    })
    
    $("#segundaPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_ani_01.png");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "brightness(150%)").css("width","80%");
        $(".circulo_selector_img").removeClass("circulos");
        $(".circulo_selector_img").eq(0).addClass("circulos");
        //console.log(onclick($(".circulo_selector_img")));
        elegirImagenNoPredeterminada();
        elegirCirculo();
    })

    $("#terceraPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_med_01.png");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "brightness(150%)").css("width","80%");
        $(".circulo_selector_img").removeClass("circulos");
        $(".circulo_selector_img").eq(0).addClass("circulos");
        //console.log(onclick($(".circulo_selector_img")));
        elegirImagenNoPredeterminada();  
        elegirCirculo(); 
    })
    
}

function elegirImagenNoPredeterminada () {
    $(".imagenes_img_img").on({

        click: function() {

            $(".imagenes_img_img").removeClass("imagenSeleccionada");

            //Preguntar
            let a = $(this).addClass("imagenSeleccionada").css("filter", "brightness(150%)").css("width","80%");

        
            

            elegirCirculo(a);

            $(".imagenes_img_img").not(".imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");

            let ruta = $(this).attr("src");

            $("#z_multimediad_img_img").attr("src", ruta);
        }    


    }) 
}

function elegirCirculo (index) {
    $(".circulo_selector_img").on({
        click: function() {            
            $(".circulo_selector_img").removeClass("circulos");
            $(".circulo_selector_img").eq(index).addClass("circulos");
            $(this).addClass("circulos");
            
        }
    })
}

function elegirPelicula(peliculaSeleccionada){
    

        $('select').change(function() {
            if($(this).val()=="peli1") {
                peliculaSeleccionada = $("#primeraPeli");
            } else if($(this).val()=="peli2") {
                alert ("Se ha elegido la segunda pelicula.");
            } else if($(this).val()=="peli13") {
                alert ("Se ha elegido la tercera pelicula.");
            }
        });

}





    /*click: function(){

            $("#primeraPeli, #segundaPeli, #terceraPeli").removeClass("peliSeleccionada");

            $(this).addClass("peliSeleccionada");

            $("#primeraPeli, #segundaPeli, #terceraPeli").not(".peliSeleccionada").css("filter", "grayscale(100%)");

            $("#primeraPeli").click(function(){
                $("#caratula_ampliada").attr("src", "./img/pel_acc.png");
                $("#video").attr("src", "./video/video_01.mp4");
                $("#z_multimediad_img_img").attr("src", "./img/pel_acc_01.png");
        
                $(".imagenes_img_img").each(function(index) {
                    $(this).attr("src", "./img/pel_acc_0" + (index+1) +".png");
                });
        
                $("figcaption").each(function(index) {
                    $(this).text("Acción " + (index+1));
                })

                $("#titulo").text("Título: " + $(this).attr("data-titulo"));
        
            });*/ 



// Preguntar DATA-, descripcion (data-), clases, titulo de la descripcion, estilo(function elegirImagen)


