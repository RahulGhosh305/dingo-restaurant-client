import React from 'react';
import { useNavigate } from 'react-router-dom';


const AllFoodCard = (props) => {
    const navigate = useNavigate()
    // VIEW 
    const handleNavigate = (id) => {
        navigate(`/view/${id}`)
        // console.log(id);
    }
    // DELETE
    const deleteSingleMenu = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteSingleMenu/${id}`, {
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log("delete One")
            alert(data)
        })
    }
    const { _id, makingPic1, name, price} = props.data
    return (
        <tr>
            <td>#{_id}</td>
            <td>
                <img style={{ minWidth: 75, height: 75, borderRadius: 15, }} src={makingPic1} className=" p-2 img-fluid rounded-start" alt="..." />
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => handleNavigate(_id)}className="btn btn-sm btn-success me-1 mb-1">
                    View
                </button>
                <button className="btn btn-sm btn-dark me-1 mb-1">
                    Update
                </button>
                <button onClick={() => deleteSingleMenu(_id)} className="btn btn-sm btn-danger mb-1">
                    Del
                </button>
            </td>
        </tr>
    );
};

export default AllFoodCard;