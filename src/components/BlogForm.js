import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import {ToastContainer , toast } from "react-toastify";
const BlogForm = () => {

    const [data, setData] = useState(
        {
            title: '',
            author: '',
            body: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev, [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.title.length === 0){
      toast.error("Title is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000 
      })
    } else if (data.author.length === 0){
      toast.error("Author is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      })
    } else if (data.body.length === 0){
      toast.error("Body is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      })
    }else (

        axios.post('http://localhost:4002/blogs', data)
            .then(res => {
                toast.success('New blog added successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoclose: 3000,
                })
            })
        //.catch(err => console.log(err))
            .catch(err => {
            toast.error('Something went wrong while adding the blog', {
                position: toast.POSITION.TOP_RIGHT,
                autoclose: 3000,
            })
            })  
    )    };


    return (
        <form onSubmit={handleSubmit}>
            <h1 className="">Your blog</h1>
            <div className="BlogForm mb-3 p-2">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" placeholder="Enter Title" className="form-control" name="title" value={data.title} onChange={handleChange} />
            </div>
            <div className="mb-3 p-2">
                <label htmlFor="author" className="form-label">Author</label>
                <input type="text" className="form-control" name="author" placeholder="Enter Author" value={data.author} onChange={handleChange} />
            </div>
            <div className="mb-3 p-2">
                <label htmlFor="body" className="form-label">Body</label>
                <textarea className="form-control" placeholder="Enter Body" name="body" value={data.body} onChange={handleChange}></textarea>
                </div>
            <button type="submit" className="btn btn-primary">Save Blog</button>
            <ToastContainer/>
        </form>
    )
    
}

export default BlogForm;