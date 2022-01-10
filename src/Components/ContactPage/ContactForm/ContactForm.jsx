import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="pb-3">Message Us</h4>
            <input className="form-control" placeholder="Name" {...register("Name", { required: true })} />
            {errors.Name && <span className="text-danger">* Name field is required</span>}
            <br />

            <input className="form-control" placeholder="Email Address" {...register("Email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
            {errors.Email && <span className="text-danger">* Email field is required</span>}
            <br />

            <input className="form-control" placeholder="Any Message" {...register("Message", { required: true })} />
            {errors.Message && <span className="text-danger">* Message field is required</span>}
            <br />

            <input className="form-control btn btn-warning" type="Submit" />
        </form>
    );
}