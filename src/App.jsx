import Item from "./componentes/Item/index";
import "./App.css";
import Bootstrap from "./componentes/Bootstrap/Bootstrap";
import Flex from "./componentes/Flex/flex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bootstrap />
      </header>
      <main className="Main-productos">
        <Flex>
          <Item
            title="TERMO STANLEY OSCURO"
            imagen="https://www.doiteargentina.com.ar/wp-content/uploads/2019/11/doite-termo-stanley-negro-nuevo-2020-46719-01.jpg"
            price={40000}
          />
          <Item
            title="TERMO STANLEY VERDE MILITAR"
            imagen="https://matesibarra.com/wp-content/uploads/2021/06/doite-termo-stanley-verde-nuevo-2020-46721-02.jpg"
            price={39000}
          />
          <Item
            title="TERMO 750ML OSCURO"
            imagen="https://www.deliargentina.com/image/cache/catalog/product/mates/termo-stanley-750-ml-para-mate-argentino/termo-classic-stanley-750-ml-negro-mate-335x335.jpg"
            price={30000}
          />
          <Item
            title="SET MATERO OSCURO"
            imagen="https://www.belloexport.com.ar/wp-content/uploads/2018/09/J06000-1-2.jpg"
            price={10000}
          />
          <Item
            title="MATERO MOCHILA"
            imagen="https://www.mateandoando.com/wp-content/uploads/2019/02/set-materos33-copia.jpg"
            price={9000}
          />
          <Item
            title="MOCHILA MATE GRIS"
            imagen="https://www.publimania.com.ar/wp-content/uploads/2019/09/T554_perfil-1.jpg"
            price={12000}
          />
          <Item
            title="BOMBILLA ALPACA"
            imagen="https://http2.mlstatic.com/D_NQ_NP_713430-MLA49337825848_032022-W.jpg"
            price={2000}
          />
          <Item
            title="BOMBILLA ALUMINIO"
            imagen="https://casanostracba.com/wp-content/uploads/2020/04/32.jpg"
            price={1500}
          />
          <Item
            title="BOMBILLA ACERO INOXIDABLE"
            imagen="http://www.regionalesdelabasto.com/wp-content/uploads/2020/09/20004476-copia.jpg"
            price={1300}
          />
          <Item
            title="MATE CALABAZA CUERO"
            imagen="https://regionalesrenacer.com/wp-content/uploads/2020/06/mate-calabaza-bocon.png"
            price={2500}
          />
          <Item
            title="MATE CALABAZA URUGUAYO"
            imagen="http://lafamaonline.com/wp-content/uploads/2021/02/mate-calabaza-uruguaya-forrada-imperial-virola-labrada-1-1.jpg"
            price={7000}
          />
          <Item
            title="MATE MADERA P/PINTAR"
            imagen="https://http2.mlstatic.com/D_NQ_NP_766169-MLA45293458046_032021-O.webp"
            price={1500}
          />
          <Item
            title="MATE MADERA SÓLIDA"
            imagen="https://latinafy.com/images/thumbnails/1080/1080/detailed/9/palosanto__63328.1613672248.1280.1280.jpg"
            price={2000}
          />
          <Item
            title="MATE VIDRIO FORRADO"
            imagen="https://casanostracba.com/wp-content/uploads/2020/02/Mate-vidrio-forrado.jpg"
            price={1200}
          />
          <Item
            title="MATE VIDRIO TRANSPARENTE"
            imagen="http://d2r9epyceweg5n.cloudfront.net/stores/001/054/341/products/999-20021-6819719899a46ba40315868886932230-640-0.jpg"
            price={1000}
          />
        </Flex>
      </main>
    </div>
  );
}

export default App;
