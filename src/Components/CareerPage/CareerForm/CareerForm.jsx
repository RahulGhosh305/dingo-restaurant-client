import React from 'react';
import { useForm } from "react-hook-form";

const CareerForm = () => {
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            about: "",
            Cv: "",
        }
    });
    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/addCareerMessage", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            alert(json)
            resetField("fullName")
            resetField("email")
            resetField("phone")
            resetField("about")
            resetField("Cv")
        })
    }
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-2" type='text' placeholder="Full Name" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="text-danger">* Full Name field is required</span>}

                        <input className="form-control mb-2" type='email' placeholder="E-Mail" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">* E-Mail field is required</span>}

                        <input className="form-control mb-2" type='tel' placeholder="Phone Number" {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-danger">* Phone Number field is required</span>}

                        <textarea className="form-control mb-2" type='text' placeholder="Introduces Yourself" {...register("about", { required: true })} />
                        {errors.about && <span className="text-danger">* Introduces field is required</span>}

                        <input className="form-control mb-2" type='text' placeholder="Resume Drive Link " {...register("Cv", { required: true })} />
                        {errors.Cv && <span className="text-danger">* CV drive field is required</span>}
                        <br />
                        <input className="btn btn-success my-3" type="submit" value="Message" />
                    </form>
                </div>
                <div className="col-md-6">
                    <p>Your proposal can sent by this page.</p>
                    <h4>SEND YOUR DETAILS</h4>

                    <div className="d-flex m-3 justify-content-center">
                        <div className="text-center p-2 border shadow-sm m-2">
                            <h5>00</h5>
                            <h5>Days</h5>
                        </div>
                        <div className="text-center p-2 border shadow-sm m-2">
                            <h5>00</h5>
                            <h5>Hours</h5>
                        </div>
                        <div className="text-center p-2 border shadow-sm m-2">
                            <h5>00</h5>
                            <h5>Mins</h5>
                        </div>
                        <div className="text-center p-2 border shadow-sm m-2">
                            <h5>00</h5>
                            <h5>Secs</h5>
                        </div>
                    </div>

                    <p>Dear applicant you please let us to know if you are good enough suitable for join our restaurant please notify us if we have any vacancy.</p>
                </div>
            </div>
        </div>
    );
};

export default CareerForm;