import Heading from "./components/Text/Heading";
import ButtonsCompleto from "./components/ButtonsEixo/ButtonsCompleto";
import TextRodas from "./components/Text/TextRodas";
import CaixaConectividade from "./components/Questions/CaixaConectividade";
import Rails from "./components/Questions/Rails";
import Torque from "./components/Questions/Torque";

import './App.css'

import SkateBody from './assets/images/skate_body.png'
import './style/Images.css'

function App() {
  return (
    <div>
      <Heading />
      <TextRodas />
      <ButtonsCompleto />
      <img className="skate-body" src={SkateBody} alt="Skate Body" />
      <CaixaConectividade/>
      <Rails/>
      <Torque/>
   
    </div>
  );
}

export default App;