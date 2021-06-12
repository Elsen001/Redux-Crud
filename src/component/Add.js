import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { postItem } from '../action/action'

const Add = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(postItem(post))
        history.push(`/`)
    }




    return (
        <form onSubmit={onSubmit} action="">
            <div className="form">

                <label htmlFor="text">Title</label>
                <input onChange={handleChange} value={post.title} type="text" name="title" id="" />

                <label htmlFor="body">Body</label>
                <input onChange={handleChange} value={post.body} type="text" name="body" id="" />

                <button className="btn btn-outline-primary mt-2">Save</button>
                <Link to="/">

                    <button className="btn btn-outline-danger mt-2">cancel</button>
                </Link>

            </div>
        </form>
    )
}

export default Add
