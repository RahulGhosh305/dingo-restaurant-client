import React, { useEffect, useState } from 'react';
import useAuth from '../../LoginSignUpPage/useAuthHook';

const CustomerOrder = () => {
    const [items, setItems] = useState([])
    const { isLoggedIn } = useAuth()
    const email = isLoggedIn.email
    useEffect(() => {
        fetch(`http://localhost:5000/customerOrderMenu?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItems(data)
            })
    }, [email])
    console.log(items)
    return (
        <div className="container">
            <h5>Your Ordered Items</h5>

            {
                items.map((singleItem, index) => <div key={Math.random()}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <button className="card-title btn btn-sm btn-dark disabled">Order: {index + 1}</button>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CustomerOrder;