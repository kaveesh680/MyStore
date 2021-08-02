import React from 'react';
import {Nav} from "react-bootstrap";
import {FaTruck, FiPhone, FiUser} from "react-icons/all";

type HeaderNavLinkProps = {
    icon: string
    detail: string
}

const HeaderNavLink: React.FC<HeaderNavLinkProps> = (props) => {

    const {icon, detail} = props;

    const renderIcon = () => {
        if (icon === "phone") {
            return <FiPhone size={23} className='mr-2' color='black'/>
        } else if (icon === "truck") {
            return <FaTruck size='23' className='mr-2' color='black'/>
        } else {
            return <FiUser size='23' className='mr-2' color='black'/>
        }
    }

    return (
        <Nav.Link href="#home" className='pr-4 pl-0'>
            {renderIcon()}
            {detail}
        </Nav.Link>
    )
}

export default HeaderNavLink;