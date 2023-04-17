import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?w=1380&t=st=1681661993~exp=1681662593~hmac=d7cd1baa046c39ebb59658c9b17eaf8902b5a09b7b838180b4d75d5d26aa95e2" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some important information.</p>
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
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Final Price :
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
