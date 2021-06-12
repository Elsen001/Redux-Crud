import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetails } from '../action/action'

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])

   

    return (
        <div className="details">
            <h1>Post details</h1>
            <h3>{details.title}</h3>
            <p>{details.body}</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Details
