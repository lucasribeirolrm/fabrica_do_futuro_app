import TextCaixaConectividade from "../Text/TextCaixaConectividade";
import ToggleCaixaConectividade from "../ToggleButtons/ToggleCaixaConectividade";

import '../../style/Questions.css'

function CaixaConectividade() {
    return (
        <div className="question">
            <TextCaixaConectividade/>
            <ToggleCaixaConectividade/>
        </div>
    );
}

export default CaixaConectividade