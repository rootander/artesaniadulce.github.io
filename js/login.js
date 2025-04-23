document.getElementById("btnAceptarRegistro").addEventListener("click", function () {
  setTimeout(function () {
      document.getElementById("login").click();

      if (window.innerWidth <= 768) {
          const textSwitch = document.getElementById("text-switch");
          const container = document.getElementById("container");
          const toggleSwitch = document.getElementById("toggle-switch");

          toggleSwitch.checked = false; 
          textSwitch.textContent = 'Registrarse';
          container.classList.remove("active");
      }
  }, 300);
  
});
document.getElementById("btnAceptarLogin").addEventListener("click", function () {
  
  setTimeout(function () {
    
    window.location.href = "index.html";
  }, 300);})