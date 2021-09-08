import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const BtnArea: React.FC = () => {

    let history = useHistory();

    return (
        <React.Fragment>
            <Button variant="outline-success" className='py-md-0 my-md-2 mb-0 mt-2'
                    onClick={() => history.push('/register')}>Register</Button>
            <Button variant="outline-success" className='py-md-0 my-md-2 border-0 pl-md-2 ml-2'
                    onClick={() => history.push('/login')}>Log in</Button>
        </React.Fragment>
    )
}

export default BtnArea;