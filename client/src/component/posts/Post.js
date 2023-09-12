import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {  useDispatch,useSelector } from 'react-redux';
import { getOnePost,comments} from '../../actions/post';


const Post = ({post,id}) => {
    //const [id, setId] = useState();
    const dispatch = useDispatch();

    const comment = useSelector((state) => state.comment)
    
 var output = 0;
  comment.forEach(element => {
    if(element.post_id === id){
      output++;
    }
  });
    

  
  useEffect(() => {
    dispatch(comments())
  }, [dispatch])
    // SHORT(MAX CHAR - 100) CONTENT FOR CARD 
    const shorten = post.content ? post.content.substring(0, 100)+'... ' : '';
    
    return (
   
        <div className="col-md-4 col-12 col-xxl-4 mb-4 ">
        <div class="card " >
              
               <div className="card-body">
                <div className="card_img">
                <img src={post.image} className="card-img-top img-fluid" alt="_card_img" />
                </div>
               
                  <h4 className="card-title bg-light p-3  text-center text-capitalize mt-3">{post.title}</h4>
                  <h5 className="card-text tags mt-4" ><strong>Tags : </strong> {post.tags} </h5>
                  <p></p>
                  <p><strong>Comments : </strong>{output}</p>
                  <div>
                  
                      <p className="text-muted mt-3">{shorten}<span><Link to={`/blogPost/${post.id}`}  blog={post} onClick = {() => dispatch(getOnePost(post.id))}>Read more</Link></span> </p>
                  </div>
                
              </div>
             
          </div>
        </div>
            
      
    
    )
}

export default Post
