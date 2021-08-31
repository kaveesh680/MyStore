import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {IProducts} from "../../types/types";
import CabbageImg from '../../assets/images/groceryImages/cabbage.png';
import CarrotImg from '../../assets/images/groceryImages/carrot.png';
import EggplantImg from '../../assets/images/groceryImages/eggplant.png';
import GarlicImg from '../../assets/images/groceryImages/garlic.png';
import LeaksImg from '../../assets/images/groceryImages/garlic.png';
import OnionImg from '../../assets/images/groceryImages/onion.png';
import PotatoImg from '../../assets/images/groceryImages/potato.png';
import ProductCategoryArea from "./ProductCategoryArea";

const Products: React.FC = () => {

    const allProducts: IProducts[] = [
        {
            category: "Vegetables",
            productDetails: [{
                product: {
                    id: "def3rrufd",
                    name: "Cabbage",
                    image: CabbageImg,
                    currentPrice: 35,
                    oldPrice: 45
                },
                inCart: true
            }, {
                product: {
                    id: "efer34ds",
                    name: "Carrot",
                    image: CarrotImg,
                    currentPrice: 45,
                    oldPrice: null
                },
                inCart: false
            }, {
                product: {
                    id: "fedfd8f8",
                    name: "EggPlant",
                    image: EggplantImg,
                    currentPrice: 35,
                    oldPrice: null
                },
                inCart: false
            }, {
                product: {
                    id: "dfdfdf7",
                    name: "Garlic",
                    image: GarlicImg,
                    currentPrice: 68,
                    oldPrice: 79
                },
                inCart: false
            }, {
                product: {
                    id: "dfdfdf878",
                    name: "Leaks",
                    image: LeaksImg,
                    currentPrice: 65,
                    oldPrice: null
                },
                inCart: false
            }, {
                product: {
                    id: "232sdsdsd",
                    name: "Onion",
                    image: OnionImg,
                    currentPrice: 56,
                    oldPrice: 23
                },
                inCart: false
            }, {
                product: {
                    id: "2323fdfdf",
                    name: "Potato",
                    image: PotatoImg,
                    currentPrice: 35,
                    oldPrice: 45
                },
                inCart: false
            }

            ]
        }
    ];

    return (
        <Container>
            <Row className='products justify-content-center'>
                <Col xs={12}>
                    {allProducts.map((shopProducts: IProducts, index: number) =>
                        <ProductCategoryArea products={shopProducts} key={index}/>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Products;
