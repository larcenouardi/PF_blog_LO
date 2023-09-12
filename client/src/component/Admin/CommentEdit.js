import React, { useState ,useEffect} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import {allComment, deleteComment} from '../../actions/post';
import { useSelector ,useDispatch} from 'react-redux';
import { editComment } from '../../actions/post';
import DeleteIcon from '@material-ui/icons/Delete';  
import {  makeStyles } from '@material-ui/core';


// --------------------- CSS STYLE FOR EDIT AND UPDATE BUTTON --------------------
const useStyle = makeStyles({
  icons:{
      float:"left"
  },
  icon:{
      margin:5,
      border:"1px solid #787878",
      fontSize:35,
      padding:5,
      borderRadius:10,
      cursor:"pointer"
  },
  link:{
      color:"red",
      
  }
})

const CommentEdit = () => {
  const classes = useStyle();
    const [currentId, setCurrentId] = useState();
    const [commentData, setCommentData] = useState({
      status:""
    });

    // --------------- GET ALL COMMENTS ----------------------
    const comment = useSelector((state) => state.comment)
    
    // -------------------FILTER COMMETS ----------
    const data = useSelector((state) => currentId ? state.comment.find((p) => p.id === currentId) : null);

    useEffect(() => {
      if(data)  setCommentData(data);
    }, [data])
    
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allComment())
    }, [dispatch])
    
    
  const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(editComment(currentId,commentData))
      
  }

    
    return (
        <>
 <div className=" py-3 text-center"><h4>List of new comments to be approved</h4></div>
          <div className="container">
                    
          {comment.map((value) => (
              <>
            
              <div className="col-md-7 col-12 col-xxl-7 mx-auto mb-3 ">
               <div className="row mx-auto py-2 comment_box">
                    <div className="col-md-2 col-xxl-2  text-center comment_icon"><PersonIcon/>
                    <h5>NA</h5>
                    </div>
                   
                    <div className="col-md-10 col-xx-10">
                    <div className="row " >
                      <div className="col-md-9 col-xxl-9"><h5 className="text-capitalize">{value.author}</h5></div>
                      <div className="col-md-3 col-xxl-3 text-end"><p>{new Date(value.create_time).toDateString()}</p> </div>
                    </div>
                      <p className="mb-4"> {value.content}</p>
                      <p className="p-2  not_approved text-center text-capitalize text-light" onClick={() => setCurrentId(value.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">{value.status}</p>
                      <DeleteIcon onClick={() =>(window.confirm('Delete the item?'))?dispatch(deleteComment(value.id)):null} className={classes.icon} color="secondary" />
                    </div>
                    
               </div>
               </div>
                   
 
        </>
          ))}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-capitalize " id="exampleModalLabel">{commentData.author}</h5>
                    <p className=" bg-warning p-2 ms-5 text-center text-capitalize" style={{width:"30%",float:"right"}}>Post id : {commentData.post_id}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                   <p className="mb-2"> {commentData.content}</p>
                   <select name="status" value={commentData.status} onChange={(e) =>setCommentData({...commentData,status:e.target.value}) }>

                        <option >{commentData.status}</option>
                        <option value="approved" >Approved</option>
                        
                    </select>
                  </div>
                  <div class="modal-footer">
                    
                    <button type="button" onClick={handleSubmit} >Save changes</button>
                  </div>
                </div>
              </div>
            </div>

          </div>


            
        </>
    )
}

export default CommentEdit
