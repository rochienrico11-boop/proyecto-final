document.querySelectorAll(".faq-question").forEach(pregunta => {
    pregunta.addEventListener("click", () => {
        const item = pregunta.parentElement;

        item.classList.toggle("active");
    });
});

const filtro = document.getElementById("filtroEspecialidad");

if (filtro) {
    filtro.addEventListener("change", () => {
        const valor = filtro.value;
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const categoria = card.dataset.categoria;

            if (valor === "todas" || categoria === valor) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const categoria = params.get("categoria");
    const especialidad = params.get("especialidad");

    if (especialidad) {
        filtrarPorEspecialidad(especialidad);
    } else if (categoria) {
        filtrarPorCategoria(categoria);
    }

});

function filtrarPorCategoria(categoria) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cat = card.dataset.categoria;

        if (categoria === "todas" || cat === categoria) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function filtrarPorEspecialidad(especialidad) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const esp = card.dataset.especialidad;

        if (esp === especialidad) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}