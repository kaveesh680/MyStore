import React from 'react';
import {BiTrashAlt} from "react-icons/all";

type DeleteIconProps = {
    index: number
    id: string
}

const DeleteIcon: React.FC<DeleteIconProps> = (props) => {
    const {index, id} = props;

    return (
        <BiTrashAlt/>
    )
}

export default DeleteIcon;
