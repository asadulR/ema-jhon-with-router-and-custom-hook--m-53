import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, price, img, shipping, quantity} = props.product;
    return (
        <div className='review-item'>
            <div className='review-item-img-container'>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-detail">
                    <h4 title={name}>{name.length > 15 ? name.slice(0, 20) + '...' : name}</h4>
                    <h4>Price:{price}</h4>
                    <h4>Shipping: {shipping}</h4>
                    <h4>Quantity: {quantity}</h4>

                </div>
                <div className="delete-btn-container">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;