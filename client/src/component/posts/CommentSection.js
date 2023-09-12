import React,{useState,useEffect,useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {commentPost} from '../../actions/post';
import PersonIcon from '@material-ui/icons/Person';
import {getComment} from '../../actions/post';
import { useParams ,useHistory} from 'react-router-dom';



const CommentSection = ({cid}) => {

    const history = useHistory();
    // GET TOKEN FOR USER_ID
    const user = JSON.parse(localStorage.getItem('profile'))
    
    // GET POST_ID FROM URL
    const{id} = useParams();

  
    // ------------ Load more function ------------
    const [maxRange, setMaxRange] = useState(3); 

    const loadMore = useCallback(() => {
      setMaxRange(prevRange => prevRange + 2);
    },[])

    // -----------------------------------------
   

    // GET UPDATED USER_ID FROM TOKEN
    let userId = "";
    if(user !== null){
      userId += (Object.values(user).map((v) =>v.id))[0]
    }
    
  //  SET VALUE  FROM COMMENT FIELD
    const [comment, setComment] = useState({
       content:"",status:"not approved",author:"",url:"",userId: userId,postId:""
    });

    // SET UPDATED POST_ID VALUE ON COMMENT STATE USING USEEFFECT
    useEffect(() => {
      setComment({...comment,postId:cid})
    }, [cid])


    const dispatch = useDispatch();
    const post = useSelector((state) => state.comment)
    
    

    
    
    
    
    
   
  //  ON SUBMIT SEND DATA TO COMMENTPOST ACTION
    const handleClick = (e) =>{
      e.preventDefault()
        dispatch(commentPost(comment));    
    }
    
    const handleLogin = (e) => {
        e.preventDefault()
        history.push('/login')
    }

    // GET SPECIFIC COMMENTS ON BLOGPOST ACCORDING TO POST_ID
    useEffect(() => {
      dispatch(getComment(id))
    }, [id])
    
    return (
        <> 
        
         <div className="  ">
           <h4 className="text-center p-4">Comments</h4>
           <div class=" input-group mx-auto mb-3">
                <div className="col-md-6 col-11 col-xxl-6 mx-auto">
                 


                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          
                          <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input type="text"  
                                name="author" 
                                value={comment.author} 
                                onChange={(e) => setComment({...comment,author:e.target.value})}
                                placeholder="Author name *"
                              />
                        <input type="text" name="url" 
                                value={comment.url}
                                onChange={(e) => setComment({...comment,url:e.target.value})}
                                placeholder="URL" 
                              />
                     
                        <textarea type="text" class="form-control" rows="4" 
                                      placeholder="Comment here *"
                                      name="content"
                                      value={comment.content}  
                                      onChange={(e) => setComment({...comment,content:e.target.value})}
                                    />
                        </div>
                        
                        <div class="modal-footer">
                          <button class=" comment_button"  data-bs-toggle="modal" onClick={handleClick}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                {user ?  <a className="btn  comment_button mb-3" data-bs-toggle="modal" href="#exampleModalToggle"  
                 role="button">Comment here</a> : <button className="btn  comment_button mb-3 " onClick={handleLogin}>Add Comment</button> }

              </div>
                
                
            </div>
            {/* USE SLICE METHOD FOR LOAD MORE FUNCTION */}
           {post.slice(0, maxRange).map((c,i) => (
               <div className="col-md-7 col-12 col-xxl-7 mx-auto" key={i}>
               <div className="row mx-auto py-2 ">
                    <div className="col-md-2 col-xxl-2  text-center comment_icon"><PersonIcon/></div>
                   
                    <div className="col-md-10 col-xx-10">
                    <div className="row mb-3">
                      <div className="col-md-8 col-12 col-xxl-8"><h5 className="text-capitalize text-success">{c.author}</h5></div>
                      <div className="col-md-4 col-12 col-xxl-4 text-muted "><p>{new Date(c.create_time).toLocaleString()}</p> </div>
                    </div>
                      <p className="mb-4"> {c.content}</p>
                     
                    </div>
                   
               </div>
               <hr/>
               </div>
               
           ))}
            {/* BUTTON FOR LORE MORE COMMENTS */}

            {post.length >3 && !Math.max(post) ?  <p className="text-center py-3 " style={{cursor:"pointer"}} onClick={loadMore}>Show more Comment</p> : ""}
             
           
           
           </div>
        </>
    )
           
}

export default CommentSection
