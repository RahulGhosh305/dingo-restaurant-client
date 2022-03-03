import React from 'react';

const AdminListCard = (props) => {
    const {Id, img, name, email, birth} = props.data
    const index = props.i
    return (
        <tr>
            <th scope="row">#{index}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{birth}</td>
        </tr>
    );
};

export default AdminListCard;