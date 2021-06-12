import React from 'react'

const Pagination = ({postPerPage,paginate,posts,currentPage}) => {


    const arr=[];
    for(let i=1;i<=Math.ceil(posts/postPerPage);i++){
        arr.push(i)
    }

    return (
        <>
        <ul className="pagination mt-2">
            {arr.map(number=>(
                <li key={number} className={number===currentPage? "page-item active":"page-item"}>
                    <a onClick={()=>paginate(number)} className="page-link" href="#!">{number}</a>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Pagination
