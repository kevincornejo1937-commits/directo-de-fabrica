/* =========================================================
   DIRECTO DE FÁBRICA - APP.JS
   ========================================================= */


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // No proteger la página de inicio de sesión
    if (!esPaginaLogin()) {
        protegerPagina();
    }

    // Cargar configuraciones generales
    cargarTema();
    cargarUsuario();
    actualizarFecha();

    // Configurar botones
    configurarBotonTema();
    configurarBotonNotificaciones();

});


/* =========================================================
   DETECTAR PÁGINA LOGIN
   ========================================================= */

function esPaginaLogin() {

    const pagina = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    return (
        pagina === "login.html" ||
        document.body.classList.contains("login-page") ||
        document.getElementById("loginForm") !== null
    );

}


/* =========================================================
   PROTEGER PÁGINAS
   ========================================================= */

function protegerPagina() {

    const sesion = localStorage.getItem(
        "sesionDirectoFabrica"
    );

    if (sesion !== "activa") {

        window.location.href = "login.html";

    }

}


/* =========================================================
   CERRAR SESIÓN
   ========================================================= */

function cerrarSesion() {

    const confirmar = confirm(
        "¿Desea cerrar la sesión?"
    );

    if (!confirmar) {
        return;
    }

    localStorage.removeItem(
        "sesionDirectoFabrica"
    );

    localStorage.removeItem(
        "usuarioDirectoFabrica"
    );

    localStorage.removeItem(
        "usuario"
    );

    window.location.href = "login.html";

}


/* =========================================================
   TEMA CLARO / OSCURO
   ========================================================= */

function cambiarTema() {

    document.body.classList.toggle(
        "dark-mode"
    );

    const modoOscuro =
        document.body.classList.contains(
            "dark-mode"
        );

    localStorage.setItem(
        "temaDirectoFabrica",
        modoOscuro ? "dark" : "light"
    );

    actualizarBotonesTema();

}


/* =========================================================
   CARGAR TEMA
   ========================================================= */

function cargarTema() {

    const tema = localStorage.getItem(
        "temaDirectoFabrica"
    );

    if (tema === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

    }

    actualizarBotonesTema();

}


/* =========================================================
   ACTUALIZAR ICONOS DEL TEMA
   ========================================================= */

function actualizarBotonesTema() {

    const modoOscuro =
        document.body.classList.contains(
            "dark-mode"
        );


    // Botón superior
    const botonSuperior =
        document.getElementById("btnTema");

    if (botonSuperior) {

        botonSuperior.textContent =
            modoOscuro ? "☀️" : "🌙";

        botonSuperior.title =
            modoOscuro
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro";

    }


    // Botón lateral
    const botonLateral =
        document.getElementById(
            "sidebarThemeButton"
        );

    if (botonLateral) {

        botonLateral.innerHTML =
            modoOscuro
                ? "☀️ <span>Modo claro</span>"
                : "🌙 <span>Modo oscuro</span>";

    }

}


/* =========================================================
   CONFIGURAR BOTÓN TEMA
   ========================================================= */

function configurarBotonTema() {

    const botonSuperior =
        document.getElementById("btnTema");

    if (botonSuperior) {

        botonSuperior.addEventListener(
            "click",
            function () {

                cambiarTema();

            }
        );

    }


    const botonLateral =
        document.getElementById(
            "sidebarThemeButton"
        );

    if (botonLateral) {

        botonLateral.addEventListener(
            "click",
            function () {

                cambiarTema();

            }
        );

    }

}


/* =========================================================
   NOTIFICACIONES
   ========================================================= */

function mostrarNotificaciones() {

    const panel =
        document.getElementById(
            "notificationPanel"
        );

    if (!panel) {
        return;
    }

    panel.classList.toggle("show");

}


function cerrarNotificaciones() {

    const panel =
        document.getElementById(
            "notificationPanel"
        );

    if (panel) {

        panel.classList.remove("show");

    }

}


/* =========================================================
   CONFIGURAR BOTÓN NOTIFICACIONES
   ========================================================= */

function configurarBotonNotificaciones() {

    const boton =
        document.getElementById(
            "btnNotificaciones"
        );

    const panel =
        document.getElementById(
            "notificationPanel"
        );


    if (boton) {

        boton.addEventListener(
            "click",
            function (event) {

                // Evita que el clic cierre inmediatamente
                event.stopPropagation();

                mostrarNotificaciones();

            }
        );

    }


    if (panel) {

        panel.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    }


    // Cerrar al hacer clic fuera
    document.addEventListener(
        "click",
        function (event) {

            if (!panel || !boton) {
                return;
            }

            if (
                !panel.contains(event.target) &&
                !boton.contains(event.target)
            ) {

                cerrarNotificaciones();

            }

        }
    );

}


/* =========================================================
   USUARIO
   ========================================================= */

function cargarUsuario() {

    const usuario =
        localStorage.getItem(
            "usuarioDirectoFabrica"
        ) ||
        localStorage.getItem(
            "usuario"
        ) ||
        "Administrador";


    const elementos =
        document.querySelectorAll(
            "#nombreUsuario, [data-usuario]"
        );


    elementos.forEach(function (elemento) {

        elemento.textContent = usuario;

    });

}


/* =========================================================
   FECHA ACTUAL
   ========================================================= */

function actualizarFecha() {

    const elemento =
        document.getElementById(
            "fechaActual"
        );

    if (!elemento) {
        return;
    }


    const fecha = new Date();

    const opciones = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };


    elemento.textContent =
        fecha.toLocaleDateString(
            "es-EC",
            opciones
        );

}


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

function cargarConfiguracion() {

    // Se mantiene esta función para otras páginas
    // de la plataforma.

}


/* =========================================================
   MENSAJE DEL SISTEMA
   ========================================================= */

function mostrarMensaje(texto) {

    alert(texto);

}


/* =========================================================
   NAVEGACIÓN
   ========================================================= */

function irA(pagina) {

    if (pagina) {

        window.location.href = pagina;

    }

}


/* =========================================================
   FIN APP.JS
   ========================================================= */