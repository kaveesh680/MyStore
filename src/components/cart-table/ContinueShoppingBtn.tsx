import React from "react";
import {Button, Col} from "react-bootstrap";
import {BiChevronLeft} from "react-icons/all";
import {useHistory} from "react-router-dom";

type ContinueShoppingBtnProps = {
    path: string,
    content: string,
    variant: string,
    classname:string
}

const ContinueShoppingBtn: React.FC<ContinueShoppingBtnProps> = (props) => {
    const {path, content, variant,classname} = props;

    const history = useHistory();

    const handleOnClick = () => {
        history.push(path);
    }

    return (
        <Col md={4} xl={2} lg={3} sm={6} className={classname}>
            <Button variant={variant} className='continueShoppingBtn'
                    onClick={handleOnClick}>
                {content === "Continue Shopping" && <BiChevronLeft className='pb-1'/>}
                {content}
            </Button>
        </Col>
    )
}

export default ContinueShoppingBtn;
