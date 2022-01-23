import React from 'react';
import { useForm } from "react-hook-form";
const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=''>
            <h3 className="text-center">Add Admin</h3>
            <div className="row">
                <div className="offset-md-2 col-md-8 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="New Admin Name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">*Name field is required</span>}
                        <input className="form-control mb-2 border-0 border-bottom" type="email" placeholder="Enter New Admin E-Mail" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">*Email field is required</span>}
                        <input className="form-control border-0 border-bottom" type="date" placeholder="Birth Date" {...register("birth", { required: true })} />
                        {errors.birth && <span className="text-danger">*Birth Day field is required</span>}
                        <br />
                        <input className="btn btn-success" type="submit" defaultValue="Add New"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;