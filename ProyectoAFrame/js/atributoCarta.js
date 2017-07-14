//Cada <a-box> tendra un atributto llamado "carta" que le agregara el evento click

AFRAME.registerComponent('carta', {

  init: function () {
    var el = this.el; // <a-box>
    el.addEventListener('click', function () {

      if (el.getAttribute("rotation").y == "180")
        procesoCartas(el);

    });
  }
});