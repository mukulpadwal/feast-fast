import React from 'react'

export const Card = ({ data }) => {

    let options = data.options[0];
    let priceOptions = Object.keys(options).splice(1);

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={data.img} className="card-img-top" alt="..." style={{height:"200px", objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success'>
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

                        <select className='m-2 h-100 bg-success'>
                            {
                                priceOptions.map((data) => {
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Final Price :  {}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
