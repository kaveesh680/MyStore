import React, {useState} from 'react';
import {BiEdit} from "react-icons/all";
import {IOrder} from "../../../types/types";
import Order from "./Order";

type DeleteProps = {
    order:IOrder
}

const Edit: React.FC<DeleteProps> = (props) => {

    const {order} = props;
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <div>
                <BiEdit className='mr-2' size={20} onClick={handleShow}/>
            </div>
            {show && <Order handleClose={handleClose} show={show} order={order}/>}
        </React.Fragment>
    )
}

export default Edit;