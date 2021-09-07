import React from "react";
import {Col, Image} from "react-bootstrap";

type ImgAreaProps = {
    img: string
    classname:string
}

const ImgArea: React.FC<ImgAreaProps> = (props) => {

    const {img, classname} = props;

    return (
        <Col xs={12} md={6} className={classname}>
            <Image src={img} alt="login" fluid={true}/>
        </Col>
    )
}

export default ImgArea;