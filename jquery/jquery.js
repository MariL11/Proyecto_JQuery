//Función para cargar todas las funciónes al iniciar el documento.
$(document).ready(function() {
    
    cargar_pelicula ();
    seleccionarImagen();
    inicializar();
    seleccionarPelicula();
    comentarios();
    quitarSinopsis();
    invertirOrden();
    quitarVideo();
    menuCarrusel();
    desactivarEdicion();
    comienzoVideo();
    cambiarColor();
    cambiarFuente();

});

//Función para inicializar, añade una escala de grises.
function inicializar(){
    $("img").css("filter","grayscale(100%)");
}


//Función de cargar_pelicula, carga cualquiera de las tres peliculas.
function cargar_pelicula () {

    let peliculaSeleccionada = null;


    $("#primeraPeli, #segundaPeli, #terceraPeli").on({
        mouseenter: function() {
            if (!peliculaSeleccionada) {
                $(this).css("filter", "brightness(150%)");
            }else{
                $(this).not(peliculaSeleccionada).css("filter", "brightness(150%)");
            }
        },

        mouseleave: function() {
            if (!peliculaSeleccionada) {
                $(this).css("filter", "grayscale(100%)");
            }else{
                $(this).not(peliculaSeleccionada).css("filter", "grayscale(100%)");
            }
        },

        click: function() {

            if (peliculaSeleccionada){
                peliculaSeleccionada.css("filter", "grayscale(100%)").css("border", "none");
                
            }

            peliculaSeleccionada = $(this).css("filter", "contrast(150%)").css("border", "10px solid blue");

            $("#titulo").text($(this).attr("data-titulo"));
            $("#informacion").text($(this).attr("data-informacion"));
            $("#sinopsis").text($(this).attr("data-sinopsis"));
            $("#caratula_ampliada").css("filter","grayscale(0%)");


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
                $(".filtro").val("peli1");
                
                $("figcaption").each(function(index) {
                    $(this).text("Acción " + (index+1));
                })

                
                
            });

            $("#segundaPeli").click(function(){
                $("#caratula_ampliada").attr("src", "./img/pel_ani.png");
                $("#video").attr("src", "./video/video_02.mp4");
                $(".filtro").val("peli2");
             
                
              

                $("figcaption").each(function(index) {
                    $(this).text("Anime " + (index+1));
                })
                
                   
            });

            $("#terceraPeli").click(function(){
                $("#caratula_ampliada").attr("src", "./img/pel_med.png");
                $("#video").attr("src", "./video/video_03.mp4");
                $(".filtro").val("peli3");

              

                $("figcaption").each(function(index) {
                    $(this).text("Historia " + (index+1));
                })
            
               
        
        });
        }

    });

    


};

//Funcion seleccionarImagen, aplica el filtro a la imagen de la película seleccionada.
function seleccionarImagen(){

    $("#primeraPeli, #segundaPeli, #terceraPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_acc_01.png").css("filter","grayscale(0%)");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");
   
        seleccionarImagenNoPredeterminada();
        seleccionarCirculo(0);
        
    })
    

    
}

//Funcion seleccionarImagenNoPredeterminada, aplica el filtro a la imagen seleccionada de la película.
function seleccionarImagenNoPredeterminada () {

    $(".imagenes_img_img").click(function() {

            $(".imagenes_img_img").removeClass("imagenSeleccionada");

            $(this).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");
            

            $(".imagenes_img_img").not(".imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");

            let ruta = $(this).attr("src");

            $("#z_multimediad_img_img").attr("src", ruta);

            let indexImagen = $(".imagenes_img>figure>img").index(this);

            seleccionarCirculo(indexImagen, ruta);

    });   

}

