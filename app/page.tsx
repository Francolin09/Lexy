import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";

export default function Home(){
  return(
    <div>
      <Hero/>
      <Servicios/>
      <SobreNosotros/>
      <Contact/>
    </div>
  )
}

