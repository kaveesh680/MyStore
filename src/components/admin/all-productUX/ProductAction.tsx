import React from 'react';
import {BiEdit, BiTrashAlt} from "react-icons/all";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../store/actions/ProductActions";

type ProductActionProps = {
    id: string
}

const ProductAction: React.FC<ProductActionProps> = (props) => {
    const {id} = props;
    const dispatch = useDispatch();

    const handleOnDelete = () => {
        dispatch(deleteProduct(id));
    }

    return (
        <div className='actionBtns'>
            <BiEdit className='mr-2' size={20}/>
            <BiTrashAlt size={20} onClick={handleOnDelete}/>
        </div>
    )
}

export default ProductAction;