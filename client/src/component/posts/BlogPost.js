import React ,{useEffect}from 'react'
import img from '../../images/banner.jpg';
import {useSelector,useDispatch} from 'react-redux';
import CommentSection from './CommentSection';
import { useParams} from 'react-router-dom';
import {getOnePost} from '../../actions/post';


 

const BlogPost = () => {
    
    const {id} = useParams();
    
    
    //  GET ALL POST DATA
    const post = useSelector((state) => state.post)
    const dispatch = useDispatch();
    
    // DISPATCH ID TO ACTION FOR SINGLE POST DETAILS
    useEffect(() => {
        dispatch(getOnePost(id))
    }, [id])
 

    return (
        <div className="blogPost_container">
        <div className="col-md-10 col-12 col-xxl-10 mx-auto">
           
        
               {
                   post.map((data) => (
                      
                         <> 
                         
                         <div className = "main_section container ">
                         <div className="blogImage">
                             <img src={data.image} alt="_blog_image" />
                        </div>
                         <div className="col-md-9 col-12 col-xxl-9 mx-auto">
                            <h1 className="text-center BlogHeading py-5 mx-2 ">{data.title}</h1>
                            <div className="d-flex justify-content-between mx-2">
                            <p><strong> Date : </strong> {new Date(data.create_time).toDateString()}</p>
                            <p className="tags "><strong>Tags : </strong>{data.tags}</p>
                            </div>
                            <p className="text-capitalize  mx-2"><strong>Status :</strong> {data.status}</p>
                            <div className="my-5 mx-2">
                                <p>{data.content}</p>
                            </div>
                            <hr/>
                            </div>
                            <div className="comment_section ">
                                <CommentSection cid={data.id}/>
                            </div>
                            
                            </div>
                         </>
                     
                    
                   ))
               }
     
               </div>
             
        </div>
       
    )
}

export default BlogPost
