const ListItem = function(props){
    return <li onClick={props.delete}>{props.itemName}</li>
}

export default ListItem