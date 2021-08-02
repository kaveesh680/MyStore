import React from "react";
import {Button} from "react-bootstrap";

type CheckOutBtnProps = {
    classname:string
}

const CheckOutBtn:React.FC<CheckOutBtnProps> = (props) => {

    const {classname} = props;

    return(
        <Button className={classname}>Check Out</Button>
    )
}

export default CheckOutBtn;