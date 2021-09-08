import React, {CSSProperties, useEffect, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {useHistory, useLocation} from "react-router-dom";
import {categoryStyles} from "../../custom-styles/CustomCategoryStyles";

type CategoryProps = {
    image: string,
    category: string
}

const Category: React.FC<CategoryProps> = (props) => {

    const {image, category} = props;
    let history = useHistory();
    let {pathname} = useLocation();

    const [styles, setStyles] = useState<CSSProperties>({});

    useEffect(() => {
        if (pathname === `/home/${category}`) {
            setStyles(categoryStyles);
        } else {
            setStyles({});
        }
    }, [pathname])

    const handleClick = () => {
        history.push(`/home/${category}`);
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