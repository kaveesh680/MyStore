import React, {useState} from "react";
import {Col, FormControl, InputGroup} from "react-bootstrap";

const Quantity: React.FC = () => {

    const [unit, setUnit] = useState<boolean>(true);
    const [value, setValue] = useState<number | null>(null);

    const handleChangeUnit = () => {
        setUnit(!unit);
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value));
    }

    return (
        <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
            <InputGroup className="mb-3">
                <FormControl
                    type="number"
                    min="1"
                    onChange={handleOnChange}
                    value={value ? value : 1}
                />
                <InputGroup.Text id="basic-addon1"
                                 onClick={() => handleChangeUnit()}>{unit ? "kg" : "g"}</InputGroup.Text>
            </InputGroup>
        </Col>
    )
}

export default Quantity;