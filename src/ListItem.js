import { useState } from "react";

const ListItem = function(props){
    const [completed, setCompleted] = useState(false)

    const markItemComplete = () => {
        setCompleted(!completed)
    }

    return (
        <li className={completed === true ? "completed" : ""} onClick={markItemComplete}>
            {props.itemName}
            <button onClick={props.delete}> Delete </button>
        </li>
    )
    // return <li onClick={() => props.delete(props.id)}>{props.itemName}</li>

}

export default ListItem