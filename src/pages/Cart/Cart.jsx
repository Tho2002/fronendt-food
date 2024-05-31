import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StroreContext'
import { useNavigate } from 'react-router-dom';
export default function Cart() {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate()
    return (
        <>

            <div className='cart'>
                <div className="cart-items">
                    <div className="cart-items-title">
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div>


                                    <div className="cart-items-title cart-items-item">
                                        <img src={url + "/images/" + item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>{item.price}$</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>{item.price * cartItems[item._id]}</p>
                                        <p className='cross' onClick={() => removeFromCart(item._id)}>
                                            <i class="fa-solid fa-xmark"></i>
                                        </p>
                                    </div>
                                    <hr />
                                </div>

                            )

                        }

                    })}

                </div>

            </div>


            <div className='cart-bottom'>

                <div className="cart-total">
                    <h2>Cart</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery</p>
                        <p>{getTotalCartAmount() === 0 ? 0 : 2}$</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}$</b>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEDD TO CHECKOUT</button>
                </div>


                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code ,Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" name="" id="" placeholder='promocode' />
                            <button >submit</button>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
