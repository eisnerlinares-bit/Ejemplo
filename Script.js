// Año automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Texto que se escribe solo en la portada
const frases = [
  "programar en Python",
  "crear páginas con HTML y CSS",
  "hacer sitios con WordPress",
  "diseñar apps con FlutterFlow",
];

const rotor = document.getElementById("rotor");
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (sinMovimiento) {
  // Sin animación: se deja la primera frase fija
  rotor.textContent = frases[0];
} else {
  let frase = 0;
  let letra = 0;
  let borrando = false;

  function escribir() {
    const actual = frases[frase];
    letra += borrando ? -1 : 1;
    rotor.textContent = actual.slice(0, letra);

    let espera = borrando ? 35 : 70;

    if (!borrando && letra === actual.length) {
      borrando = true;
      espera = 1600;
    } else if (borrando && letra === 0) {
      borrando = false;
      frase = (frase + 1) % frases.length;
      espera = 350;
    }

    setTimeout(escribir, espera);
  }

  rotor.textContent = "";
  escribir();
}
