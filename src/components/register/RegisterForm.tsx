import React, {FormEvent, useState} from "react";
import {Col, Form, FormControl, Row} from "react-bootstrap";
import FormHeader from "../login/FormHeader";
import LogInBtn from "../login/LogInBtn";

const RegisterForm: React.FC = () => {
    const [isValidate, setIsValidate] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
    const [checkValue, setCheckValue] = useState<boolean>(false);

    const handleOnCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckValue(e.target.checked);
    }

    const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleOnPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleOnConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleOnFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleOnLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || email === "" || !password || password === "" || !firstName || firstName === "" || !lastName ||
            lastName === "" || !confirmPassword || confirmPassword === "" || confirmPassword !== password) {
            setIsValidate(true);
            return
        }
        alert("successfully logged!");
    }

    return (
        <Col xs={12} md={6} className='register-form mt-3 pl-lg-5'>
            <FormHeader text="Sign Up"/>
            <Row>
                <Col xs={12}>
                    <Form noValidate validated={isValidate} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} md="6" xs="12" controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={firstName ? firstName : ''}
                                    required
                                    onChange={handleOnFirstNameChange}
                                />
                                <FormControl.Feedback type="invalid">
                                    <p className="font-weight-bold mb-0">Enter First Name</p>
                                </FormControl.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" xs="12" controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={lastName ? lastName : ""}
                                    required
                                    onChange={handleOnLastNameChange}
                                />
                                <FormControl.Feedback type="invalid">
                                    <p className="font-weight-bold mb-0">Enter Last Name</p>
                                </FormControl.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="formGridEmail" className='mb-3'>
                            <Form.Label className='mb-2'>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email ? email : ''}
                                onChange={handleOnEmailChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Email</p>
                            </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGridPassword" className='mb-3'>
                            <Form.Label className='mb-2'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password ? password : ''}
                                onChange={handleOnPasswordChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0"> Enter Password</p>
                            </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGridPassword" className='mb-0'>
                            <Form.Label className='mb-2'>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={confirmPassword ? confirmPassword : ''}
                                onChange={handleOnConfirmPasswordChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Confirm Password</p>
                            </FormControl.Feedback>

                        </Form.Group>
                        <Row className='text-center mt-3'>
                            <Col xs={12}>
                                <Form.Check
                                    label="I accept Terms of Use and Privacy Policy"
                                    type="checkbox"
                                    onChange={handleOnCheckChange}
                                />
                            </Col>
                        </Row>
                        <LogInBtn text="Sign Up" checkValue={checkValue}/>
                    </Form>
                    <Row className='text-center mt-2 signup'>
                        <Col xs={12}>
                            <label>
                                Do you have an account?
                                <a href='/login'> Log In</a>
                            </label>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default RegisterForm;