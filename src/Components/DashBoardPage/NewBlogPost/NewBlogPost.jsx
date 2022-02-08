import React, { useState } from 'react';
import axios from 'axios';
import { useForm, useFieldArray } from "react-hook-form";

const NewBlogPost = () => {
    // ALL STATES
    const [blogImage, setBlogImage] = useState("");
    const [chefImage, setChefImage] = useState("");
    // console.log(blogImage, chefImage)
    // USE FORM 
    const { register, resetField, handleSubmit, control, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            img: "",
            chefImg: "",
            category: "",
            title: "",
            // date: "",
            rating: "",
            PrepTime: "",
            CookTime: "",
            TotalTime: "",
            Servings: "",
            shortDesc: "",
            longDesc: "",
            author: "",
            designation: "",
            Ingredients: [{ ingredients: "" }],
            Directions: [{ directions: "" }],
        }
    });


    // MULTIPLE DYNAMIC INPUT FIELD useFieldArray
    const {
        fields: Ingredients,
        append: IngredientsAppend,
        remove: IngredientsRemove
    } = useFieldArray({ control, name: "Ingredients" });
    const {
        fields: Directions,
        append: DirectionsAppend,
        remove: DirectionsRemove
    } = useFieldArray({ control, name: "Directions" });
    // SUBMIT FORM 
    const onSubmit = data => {
        // console.log(data)
        let ingredient = data.Ingredients.map(ele => ele.ingredients)
        // console.log(ingredient)
        let directions = data.Directions.map(ele=> ele.directions)
        // console.log(directions)
        
        const sendBlogData = {
            ...data,
            Ingredients: ingredient,
            Directions: directions,
            img: blogImage,
            chefImg: chefImage,
        }
        // console.log(sendBlogData)

        fetch("http://localhost:5000/addBlog", {
            method: 'POST',
            body: JSON.stringify(sendBlogData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                alert(data)
                resetField("category")
                resetField("title")
                resetField("rating")
                resetField("PrepTime")
                resetField("CookTime")
                resetField("TotalTime")
                resetField("Servings")
                resetField("shortDesc")
                resetField("longDesc")
                resetField("author")
                resetField("designation")
                resetField("Ingredients")
                resetField("Directions")
            })

    }


    // HANDLE IMAGE UPLOAD TO IMAGE BB HOSTING
    const handleImgUpload = (e, setImgState) => {
        // console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'e65ce4e078a8e7e2d464434d0214032e')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImgState(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="text-center">
                <h2>New Blog Post</h2>
                <p>Post your new blog</p>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="px-3">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="New Blog Title" {...register("title", { required: true })} />
                            {errors.title && <span className="text-danger">* Title field is required</span>}

                            <textarea className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Short Description" {...register("shortDesc", { required: true })} />
                            {errors.shortDesc && <span className="text-danger">* Description field is required</span>}

                            <textarea className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Long Description" {...register("longDesc", { required: true })} />
                            {errors.longDesc && <span className="text-danger">* Description field is required</span>}

                            <div className="row">
                                <div className="col-sm-6">
                                    <select className="form-select border-0 border-bottom" aria-label="Default select example" {...register("category", { required: true })}>
                                        <option Value="homePage">Add To Home Page</option>
                                        <option Value="blogPage">Add To Blog Page</option>
                                    </select>
                                    {errors.category && <span className="text-danger">* Category field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <select className="form-select border-0 border-bottom" aria-label="Default select example" {...register("rating", { required: true })}>
                                        <option>2</option>
                                        <option>2.5</option>
                                        <option>3</option>
                                        <option>3.5</option>
                                        <option>4</option>
                                        <option>4.5</option>
                                        <option>5</option>
                                    </select>
                                    {errors.rating && <span className="text-danger">* Rating field is required</span>}
                                </div>
                            </div>

                            <label className="d-flex justify-content-start mt-2" htmlFor="">Food Ingredients</label>
                            <ul className="list-unstyled">
                                {Ingredients.map((item, index) => {
                                    return (
                                        <li key={Math.random()} className='d-flex'>
                                            <textarea className="form-control mb-2 border-0 border-bottom me-1" {...register(`Ingredients.${index}.ingredients`)} />
                                            <button type="button" className="btn btn-sm mb-2 btn-dark" onClick={() => IngredientsRemove(index)}> Del </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <section>
                                <button
                                    className="btn btn-sm btn-dark d-flex justify-content-start"
                                    type="button"
                                    onClick={() => {
                                        IngredientsAppend({ instructions: "" });
                                    }}
                                > Add ingredients
                                </button>
                            </section>

                            <label className="d-flex justify-content-start mt-3" htmlFor="">Directions</label>
                            <ul className="list-unstyled">
                                {Directions.map((item, index) => {
                                    return (
                                        <li key={Math.random()} className='d-flex'>
                                            <textarea className="form-control mb-2 border-0 border-bottom me-1" {...register(`Directions.${index}.directions`)} />
                                            <button type="button" className="btn btn-sm mb-2 btn-dark" onClick={() => DirectionsRemove(index)}> Del </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <section className="mb-4">
                                <button
                                    className="btn btn-sm btn-dark d-flex justify-content-start"
                                    type="button"
                                    onClick={() => {
                                        DirectionsAppend({ Directions: "" });
                                    }}
                                > Add directions
                                </button>
                            </section>

                            <div className="row">
                                <div className="col-sm-6">
                                    <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Cook Time : etc 30 Minutes" {...register("CookTime", { required: true })} />
                                    {errors.CookTime && <span className="text-danger">* Cook Time field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Prep Time : etc 30 Minutes" {...register("PrepTime", { required: true })} />
                                    {errors.PrepTime && <span className="text-danger">* Prep Time field is required</span>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Total Time : etc 30 Minutes" {...register("TotalTime", { required: true })} />
                                    {errors.TotalTime && <span className="text-danger">* Total Time field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control mb-2 border-0 border-bottom" type="number" placeholder="Serving" {...register("Servings", { required: true })} />
                                    {errors.Servings && <span className="text-danger">* Servings field is required</span>}
                                </div>
                            </div>

                            <label className="d-flex justify-content-start" htmlFor="">Blog Photo</label>
                            <input onChange={(e) => handleImgUpload(e, setBlogImage)} className="form-control mb-2 border-0 border-bottom" type="file" name="One" required />

                            <label className="d-flex justify-content-start" htmlFor="">Author/Chef Photo</label>
                            <input onChange={(e) => handleImgUpload(e, setChefImage)} className="form-control mb-3 border-0 border-bottom" type="file" name="Two" required />

                            <div className="row">
                                <div className="col-sm-6">
                                    <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Author Name" {...register("author", { required: true })} />
                                    {errors.author && <span className="text-danger">* Author Name field is required</span>}
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control mb-2 border-0 border-bottom" type="text" placeholder="Author Designation" {...register("designation", { required: true })} />
                                    {errors.designation && <span className="text-danger">* Designation field is required</span>}
                                </div>
                            </div>

                            <input defaultValue={new Date().toDateString()} className="form-control mb-2 border-0 border-bottom" />

                            <br />
                            <input type="submit" className="btn btn-success" value="Add Menu" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBlogPost;