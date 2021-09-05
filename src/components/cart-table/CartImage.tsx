import React from 'react';

type CartImageProps = {
    image: string
}

const CartImage: React.FC<CartImageProps> = (props) => {

    const {image} = props;

    return (
        <img className='tr-image' src={image} alt={`${image}`}/>
    )
}

export default CartImage;