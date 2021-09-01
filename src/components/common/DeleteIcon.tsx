import React from "react";
import {FiTrash} from "react-icons/all";


type DeleteIconProps = {
    size: number
    color: string
}

const DeleteIcon: React.FC<DeleteIconProps> = (props) => {
    const {size, color} = props;

    return (
        <React.Fragment>
            <FiTrash className="delete-icon" size={size} color={color}/>
        </React.Fragment>
    );
}

export default DeleteIcon;

