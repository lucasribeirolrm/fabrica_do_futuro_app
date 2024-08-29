import TextRails from "../Text/TextRails";
import ToggleRails from "../ToggleButtons/ToggleRails";

import '../../style/Questions.css'

function Rails() {
    return (
        <div className="question">
            <TextRails/>
            <ToggleRails/>
        </div>
    );
}

export default Rails