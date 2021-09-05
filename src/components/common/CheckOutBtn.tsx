import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

type CheckOutBtnProps = {
    classname:string
}

const CheckOutBtn:React.FC<CheckOutBtnProps> = (props) => {

    const {classname} = props;
    let history = useHistory();

    return(
        <Button className={classname} onClick={() => history.push('./checkout')}>Check Out</Button>
    )
}

export default CheckOutBtn;