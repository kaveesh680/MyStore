import React, {useEffect, useState} from 'react'
import {Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Select from "react-select";
import {IOption, IShippingForm} from "../../types/types";
import Countries from "./countries.json";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {addShippingFormDetails} from "../../store/actions/FormAction";

type ChangeShippingAddressProps = {
    validated: boolean
}

const ChangeShippingAddress: React.FC<ChangeShippingAddressProps> = (props) => {

    const {validated} = props;

    const [name, setName] = useState<string | null>(null);
    const [billingAddress, setBillingAddress] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [postalCode, setPostalCode] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState<string | null>(null);
    const [flag, setFlag] = useState<string | null>(null);
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const shippingForm: IShippingForm | null = useSelector((state: RootState) => state.formReducer.shippingForm);
    const dispatch = useDispatch();

    useEffect(() => {
        let shippingDetails: IShippingForm = {
            name: name !== null ? name : (shippingForm ? shippingForm.name : ''),
            billingAddress: billingAddress !== null ? billingAddress : (shippingForm ? shippingForm.billingAddress : ''),
            city: city !== null ? city : (shippingForm ? shippingForm.city : ''),
            postalCode: postalCode !== null ? postalCode : (shippingForm ? shippingForm.postalCode : ''),
            country: country !== null ? country : (shippingForm ? shippingForm.country : ''),
            countryCode: countryCode !== null ? countryCode : (shippingForm ? shippingForm.countryCode : ''),
            phoneNumber: phoneNumber !== null ? phoneNumber : (shippingForm ? shippingForm.phoneNumber : '')
        }
        dispatch(addShippingFormDetails(shippingDetails));
    }, [name, billingAddress, city, postalCode, countryCode, country, flag, phoneNumber])

    const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleOnBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBillingAddress(e.target.value);
    }

    const handleOnCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleOnPostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostalCode(e.target.value);
    }

    const handleOnCountryChange = (option: IOption | null) => {
        if (option) {
            setCountry(option.value);
            setCountryCode(option.label?.substr(4, countryCode?.length));
            setFlag(option.flag)
        }
    }

    const handleOnPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const options: IOption[] = Countries.map((country: any) => ({
        value: `${country.idd.root}${country.idd.suffixes[0]}`,
        label: `${country.flag} ${country.name.common}`,
        flag: country.flag
    }));

    return (
        <Row className='mt-3'>
            <Col xs={12}>
                <Form className='pr-0' noValidate validated={validated}>
                    <Form.Group controlId="formGridName" className='mb-0'>
                        <Form.Label className='mb-0'>Name*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={shippingForm ? shippingForm.name : ''}
                            required
                            onChange={handleOnNameChange}
                        />
                        <FormControl.Feedback type="invalid">
                            <p className="font-weight-bold mb-0">Enter Name</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGridBillingAddress" className='mb-0'>
                        <Form.Label className='mb-0'>Billing Address*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Billing Address"
                            value={shippingForm ? shippingForm.billingAddress : ''}
                            required
                            onChange={handleOnBillingAddressChange}
                        />
                        <FormControl.Feedback type="invalid">
                            <p className="font-weight-bold mb-0">Enter Billing Address</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Row className="mb-0">
                        <Col md={4} className='form-group mb-0 pr-md-0'>
                            <Form.Label className='mb-0'>City / suburb*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City / suburb"
                                value={shippingForm ? shippingForm.city : ''}
                                onChange={handleOnCityChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter City/suburb</p>
                            </FormControl.Feedback>
                        </Col>
                        <Col md={4} className='form-group mb-0 pr-md-0'>
                            <Form.Label className='mb-0'>Postal Code*</Form.Label>
                            <Form.Control type="text"
                                          pattern="[0-9]*"
                                          placeholder="Postal Code"
                                          value={shippingForm ? shippingForm.postalCode : ''}
                                          onChange={handleOnPostalCodeChange}
                                          required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Postal code</p>
                            </FormControl.Feedback>
                        </Col>
                        <Col md={4} className='form-group mb-0'>
                            <Form.Label className='mb-0'>Country*</Form.Label>
                            <Select
                                options={options}
                                isClearable
                                isSearchable
                                onChange={(option: IOption | null) =>
                                    handleOnCountryChange(option)}
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Country</p>
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    <Form.Group controlId="formGridContactNumber" className='mb-0'>
                        <Form.Label className='mb-0'>Contact Number*</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    {`${flag ? flag : ""}${country ? country : ""}`}
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="tel"
                                value={shippingForm ? shippingForm.phoneNumber : ''}
                                onChange={handleOnPhoneNumberChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Contact
                                    Number</p>
                            </FormControl.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default ChangeShippingAddress;