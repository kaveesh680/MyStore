import React from "react";
import {ListGroup} from "react-bootstrap";
import {useHistory} from "react-router-dom";

type FooterLinkProps = {
    name: string
    path: string
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {

    const {name, path} = props;
    let history = useHistory();

    return (
        <ListGroup.Item className='py-md-4 py-1 align-self-center'
                        onClick={() => history.push(`${path}`)}>{name}</ListGroup.Item>
    )
}

export default FooterLink;