/* =========================================================
   DIRECTO DE FÁBRICA
   DATOS DE DEMOSTRACIÓN
   ========================================================= */

const datosEmpresa = {

    /* =====================================================
       VENTAS
       ===================================================== */

    ventas: [

        {
            id: "V001",
            fecha: "2026-01-05",
            producto: "Producto A",
            categoria: "Hogar",
            cantidad: 12,
            precio: 25,
            total: 300,
            formaPago: "Efectivo"
        },

        {
            id: "V002",
            fecha: "2026-01-08",
            producto: "Producto B",
            categoria: "Construcción",
            cantidad: 8,
            precio: 40,
            total: 320,
            formaPago: "Transferencia"
        },

        {
            id: "V003",
            fecha: "2026-01-15",
            producto: "Producto C",
            categoria: "Hogar",
            cantidad: 15,
            precio: 18,
            total: 270,
            formaPago: "Efectivo"
        },

        {
            id: "V004",
            fecha: "2026-02-03",
            producto: "Producto A",
            categoria: "Hogar",
            cantidad: 20,
            precio: 25,
            total: 500,
            formaPago: "Tarjeta"
        },

        {
            id: "V005",
            fecha: "2026-02-10",
            producto: "Producto D",
            categoria: "Herramientas",
            cantidad: 5,
            precio: 65,
            total: 325,
            formaPago: "Transferencia"
        },

        {
            id: "V006",
            fecha: "2026-03-02",
            producto: "Producto B",
            categoria: "Construcción",
            cantidad: 11,
            precio: 40,
            total: 440,
            formaPago: "Efectivo"
        }

    ],


    /* =====================================================
       INVENTARIO
       ===================================================== */

    inventario: [

        {
            codigo: "P001",
            producto: "Producto A",
            categoria: "Hogar",
            stock: 85,
            minimo: 20
        },

        {
            codigo: "P002",
            producto: "Producto B",
            categoria: "Construcción",
            stock: 42,
            minimo: 15
        },

        {
            codigo: "P003",
            producto: "Producto C",
            categoria: "Hogar",
            stock: 63,
            minimo: 20
        },

        {
            codigo: "P004",
            producto: "Producto D",
            categoria: "Herramientas",
            stock: 14,
            minimo: 20
        }

    ],


    /* =====================================================
       PRODUCTOS
       ===================================================== */

    productos: [

        {
            codigo: "P001",
            nombre: "Producto A",
            categoria: "Hogar",
            precio: 25,
            stock: 85
        },

        {
            codigo: "P002",
            nombre: "Producto B",
            categoria: "Construcción",
            precio: 40,
            stock: 42
        },

        {
            codigo: "P003",
            nombre: "Producto C",
            categoria: "Hogar",
            precio: 18,
            stock: 63
        },

        {
            codigo: "P004",
            nombre: "Producto D",
            categoria: "Herramientas",
            precio: 65,
            stock: 14
        }

    ]

};


/* =========================================================
   CÁLCULOS
   ========================================================= */

function calcularTotalVentas() {

    return datosEmpresa.ventas.reduce(

        function (total, venta) {

            return total +
                Number(venta.total || 0);

        },

        0

    );

}


/* =========================================================
   NÚMERO DE VENTAS
   ========================================================= */

function calcularNumeroVentas() {

    return datosEmpresa.ventas.length;

}


/* =========================================================
   PRODUCTOS VENDIDOS
   ========================================================= */

function calcularProductosVendidos() {

    return datosEmpresa.ventas.reduce(

        function (total, venta) {

            return total +
                Number(venta.cantidad || 0);

        },

        0

    );

}


/* =========================================================
   STOCK ACTUAL
   ========================================================= */

function calcularStockActual() {

    return datosEmpresa.inventario.reduce(

        function (total, producto) {

            return total +
                Number(producto.stock || 0);

        },

        0

    );

}


/* =========================================================
   TOTAL DE PRODUCTOS
   ========================================================= */

function calcularTotalProductos() {

    return datosEmpresa.productos.length;

}