import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartHeader = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/checkout")
    }
    return (
        <div style={{ marginTop: 150 }}>
            <div className="container">
                <h3 className="mb-3">Checkout or add some items to your cart</h3>
                <div className="">
                    <div className="table-responsive">
                        <table className="table border text-center">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col">PRODUCT</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">X</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Burger</th>
                                    <th scope="col">120 Tk.</th>
                                    <th scope="col">1</th>
                                    <th scope="col">120 Tk.</th>
                                </tr>
                                <tr>
                                    <th scope="row">X</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Briyani</th>
                                    <th scope="col">160 Tk.</th>
                                    <th scope="col">1</th>
                                    <th scope="col">160 Tk.</th>
                                </tr>
                                <tr>
                                    <th scope="row">X</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Ice-creme</th>
                                    <th scope="col">75 Tk.</th>
                                    <th scope="col">2</th>
                                    <th scope="col">150 Tk.</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between">
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder=" Coupon Code " aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Apply</button>
                        </form>
                        <button onClick={() => handleNavigate()} className="btn btn-success">Check Out</button>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">Cart Subtotal</td>
                                            <td>430 Tk.</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Shipping and Handling</td>
                                            <td>Free Shipping</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Order Total</td>
                                            <td>430 Tk.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;