//Función menú carrusel, crea un intervalo para pasar a la siguiente imagen cada 3 segundos.
function menuCarrusel (){
    let intervalo;
    let numImagen = 0;
    $("#menuCarrusel").click(function(){
        if($("#menuCarrusel").prop("checked")){          
            intervalo = setInterval(function () {
                
                if(numImagen>=4) {
                    numImagen -= 4;
                    seleccionarCirculo(numImagen);
                    $(".imagenes_img>figure>img").fadeOut("slow", function(){
                        $(".imagenes_img>figure>img").fadeIn("slow");
                        $(".imagenes_img>figure>img").removeClass("imagenSeleccionada");
                        $(".imagenes_img>figure>img").eq(numImagen).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");
                        $(".imagenes_img>figure>img").not(".imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
                        
                        let ruta = $(".imagenes_img>figure>img").eq(numImagen).attr("src");
                        $("#z_multimediad_img_img").attr("src", ruta);
                    });
                    
                } else {
                    numImagen += 1;
                    seleccionarCirculo(numImagen);
                    $(".imagenes_img>figure>img").fadeOut("slow", function(){
                        $(".imagenes_img>figure>img").fadeIn("slow");
                        $(".imagenes_img>figure>img").removeClass("imagenSeleccionada");
                        $(".imagenes_img>figure>img").eq(numImagen).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");
                        $(".imagenes_img>figure>img").not(".imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
                        
                        let ruta = $(".imagenes_img>figure>img").eq(numImagen).attr("src");
                        $("#z_multimediad_img_img").attr("src", ruta);
                    });
                }
                
            }, 3000);  

        } else {
            clearInterval(intervalo);
        }
    });

    $(".imagenes_img_img").click(function(){
        clearInterval(intervalo);
        $("#menuCarrusel").prop("checked", false);   
        numImagen = $(".imagenes_img_img").index(this);
    });

    $(".imagenes_nav>div").click(function(){
        clearInterval(intervalo);
        $("#menuCarrusel").prop("checked", false);   
        numImagen = $(".imagenes_nav>div").index(this);
    });

}

/*Función que permite hace click sobre un círculo y seleccione la imagen que le corresponde */
function seleccionarCirculo (indexImagen) {           
    $(".imagenes_nav>div").removeClass("circulos");
    $(".imagenes_nav>div").eq(indexImagen).addClass("circulos");
    $(this).addClass("circulos");

    $(".imagenes_nav>div").click(function(){
        let indexCirculo = $(".imagenes_nav>div").index(this);
        $(".imagenes_nav>div").removeClass("circulos");
        $(this).addClass("circulos");


        $(".imagenes_img>figure>img").removeClass("imagenSeleccionada");
        $(".imagenes_img>figure>img").eq(indexCirculo).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");
        $(".imagenes_img>figure>img").not(".imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        
        let ruta = $(".imagenes_img>figure>img").eq(indexCirculo).attr("src");
        $("#z_multimediad_img_img").attr("src", ruta);

        
        console.log(indexCirculo);
    });



}

//Función seleccionarPelicula, agrega a la variable el id de la pelicula desde el desplegable.
function seleccionarPelicula(){

    $('select').ready(function(){
       peliculaSeleccionada = $("#primeraPeli").click(); 
    });

    $('select').click(function() {
        if($(this).val()=="peli1") {
            peliculaSeleccionada = $("#primeraPeli").click();
        } else if($(this).val()=="peli2") {
            peliculaSeleccionada = $("#segundaPeli").click();
        } else if($(this).val()=="peli3") {
            peliculaSeleccionada = $("#terceraPeli").click();
        }
    });


}

//Función comentarios, agrega los comentarios a la sección de comentarios y desactiva la edición.
function comentarios(){

    $("#comentario").remove();
    $("#valoracion").attr('disabled',true);
    $("textarea").attr('disabled',true);


    $("input[type=text]").keyup(function() {
        if($("input[type=text]").val()!="") {
            $("#valoracion").attr('disabled',false);
            $("textarea").attr('disabled',false);
        } else {
            $("#valoracion").val('');
            $("textarea").val('');
            $("#valoracion").attr('disabled',true);
            $("textarea").attr('disabled',true);
        }

    })

    $("#aceptar").click(function(){
        if(($("input[type=text]").val().length>0) && ($("#valoracion").val().length>0) && ($("textarea").val().length>0)){
            $(".z_valoraciones").append("<div class='comentarioUsuario'><p id='" + $(".c_usuario input").val() + "'>" + $("input[type=text]").val() + " - " +  $("#titulo").text()  + " - " + $("#valoracion").val()  + " - " + $("textarea").val() + "</p><button id='botonEliminar'>Eliminar</button></div>");
        }
     });

     $("#desactivarEdicion").click(function(){
        if($(".z_valoraciones").prop("checked")){
            $("#comentarioUsuario").each(function(index) {
                
            });
            $("#botonEliminar").attr('disabled',true);
        } else {
            $("#comentarioUsuario").each(function(index) {
                $("#botonEliminar").eq(index).attr('disabled',false);
            });
        }
     });
        
    $(".z_valoraciones").on("click", "#botonEliminar", function() {
        if($(this).prev("p").attr("id") == $(".c_usuario input").val()){
            $(this).closest(".comentarioUsuario").remove();            
        }
    });


    $("#cancelar").click(function(){
        $("input[type=text]").val('');
        $("#valoracion").val('');
        $("textarea").val('');
    });

    desactivarEdicion("#botonEliminar");
}

/*Función que permite quitar la descripción de la película seleccionada y desplaza la imagen aumentada de la peli a esa zona*/
function quitarSinopsis(){
    $("#mostrarSinopsis").click(function() { 
        if($("#mostrarSinopsis").prop("checked")){

            $(".descripcion").slideUp("slow", function(){
                $(".descripcion").css("display","none");
                let cadena = '"nav header header" "nav pelicula imagenes" "nav pelicula contenidos" "nav pelicula contenidos" "nav pelicula contenidos" "footer footer footer"';
                $("#contenedor_1").css("grid-template-areas", cadena);
            });
            
        }else{
            let cadena = '"nav header header" "nav pelicula imagenes" "nav pelicula contenidos" "nav descripcion contenidos" "nav descripcion contenidos" "footer footer footer"';
            $("#contenedor_1").css("grid-template-areas", cadena);
            $(".descripcion").css("display","flex");
            $(".descripcion").css("flex-direction","column");
        }
    })
    

}

//Función quitarVideo para quitar el video y agrandar la imagen al máximo.
function quitarVideo() {
    $("#mostrarVideo").click( function() {
        if($("#mostrarVideo").prop("checked")){
            $(".z_multimedia_video").fadeOut("slow", function(){
                $(".z_multimedia_img").css("height","38rem");
                $(".z_multimedia_video").css("display","none");
            });
        } else {
            $(".z_multimedia_img").css("height","22rem");
            $(".z_multimedia_video").css("height","16rem");
            $(".z_multimedia_video").css("display","flex");
        }
    });
}

/*Función que permite invertir el orden de las imágenes del nav junto a las circunferencias */
function invertirOrden(){
    $("#invertirOrdenImg").click(function(){
        if($("#invertirOrdenImg").prop("checked")){
            $(".imagenes_img").fadeOut("slow", function(){
                $(".imagenes_img").css("flex-direction","row-reverse");
                $(".imagenes_img").fadeIn("slow");
            });
            $(".imagenes_nav").fadeOut("slow",function(){
                $(".imagenes_nav").css("flex-direction","row-reverse");
                $(".imagenes_nav").fadeIn("slow");
            });
        }else{
            $(".imagenes_img").fadeOut("slow", function(){
                $(".imagenes_img").css("flex-direction","row");
                $(".imagenes_img").fadeIn("slow");
            });
            $(".imagenes_nav").fadeOut("slow",function(){
                $(".imagenes_nav").css("flex-direction","row");
                $(".imagenes_nav").fadeIn("slow");
            });
        }
    });
}


/*Función que permite desactivar la introducción de datos en el formulación y eliminar comentarios existentes */
function desactivarEdicion(boton){
    $("#desactivarEdicion").click(function(){
        if($("#desactivarEdicion").prop("checked")){
            $("input[type=text]").attr('disabled',true);
            $("#valoracion").attr('disabled',true);
            $("textarea").attr('disabled',true);
            $(boton).attr('disabled',true);

        }else{
            $("input[type=text]").attr('disabled',false);
            $("#valoracion").attr('disabled',false);
            $("textarea").attr('disabled',false);
            $(boton).attr('disabled',false);
        }

    });
}

/*Función que permite comenzar el vídeo por el segundo seleccionado (0s - 20s)*/
function comienzoVideo(){
    $("#segundos").css("width", "200px");

    $("#segundos").change(function() {
        $("#video")[0].currentTime = $(this).val();
    });
}

/*Función que permite cambiar el color del fondo, de las palabras y de los bordes de la pçagina web*/
function cambiarColor(){
    $("#cambiarColor").click(function(){
        if($("#cambiarColor").prop("checked")){
            $("body").css("background-color","black");
            $("body").css("color","white");
            $("header").css("border","2px solid white");
            $("div").not(".imagenes_img, .imagenes_nav, #contenedor_1, .contenidos, .z_multimedia_img, .z_multimedia_video").css("border","2px solid white");
            $("nav").css("border","2px solid white");
            $("main").css("border","2px solid white");
            $("footer").css("border","2px solid white");
        }else{
            $("body").css("background-color","white");
            $("body").css("color","black");
            $("header").css("border","2px solid black");
            $("div").not(".imagenes_img, .imagenes_nav, #contenedor_1, .contenidos, .z_multimedia_img, .z_multimedia_video").css("border","2px solid black");
            $("nav").css("border","2px solid black");
            $("main").css("border","2px solid black");
            $("footer").css("border","2px solid black");
        }

    });
}

/*Función que permite cambiar la fuente de los textos (menos el título)*/
function cambiarFuente() {
    $("#cambiarFuente").click(function() {
        if($("#cambiarFuente").prop("checked")) {
            $("body").not("#titulo").css("font-family","monospace");
        }else{
            $("body").not("#titulo").css("font-family","Times New Roman");
        }
    })
}







