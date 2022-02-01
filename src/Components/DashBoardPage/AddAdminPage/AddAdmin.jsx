import React from 'react';
import { useForm } from "react-hook-form";
const AddAdmin = () => {
    const { register,resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
          name: "",
          email : "",
          pass : "",
          birth : "",
        }
      });
    const onSubmit = data => {
        const addAdmin = data
        fetch('http://localhost:5000/admin', {
            method: 'POST',
            body: JSON.stringify(addAdmin),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data)
            resetField("name");
            resetField("email");
            resetField("pass");
            resetField("birth");
        })
    }


    return (
        <>
            <h3 className="text-center">Add New Admin</h3>
            <div className="row">
                <div className="offset-md-3 col-md-6 mt-3 px-2">
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
                        <input type="submit" className="btn btn-sm btn-outline-success me-2" value="Add Admin" />
                        <input type="reset" className="btn btn-sm btn-outline-success" value="Reset"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAdmin;