import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from '../Context/ContextReducer';

export const Card = ({ data }) => {

    const priceRef = useRef();

    let dispatch = useDispatchCart();
    let cartData = useCart();

    let options = data.options[0];
    let priceOptions = Object.keys(options).splice(1);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleAddToCart = async () => {
        await dispatch({type: "ADD", id: data._id, name: data.name, price: finalPrice, qty: qty, size: size, img: data.img});
        console.log(cartData);
    }

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    let finalPrice = qty * parseInt(options[size]);

    return (
        <Fragment>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src={data.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />

                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <select className='m-2 h-100 bg-success' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {
                                priceOptions.map((data) => {
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />

                    <button className='btn btn-success justify-center m-auto' onClick={handleAddToCart}>Add to Cart</button>
                </div>

            </div>
        </Fragment>
    )
}
