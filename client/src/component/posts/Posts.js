import React,{useState,useEffect,useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Post from './Post';
import {getPost,getComment} from '../../actions/post';




const Posts = () => {
    const [maxRange, setMaxRange] = useState(3); 
    
  
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(getPost());
        
    }, [dispatch])

    // ------------- Conntion with Action --------------
    const post = useSelector((state) => state.post)

    const x = post.length

   console.log("post on homepage",x)
  

    // --------------Comment section
    useEffect(() => {
      dispatch(getComment(post.id))
    }, [post.id])

    
    
  
  




    // ===============================
 

    const loadMore = useCallback(() => {
      
        setMaxRange(prevRange => prevRange + 3);
      },[])
    
    return (
        <>
         <div className="mb-5 slider ">
           
            <div className="pt-5">
                <h1 className="text-center justify-content-between pt-5 text-light">Welcome to the Blogs</h1>
                <h5 className="text-center text-light"> "Don't focus on having a great blog. Focus on producing a blog that's great for your readers." - Brian Clark</h5>
            </div>
            
           </div>
           <div className="container  ">
          
           
            <div className="row my-4">
      
              {
                post.slice(0, maxRange).map((post) =>(
                    <Post post={post} id={post.id}/>
                  ))
              }
              

              {
                post.length > 3  ?<p className="text-center my-5" style={{cursor:"pointer"}} onClick={loadMore}>Load more</p> : ""
              }
               
              </div>
              </div>
              
        </>
    )
}

export default Posts

