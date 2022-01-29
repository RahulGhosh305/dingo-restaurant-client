import React from 'react';

const OrderListCard = (props) => {
    const { id, img, loc, name, amount, date, status } = props.data
    return (
        <tr>
            <td>#{id}</td>
            <td>
                <img style={{ minWidth: 75, height: 75, borderRadius: 15, }} src={img} className=" p-2 img-fluid rounded-start" alt="..." />
            </td>
            <td>{loc}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>
                <button className="btn btn-sm btn-dark">
                    {status}
                </button>
            </td>
        </tr>
    );
};

export default OrderListCard;