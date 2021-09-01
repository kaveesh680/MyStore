import React from 'react';
import {Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";


const Logo: React.FC = () => {

    let history = useHistory();

    return (
        <Col xs={4} className='pl-md-5'>
            <span className='logo' onClick={() => history.push('/home')}>LOGO</span>
        </Col>
    )
}

export default Logo;