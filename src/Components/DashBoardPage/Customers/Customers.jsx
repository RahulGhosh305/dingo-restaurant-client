import React from 'react';
import CustomerListCard from './CustomerListCard';

const Customers = () => {
    const data = [
        {
            Id: 1,
            img : "img",
            cusID: "125",
            name : "name",
            loc : "Loc",
            price : "2",
        },
        {
            Id: 2,
            img : "img",
            cusID: "125",
            name : "name",
            loc : "Loc",
            price : "3",
        },
        {
            Id: 3,
            img : "img",
            cusID: "125",
            name : "name",
            loc : "Loc",
            price : "4",
        },
        {
            Id: 4,
            img : "img",
            cusID: "125",
            name : "name",
            loc : "Loc",
            price : "2",
        },
        {
            Id: 5,
            img : "img",
            cusID: "125",
            name : "name",
            loc : "Loc",
            price : "3",
        },
        {
            Id: 6,
            img : "img",
            cusID: "125",
            name : "name",
            loc : "Loc",
            price : "4",
        },
    ]
    return (
        <div>
            <div className="text-center">
                <h3>General Customers</h3>
                <p>Here is your general customers list data</p>
            </div>
            <div className="table-responsive">
            <table className="table bg-white text-center">
                <thead className="bg-dark text-white">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Img</th>
                        <th scope="col">CustomerID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(data => <CustomerListCard  data={data} key={Math.random()}/>)    
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Customers;