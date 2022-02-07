import React from "react";
import { useForm } from "react-hook-form";

const CommentForm = () => {

    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            profession: "",
            message: "",
        }
    });
    const onSubmit = data => {
        // console.log(data)
        fetch("http://localhost:5000/addRestaurantReview", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                alert(data)
                resetField("name");
                resetField("email");
                resetField("profession");
                resetField("message");
            })
    }

    return (
        <div style={{ marginTop: 50 }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="mb-3 text-center">Leave a comment about our restaurant</h4>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="form-control mb-2" type="name" {...register("name", { required: true })} placeholder="Name" />
                                {errors.name && <span className="text-danger">* Name field is required</span>}

                                <input className="form-control mb-2" type="email" {...register("email", { required: true })} placeholder="E-Mail" />
                                {errors.email && <span span className="text-danger">* email field is required</span>}

                                <input className="form-control mb-2" type="text" {...register("profession", { required: true })} placeholder="Profession" />
                                {errors.profession && <span span className="text-danger">* profession field is required</span>}

                                <textarea className="form-control mb-2" type="text" {...register("message", { required: true })} placeholder="Message" />
                                {errors.message && <span className="text-danger">* Message field is required</span>}

                                <input value={new Date().toDateString()} className="form-control mb-2" {...register("date", { required: true })} />
                                {errors.date && <span className="text-danger">* Date field is required</span>}

                                <input className="mt-3 mb-5 btn-warning form-control" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CommentForm;