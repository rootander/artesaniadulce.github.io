// para derigir a iniciar sesion y para indix si ya inicie sesion

document.getElementById("btnAceptarRegistro").addEventListener("click", function () {
    // Espera a que el modal se cierre (por la animación de cierre del modal)
    setTimeout(function () {
      // Simula el clic en el botón "Iniciar sesión"
      document.getElementById("login").click();
    }, 300); // 300ms para que el modal se cierre primero
  });
  
  document.getElementById("btnAceptarLogin").addEventListener("click", function () {
    // Espera a que el modal se cierre (por la animación de cierre del modal)
    setTimeout(function () {
      // Simula el clic en el botón "Iniciar sesión"
      window.location.href = "index.html";
    }, 300); // 300ms para que el modal se cierre primero
  });


