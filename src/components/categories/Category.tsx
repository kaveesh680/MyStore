import React, {CSSProperties, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {categoryStyles} from "../../custom-styles/CustomCategoryStyles";

type CategoryProps = {
    image: string,
    category: string
}

const Category: React.FC<CategoryProps> = (props) => {

    const {image, category} = props;

    const [styles, setStyles] = useState<CSSProperties>({});

    const handleClick = () => {
        setStyles(categoryStyles);
    }

    return (
        <Col xs={2} className='px-0 categories'>
            <div className='category text-center mx-1' style={styles} onClick={handleClick}>
                <Image src={image} alt={category}/>
                <p className='mb-1'>{category}</p>
            </div>
        </Col>
    )
}

export default Category;