import ButtonsEixoDianteiro from "./ButtonsEixoDianteiro";
import ButtonsEixoTraseiro from "./ButtonsEixoTraseiro";

function ButtonsCompleto() {
    return (
        <div className="buttons-completo">
            <ButtonsEixoDianteiro />
            <ButtonsEixoTraseiro />
        </div>
    );
}

export default ButtonsCompleto