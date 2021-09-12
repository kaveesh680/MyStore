import React, {useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import AllProducts from "./AllProducts";
import CheckoutHeader from "../../cart-table/CheckoutHeader";
import ContinueShoppingBtn from "../../cart-table/ContinueShoppingBtn";
import Select from "react-select";
import {ISelectOption} from "../../../types/types";
import {ValueType} from "react-select/src/types";

const AdminProducts: React.FC = () => {
    const [selectOptions, setSelectOptions] = useState<ValueType<ISelectOption, true>>([]);

    const options = [
        {value: 'Electronic', label: 'Electronic'},
        {value: 'Fruit', label: 'Fruit'},
        {value: 'Vegetable', label: 'Vegetable'},
        {value: 'Meat', label: 'Meat'},
        {value: 'Pharmacy', label: 'Pharmacy'},
        {value: 'Food', label: 'Food'}
    ]

    const handleOnCategorySelect = (option: ValueType<ISelectOption, true>) => {
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
                                <CheckoutHeader header="Products"/>
                                <ContinueShoppingBtn path="/admin/add-product" content="Create Product"
                                                     variant="success"
                                                     classname="pl-0 pr-0 text-md-right pr-md-4 text-center"/>
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
                                            onChange={(option: ValueType<ISelectOption, true>) => handleOnCategorySelect(option)}/>
                                </Col>
                            </Row>
                            <AllProducts categories={selectOptions}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminProducts;