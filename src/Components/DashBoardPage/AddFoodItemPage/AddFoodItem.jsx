import React from 'react';
import { useForm } from "react-hook-form";
const AddFoodItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="text-center">
            <h3>Add New Menu</h3>
            <p>Add a new delicious food menu.</p>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-2" type="text" placeholder="New Menu Name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">* Name field is required</span>}

                        <input className="form-control mb-2" type="text" placeholder="Title" {...register("title", { required: true })} />
                        {errors.title && <span className="text-danger">* Title field is required</span>}

                        <input className="form-control mb-2" type="text" placeholder="Description" {...register("desc", { required: true })} />
                        {errors.desc && <span className="text-danger">* Description field is required</span>}

                        <input className="form-control mb-2" type="number" placeholder="Price" {...register("price", { required: true })} />
                        {errors.price && <span className="text-danger">* Price field is required</span>}
                        <br />
                        <input type="submit" className="btn btn-success" value="Add Menu"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItem;