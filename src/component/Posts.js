import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDelete, getPosts } from '../action/action'
import Pagination from './Pagination'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)
    const lastItem = currentPage * postPerPage;
    const firstItem = lastItem - postPerPage
    const currentPosts = posts.slice(firstItem, lastItem)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const deleted = (id) => {
        dispatch(getDelete(id))

    }

    useEffect(() => {
        dispatch(getPosts())
        deleted()
    }, [])


    return (
        <div className="container mt-5">
            <div className="row ">
         
                <ul className="list-group">
                    {currentPosts.map(post => {
                        return (
                            <>
                                <li className="list-group-item">{post.title}
                                    <i onClick={() => deleted(post.id)} class="fas fa-trash"></i>
                                    
                                    <Link to={`/posts/${post.id}`}><i class="fas fa-info"></i></Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            <Pagination currentPage={currentPage} postPerPage={postPerPage} paginate={paginate} posts={posts.length} />
        </div>
    )
}

export default Posts
