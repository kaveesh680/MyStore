import React, {FormEvent, useState} from "react";
import {Col, Form, FormControl, Row} from "react-bootstrap";
import FormHeader from "./FormHeader";
import LogInBtn from "./LogInBtn";
import {useHistory} from "react-router-dom";

const FormArea: React.FC = () => {

    let history = useHistory();

    const [isValidate, setIsValidate] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleOnPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || email === "" || !password || password === "") {
            setIsValidate(true);
            return
        }
        alert("successfully logged!");
        history.push('/register');

    }

    return (
        <Col xs={12} md={6} className='login-form mt-2 pl-lg-5'>
            <FormHeader text="Log In"/>
            <Row>
                <Col xs={12}>
                    <Form noValidate validated={isValidate} onSubmit={handleSubmit}>
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
                        <Form.Group controlId="formGridPassword" className='mb-0'>
                            <Form.Label className='mb-2'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password ? password : ''}
                                onChange={handleOnPasswordChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Password</p>
                            </FormControl.Feedback>
                        </Form.Group>
                        <Row className='text-center mt-3'>
                            <Col xs={12}>
                                <Form.Check
                                    label="Remember me"
                                    type="checkbox"
                                />
                            </Col>
                        </Row>
                        <LogInBtn text="Log In" checkValue={true}/>
                    </Form>
                    <Row className='text-center mt-2 signup'>
                        <Col xs={12}>
                            <label>
                                Don't have an account?
                                <a href='/register'> Sign Up</a>
                            </label>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FormArea;