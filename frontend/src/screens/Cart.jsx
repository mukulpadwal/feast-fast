import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive rable-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Option</th>
                            <th scope='col' >Amount</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            data.map((food, idx) => {
                                return (
                                    <tr>
                                        <th scope='row'>{idx + 1}</th>
                                        <tr>{ }</tr>
                                        <tr>{ }</tr>
                                        <tr>{ }</tr>
                                        <tr>{ }</tr>
                                        <tr>{ }</tr>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </table>
                <div>
                    {/* <h1 className='fs-2'> Total Price : {totalPrice}/-</h1> */}
                </div>
                <div>
                    <button className='btn bg-success mt-5'> Check Out </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;