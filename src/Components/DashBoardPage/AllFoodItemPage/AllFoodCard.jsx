import React from 'react';

const AllFoodCard = (props) => {
    const { id, img, name, amount, view, del, update } = props.data
    return (
        <tr>
            <td>#{id}</td>
            <td>
                <img style={{ minWidth: 75, height: 75, borderRadius: 15, }} src={img} className=" p-2 img-fluid rounded-start" alt="..." />
            </td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
                <button className="btn btn-success me-1 mb-1">
                    {view}
                </button>
                <button className="btn btn-dark me-1 mb-1">
                    {update}
                </button>
                <button className="btn btn-danger mb-1">
                    {del}
                </button>
            </td>
        </tr>
    );
};

export default AllFoodCard;