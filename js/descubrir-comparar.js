function descubrir() {
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    
    if (totalDescubiertas.length > 1) {
      return;
    }
  
    this.classList.add("descubierta");
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  
    if (descubiertas.length < 2) {
      return;
    }
  
    comparar(descubiertas);
    
  }
  
  function comparar(tarjetasAComparar) {
    if (descubiertas[0].dataset.valor === descubiertas[1].dataset.valor) {
      acierto(tarjetasAComparar);
    } else {
      error(tarjetasAComparar);
    }
  }
  