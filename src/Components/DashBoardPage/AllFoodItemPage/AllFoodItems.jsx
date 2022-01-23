import React from 'react';
import dashFavPic1 from '../../../utility/dashFavPic1.jpg'
import dashFavPic2 from '../../../utility/dashFavPic2.jpg'
import dashFavPic3 from '../../../utility/dashFavPic3.jpg'
import dashFavPic4 from '../../../utility/dashFavPic4.jpg'
import dashFavPic5 from '../../../utility/dashFavPic5.jpg'
import AllFoodCard from './AllFoodCard';

const AllFoodItems = () => {
    const data = [
        {
            id: 1,
            img: dashFavPic1,
            name: "Chicken",
            amount: "120",
            view : "View",
            del : "Delete",
            update : "Update"
        },
        {
            id: 2,
            img: dashFavPic2,
            name: "Chicken",
            amount: "160",
            view : "View",
            del : "Delete",
            update : "Update"
        },
        {
            id: 3,
            img: dashFavPic3,
            name: "Chicken",
            amount: "140",
            view : "View",
            del : "Delete",
            update : "Update"
        },
        {
            id: 4,
            img: dashFavPic4,
            name: "Chicken",
            amount: "150",
            view : "View",
            del : "Delete",
            update : "Update"
        },
        {
            id: 5,
            img: dashFavPic5,
            name: "Chicken",
            amount: "180",
            view : "View",
            del : "Delete",
            update : "Update"
        },
    ]
    return (
        <div className="text-center">
            <h3>All Menus</h3>
            <p>Here is your menu list data</p>
            <div className="table-responsive">
                <table className="table table-hover bg-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {
                            data.map(data => <AllFoodCard data={data} key={Math.random()} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFoodItems;