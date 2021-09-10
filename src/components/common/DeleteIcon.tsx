import React from "react";
import {FiTrash} from "react-icons/all";
import {useDispatch} from "react-redux";
import {deleteFromCart} from "../../store/actions/CartActions";


type DeleteIconProps = {
    size: number
    color: string
    id: string
}

const DeleteIcon: React.FC<DeleteIconProps> = (props) => {
    const {size, color, id} = props;
    const dispatch = useDispatch();

    const handleOnDelete = (id:string) => {
        dispatch(deleteFromCart(id));
    }

    return (
        <React.Fragment>
            <FiTrash className="delete-icon" size={size} color={color} onClick={() => handleOnDelete(id)}/>
        </React.Fragment>
    );
}

export default DeleteIcon;

