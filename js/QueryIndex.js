        $(document).ready(function () {
            $(".mas").click(function () {
              let contenidoId = $(this).data("contenido");
              $("#" + contenidoId).slideDown();
              $(this).hide();
            });
        
            $(".menos").click(function () {
              let contenidoId = $(this).data("contenido");
              $("#" + contenidoId).slideUp();
              $(".mas[data-contenido='" + contenidoId + "']").show();
            });
          });
