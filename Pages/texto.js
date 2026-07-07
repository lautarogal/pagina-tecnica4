const mensaje = "écnica N°4 Ricardo Alberto Lopez";
const texto = document.getElementById("texto");

let i = 0;
let escribiendo = true;

function maquinaDeEscribir() {
    if (escribiendo) {
        texto.textContent = mensaje.substring(0, i);
        i++;

        if (i > mensaje.length) {
            escribiendo = false;
            setTimeout(maquinaDeEscribir, 1500);
            return;
        }

        setTimeout(maquinaDeEscribir, 100);
    } else {
        texto.textContent = mensaje.substring(0, i);
        i--;

        if (i < 0) {
            escribiendo = true;
            i = 0;
            setTimeout(maquinaDeEscribir, 500);
            return;
        }

        setTimeout(maquinaDeEscribir, 100);
    }
}

const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
    links.classList.toggle("active");
});

maquinaDeEscribir();