import axios from 'axios';

export const getPosts = () => (dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res =>{
        dispatch({type:"GET-POSTS",payload:res.data})
    })
}

export const getDetails = (id) => dispatch =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
        dispatch({type:"GET-DETAILS",payload:res.data})
    })
}


export const postItem = (post) => dispatch =>{
      axios.post("https://jsonplaceholder.typicode.com/posts",post)
      .then(res =>{
          dispatch({type:"ADD-POST",payload:res.data})
      })
}

export const getDelete = (id) => dispatch =>{
     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(() =>{
         dispatch({type:"DELETE",payload:id})
         
        })
}