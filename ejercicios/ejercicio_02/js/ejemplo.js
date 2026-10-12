const boton = document.getElementById("mi_boton");

boton.addEventListener('click', () => {
        boton.textContent = "Si funciona";
        boton.stylebackgroundColor = "blue";

        console.log("clic el dia:", new Date().toLocaleDateString());
        console.log("otro texto");
    }
);