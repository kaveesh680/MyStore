import React from "react";
import {Button} from "react-bootstrap";

const BtnArea: React.FC = () => {
    return (
        <React.Fragment>
            <Button variant="outline-success" className='py-md-0 my-md-2 mb-0 mt-2'>Register</Button>
            <Button variant="outline-success" className='py-md-0 my-md-2 border-0 pl-md-2 ml-2'>Log in</Button>
        </React.Fragment>
    )
}

export default BtnArea;