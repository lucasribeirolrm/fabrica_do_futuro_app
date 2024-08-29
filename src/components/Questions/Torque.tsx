import TextTorque from "../Text/TextTorque";
import SliderTorque from "../Slider/SliderTorque";

import '../../style/Questions.css'

function Torque() {
    return (
        <div className="question">
            <TextTorque/>
            <SliderTorque initialValue={5}/>
        </div>
    );
}

export default Torque