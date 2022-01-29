import React from 'react';
import { useForm } from "react-hook-form";
const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <h3 className="text-center">Add Admin</h3>
            <div className="row">
                <div className="offset-md-2 col-md-8 mt-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Admin Name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">*Name field is required</span>}
                        <input className="form-control mb-2 border-0 border-bottom" type="email" placeholder=" E-Mail" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">*Email field is required</span>}
                        <input className="form-control mb-2 border-0 border-bottom" type="password" placeholder="Password" {...register("pass", { required: true })} />
                        {errors.pass && <span className="text-danger">*Password field is required</span>}
                        <input className="form-control border-0 border-bottom" type="date" placeholder="Birth Date" {...register("birth", { required: true })} />
                        {errors.birth && <span className="text-danger">*Birth Day field is required</span>}
                        <br />
                        <input type="submit" className="btn btn-success" value="Add Admin"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAdmin;