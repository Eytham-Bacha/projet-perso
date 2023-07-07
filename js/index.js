document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByClassName('nav-link');
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        var offcanvasNavbar = document.getElementById('offcanvasNavbar');
        var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
        offcanvas.hide();
      });
    }
  });
  


console.log("Mon fichier JavaScript est relié !");