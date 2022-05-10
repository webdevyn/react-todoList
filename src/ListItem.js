import { useState } from "react";

const ListItem = function(props){
    const [completed, setCompleted] = useState(false)

    const markItemComplete = () => {
        setCompleted(!completed)
    }

    return (
        <li className={completed === true ? "completed" : ""} onClick={markItemComplete}>
            {props.itemName}
            <button id="delete" onClick={props.delete}> Delete </button>
        </li>
    )

}

export default ListItem