const cambiarDiseño = ( ) => {
    const navTexto = document.querySelector("header .nav_texto");
    const navHamburguer = document.querySelector("header .nav_hamburguer")
    if (!navTexto.getAttribute("display")){
        navTexto.setAttribute("display", "none");
        navHamburguer.removeAttribute ("display","none");
    } else{
        console.log("Mostrar nav normal");
        navHam.setAttribute("hidden");
        navNormal.removeAttribute("hidden");
    }
}

window.onresize = onWindowResized();