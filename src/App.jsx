import {Hero/* Confirmacion, Contador, DressCode, Galeria, Hospedaje, Invitado, Padres, Regalos, Ubicacion*/} from "./sections";
import { useEffect } from "react";
//import AOS from "aos";


const App = () =>{
  /*useEffect(() => {
    AOS.init({duration:3000});
  }, []);]*/

  return(
    <main className="relative bg-medium-pink">
      <section >
        <Hero />
      </section>
      {/* <section>
        <Contador />
      </section>
      <section>
        <Invitado />
      </section>
      <section>
        <Padres />
      </section>
      <section>
        <DressCode />
      </section>
      <section>
        <Ubicacion />
      </section>
      <section>
        <Galeria />
      </section>
      <section>
        <Regalos />
      </section>
      <section>
        <Hospedaje />
      </section>
      <section>
        <Confirmacion />
      </section>*/}
    </main> 
  );
}

export default App