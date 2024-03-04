$(document).ready(function() {
    
    cargar_pelicula ();
    seleccionarImagen();
    inicializar();
    seleccionarPelicula();
    comentarios();
    quitarSinopsis()
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


function seleccionarImagen(){

    //Preguntar
    $("#primeraPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_acc_01.png").css("filter","grayscale(0%)");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");
   
        seleccionarImagenNoPredeterminada();
        seleccionarCirculo(0);
        
    })
    
    $("#segundaPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_ani_01.png").css("filter","grayscale(0%)");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");

        seleccionarImagenNoPredeterminada();
        seleccionarCirculo(0);
    })

    $("#terceraPeli").click(function(){
        $(".imagenes_img_img").removeClass("imagenSeleccionada").css("filter", "grayscale(100%)").css("width","");
        $("#z_multimediad_img_img").attr("src", "./img/pel_med_01.png").css("filter","grayscale(0%)");
        $(".imagenes_img_img").eq(0).addClass("imagenSeleccionada").css("filter", "grayscale(0%)").css("width","80%");

        seleccionarImagenNoPredeterminada();  
        seleccionarCirculo(0); 
    })
    
}

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


function comentarios(){

    $("#comentario").hide();

    $("input[type=number]").attr('disabled',true);
    $("textarea").attr('disabled',true);


    $("input[type=text]").keyup(function() {
        if($("input[type=text]").val()!="") {
            $("input[type=number]").attr('disabled',false);
            $("textarea").attr('disabled',false);
        } else {
            $("input[type=number]").attr('disabled',true);
            $("textarea").attr('disabled',true);
        }

    })


    if($("input[type=text]").val().length>0){
        if($("input[type=number]").val().length>0){
            if($("textarea").val().length>0){
                $("#comentario").show();
    
            }
        }
    }


}


function quitarSinopsis(){
    $("#mostrarSinopsis").on({
        click: function() {    
        if($("#mostrarSinopsis").prop("checked")){
            $(".pelicula").slideDown(4000, function() {
                $(".descripcion").css("visibility", "hidden");
                $(".pelicula").css("display", "flex");
                
            });

        }else{
            $(".descripcion").css("visibility", "visible");
        }
    }
    });

}




// Preguntar DATA-, descripcion (data-), clases, titulo de la descripcion, estilo(function elegirImagen), Valoración (0-5)


