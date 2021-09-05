import React, {useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import CheckoutHeader from "./CheckoutHeader";
import ContinueShoppingBtn from "./ContinueShoppingBtn";
import CartHeader from "./CartHeader";
import CartTotal from "./CartTotal";
import CartTable from "./CartTable";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Checkout: React.FC = () => {

    const [total, setTotal] = useState<number>(0);

    const handleOnGetTotal = (total: number) => {
        setTotal(total)
    }

    return (
        <Container fluid={true}>
            <Row className='mt-4 checkOut mx-0 justify-content-center'>
                <Col xs={12} xl={10} className='px-0'>
                    <Row>
                        <Col xs={12}>
                            <Row className='pl-0 pl-md-4 ml-0 mr-2 '>
                                <CheckoutHeader/>
                                <ContinueShoppingBtn/>
                            </Row>
                        </Col>
                    </Row>
                    <Card className='mx-md-4 ml-0 px-3 py-3 my-3 mr-0'>
                        <CartHeader/>
                        <Card.Body className='px-0 px-xl-5 px-md-0'>
                            <CartTable onGetTotal={handleOnGetTotal}/>
                            <CartTotal total={total}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;
