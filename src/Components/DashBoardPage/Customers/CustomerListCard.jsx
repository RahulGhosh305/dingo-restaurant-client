import React from 'react';

const CustomerListCard = (props) => {
    const {Id, img, name, loc, price} = props.data
    return (
        <tr>
            <th scope="row">#{Id}</th>
            <td>{img}</td>
            <td>{124}</td>
            <td>{name}</td>
            <td>{loc}</td>
            <td>{price}</td>
        </tr>
    );
};

export default CustomerListCard;