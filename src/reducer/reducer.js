const firstState = {
      posts:[],
      details:{},
}

export const reducer = (state=firstState,action)=>{
    switch(action.type){
       case "GET-POSTS":
           return {
               ...state,
               posts:action.payload
           } 
        case "GET-DETAILS":
            return {
                ...state,
                details:action.payload
            }   
        case "DELETE":
            return{
                ...state,
                posts:state.posts.filter(post=>{
                    return post.id !== action.payload
                }),
            }  
        case "ADD-POST":
            return{
                ...state,
                posts:[action.payload,...state.posts]
            }    
          


         default: return state  
    }
}