import React, {useEffect, useState} from "react";
import {Col, FormControl, InputGroup} from "react-bootstrap";
import {ICheckoutProduct} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

type QuantityProps = {
    quantity: number
    unit: boolean
    setQuantity: (quantity: number) => void
    inCart: boolean
    id:string
}

const Quantity: React.FC<QuantityProps> = (props) => {

    const {quantity, unit, setQuantity, inCart, id} = props;
    const checkoutProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.productsInCart);
    console.log(checkoutProducts);

    const [value, setValue] = useState<number | null>(null);
    const [productUnit, setProductUnit] = useState<boolean>(true);

    const handleChangeUnit = () => {
        setProductUnit(!unit);
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value));
    }
    useEffect(() => {
        if (!value) {
            return
        }
        setQuantity(value);
    }, [value, checkoutProducts]);

    useEffect(() => {
        if (!inCart) {
            setValue(1);
        }
    }, [inCart])

    return (
        <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
            <InputGroup className="mb-3">
                <FormControl
                    type="number"
                    min="1"
                    onChange={handleOnChange}
                    value={quantity}
                />
                {unit && <InputGroup.Text id="basic-addon1"
                                          onClick={() => handleChangeUnit()}>{productUnit ? "kg" : "g"}</InputGroup.Text>}

            </InputGroup>
        </Col>
    )
}

export default Quantity;