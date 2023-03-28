const productsDatabase = [
    {
        id: 1,
        title: "TERMO STANLEY OSCURO",
        imagen: "https://www.doiteargentina.com.ar/wp-content/uploads/2019/11/doite-termo-stanley-negro-nuevo-2020-46719-01.jpg",
        price: 40000,
        stock: 20,
        category:"Termo",
        informacion:"Los termos Stanley están hechos con doble capa de acero inoxidable de 18/8 ideal para soportar altas temperaturas. Diseñado para durar, su pared exterior de acero grueso puede soportar golpes y caídas mejor que cualquier otro termo del mercado. El contenido del termo permite mantener 1.1 litros de liquido a temperatura por 24hs."
    },
    {
        id: 2,
        title: "TERMO STANLEY VERDE MILITAR",
        imagen: "https://matesibarra.com/wp-content/uploads/2021/06/doite-termo-stanley-verde-nuevo-2020-46721-02.jpg",
        price: 39000,
        stock: 20,
        category:"Termo",
        informacion:"Los termos Stanley están hechos con doble capa de acero inoxidable de 18/8 ideal para soportar altas temperaturas. Diseñado para durar, su pared exterior de acero grueso puede soportar golpes y caídas mejor que cualquier otro termo del mercado. El contenido del termo permite mantener 1.1 litros de liquido a temperatura por 24hs."
    },
    {
        id: 3,
        title: "TERMO 750ML OSCURO",
        imagen: "https://www.deliargentina.com/image/cache/catalog/product/mates/termo-stanley-750-ml-para-mate-argentino/termo-classic-stanley-750-ml-negro-mate-335x335.jpg",
        price: 30000,
        stock: 20,
        category:"Termo",
        informacion:"Los termos Stanley están hechos con doble capa de acero inoxidable de 18/8 ideal para soportar altas temperaturas. Diseñado para durar, su pared exterior de acero grueso puede soportar golpes y caídas mejor que cualquier otro termo del mercado. El contenido del termo permite mantener 750 ml de liquido a temperatura por 24hs."
    },
    {
        id: 4,
        title: "SET MATERO OSCURO",
        imagen: "https://www.belloexport.com.ar/wp-content/uploads/2018/09/J06000-1-2.jpg",
        price: 10000,
        stock: 10,
        category:"Matero",
        informacion:"Set matero que incluye la mochila para transportar el termo y el mate. Viene incluido con portayerba y zucarero!"
    },
    {
        id: 5,
        title: "MATERO MOCHILA",
        imagen: "https://www.mateandoando.com/wp-content/uploads/2019/02/set-materos33-copia.jpg",
        price: 9000,
        stock: 15,
        category:"Matero",
        informacion:"Mochila matera hecha a base de cuero que permite transportar el mate y su termo, con portayerba y zucarero de regalo!"
    },
    {
        id: 6,
        title: "MOCHILA MATE GRIS",
        imagen: "https://www.publimania.com.ar/wp-content/uploads/2019/09/T554_perfil-1.jpg",
        price: 12000,
        category:"Matero",
        informacion:"Mochila matera de facil traslado con bolsillos incluidos para llevar los productos de mano de forma mas cómoda!"
    },
    {
        id: 7,
        title: "BOMBILLA ALPACA",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713430-MLA49337825848_032022-W.jpg",
        price: 2000,
        stock: 12,
        category:"Bombilla",
        informacion:"Bombilla de alpaca apta para uso de yerbas finas como con palo."
    },
    {
        id: 8,
        title: "BOMBILLA ALUMINIO",
        imagen: "https://casanostracba.com/wp-content/uploads/2020/04/32.jpg",
        price: 1500,
        stock: 20,
        category:"Bombilla",
        informacion:"Bombilla de aluminio ideal para mates o tererés para compartir con toda la familia y amigos. No se tapa!"
    },
    {
        id: 9,
        title: "BOMBILLA ACERO INOXIDABLE",
        imagen: "http://www.regionalesdelabasto.com/wp-content/uploads/2020/09/20004476-copia.jpg",
        price: 1300,
        stock: 25,
        category:"Bombilla",
        informacion:"Bombilla de acero inoxidable resistente a altas temperaturas."
    },
    {
        id: 10,
        title: "MATE CALABAZA CUERO",
        imagen: "https://regionalesrenacer.com/wp-content/uploads/2020/06/mate-calabaza-bocon.png",
        price: 2500,
        stock: 30,
        category:"MateCalabaza",
        informacion:"Mate calabaza bombeado de madera con detalles de bordado. Curar para mejor consumo del mate."
    },
    {
        id: 11,
        title: "MATE CALABAZA URUGUAYO",
        imagen: "http://lafamaonline.com/wp-content/uploads/2021/02/mate-calabaza-uruguaya-forrada-imperial-virola-labrada-1-1.jpg",
        price: 7000,
        stock: 25,
        category:"MateCalabaza",
        informacion:"Mate calabaza uruguayo hecho con madera artesanal mas hierro fundido en los bordes. Curar para mejor consumo del mate."
    },
    {
        id: 12,
        title: "MATE MADERA P/PINTAR",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_766169-MLA45293458046_032021-O.webp",
        price: 1500,
        stock: 30,
        category:"MateMadera",
        informacion:"Mate de madera con diseño incluido listo para personalizar a gusto del consumidor. Curar para mejor consumo del mate."
    },
    {
        id: 13,
        title: "MATE MADERA SÓLIDA",
        imagen: "https://latinafy.com/images/thumbnails/1080/1080/detailed/9/palosanto__63328.1613672248.1280.1280.jpg",
        price: 2000,
        stock: 20,
        category:"MateMadera",
        informacion:"Mate de madera tradicional hecho para consumir tu mate! Curar para mejor consumo del mate."
    },
    {
        id: 14,
        title: "MATE VIDRIO FORRADO",
        imagen: "https://casanostracba.com/wp-content/uploads/2020/02/Mate-vidrio-forrado.jpg",
        price: 1200,
        stock: 40,
        category:"MateVidrio",
        informacion:"Mate de vidrio forrado listo para utilizar con diseño original."
    },
    {
        id: 15,
        title: "MATE VIDRIO TRANSPARENTE",
        imagen: "http://d2r9epyceweg5n.cloudfront.net/stores/001/054/341/products/999-20021-6819719899a46ba40315868886932230-640-0.jpg",
        price: 1000,
        stock: 25,
        category:"MateVidrio",
        informacion:"Mate de vidrio transparente para controlar la yerba en cada mate que tomes!"
    },
]

export default productsDatabase;