import React from "react";
import {ListGroup} from "react-bootstrap";

type FooterLinkProps = {
    name: string
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {

    const {name} = props;

    return (
        <ListGroup.Item className='py-md-4 py-1 align-self-center'>{name}</ListGroup.Item>
    )
}

export default FooterLink;