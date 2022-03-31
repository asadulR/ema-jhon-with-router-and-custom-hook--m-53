import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {handleRemoveProductBtn, product} = props;
    const {name, price, img, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className='review-item-img-container'>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-detail">
                    <h4 title={name}>{name.length > 15 ? name.slice(0, 20) + '...' : name}</h4>
                    <h4>Price: ${price}</h4>
                    <h4>Shipping: ${shipping}</h4>
                    <h4>Quantity: {quantity}</h4>

                </div>
                <div className="delete-btn-container">
                    <button onClick={() => handleRemoveProductBtn(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;