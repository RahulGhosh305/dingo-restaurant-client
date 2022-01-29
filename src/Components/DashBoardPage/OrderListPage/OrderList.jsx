import React from 'react';
import OrderListCard from './OrderListCard';
import dashFavPic5 from '../../../utility/dashFavPic5.jpg'

const OrderList = () => {
    const data = [
        {
            id: 1,
            img: dashFavPic5,
            loc: "Kandirpar",
            name: "Chicken",
            amount: "120",
            date: "2-01-2022",
            status: "New Order",
        },
        {
            id: 2,
            img: dashFavPic5,
            loc: "Rajgong",
            name: "Chicken",
            amount: "160",
            date: "2-01-2022",
            status: "Pending",
        },
        {
            id: 3,
            img: dashFavPic5,
            loc: "Racecouse",
            name: "Chicken",
            amount: "140",
            date: "2-01-2022",
            status: "New Order",
        },
        {
            id: 4,
            img: dashFavPic5,
            loc: "Kandirpar",
            name: "Chicken",
            amount: "150",
            date: "2-01-2022",
            status: "Delivered",
        },
        {
            id: 5,
            img: dashFavPic5,
            loc: "Jaowtola",
            name: "Chicken",
            amount: "180",
            date: "2-01-2022",
            status: "Pending",
        },
        {
            id: 6,
            img: dashFavPic5,
            loc: "Jaotola",
            name: "Chicken",
            amount: "220",
            date: "2-01-2022",
            status: "New Order",
        },
    ]
    return (
        <div>
            <div className="text-center">
                <h3>Order Lists</h3>
                <p>Customer All Orders list data.</p>
            </div>
            <div className="table-responsive">
                <table className="table table-hover bg-white text-center">
                    <thead>
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Img</th>
                            <th scope="col">Location</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {
                            data.map(data => <OrderListCard data={data} key={Math.random()} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;