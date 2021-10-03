import React, {useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import CheckoutHeader from "../../cart-table/CheckoutHeader";
import Select from "react-select";
import {ISelectOption} from "../../../types/types";
import {ValueType} from "react-select/src/types";
import Orders from "./Orders";

const AllOrders: React.FC = () => {
    const [selectOptions, setSelectOptions] = useState<ValueType<ISelectOption, true>>([]);

    const options = [
        {value: 'Pending', label: 'Pending'},
        {value: 'Completed', label: 'Completed'}
    ];

    const handleOnOrderSelect = (option: ValueType<ISelectOption, true>) => {
        setSelectOptions(option);
    }

    const customStyles: any = {
        option: (provided: any, state: any) => ({...provided, color: state.isFocused ? 'blue' : 'red'})
    }

    return (
        <Container fluid={true}>
            <Row className='mt-4 productsTable mx-0 justify-content-center'>
                <Col xs={12} xl={10} className='px-0'>
                    <Row>
                        <Col xs={12}>
                            <Row className='pl-0 pl-md-4 ml-0 mr-0 '>
                                <CheckoutHeader header="Orders"/>
                            </Row>
                        </Col>
                    </Row>
                    <Card className='mx-md-4 ml-0 px-3 py-3 my-3 mr-0'>
                        <Card.Body className='px-0 px-xl-5 px-md-0'>
                            <Row>
                                <Col md={6} xs={12}>
                                    <Select className='pr-md-3 mb-0'
                                            options={options}
                                            isClearable
                                            isSearchable
                                            isMulti={true}
                                            styles={customStyles}
                                            onChange={(option: ValueType<ISelectOption, true>) => handleOnOrderSelect(option)}/>
                                </Col>
                            </Row>
                            <Orders categories={selectOptions}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AllOrders;