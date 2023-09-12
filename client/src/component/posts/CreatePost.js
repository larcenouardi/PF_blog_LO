import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';
import FileBase from 'react-file-base64';


const CreatePost = () => {
    const dispatch = useDispatch()
    
    const[post,setPost] = useState({
        title:"",content:"",tags:"",status:"",image_path:""
    });


    

    const savePost = (e) =>{
         e.preventDefault();
         dispatch(createPost(post));
         setPost({title:"",content:"",tags:"",status:"",image_path:""})
    }
    return (
        <>
            <div className="create_section">
            <div className="container">
            
                <div className="row create_container">
               
               
               
                <div className="col-md-7 col-12 col-xxl-7 my-4 mx-auto">
                <h2 className="text-center py-3 text-uppercase heading">Write Your Blog </h2>
                    <div className="col-12  mt-3">
                     <div className="form_section ">
                        <form method="POST" >
                            
                            
                            <div className="input_info">
                            <div className="form_input_section  my-3">
                                <input type="text" className="form_input" 
                                name="title"
                                value={post.title}
                                onChange = {(e) => setPost({...post,title:e.target.value})}
                                placeholder="Blog Title here *" required/>
                            </div>
                            <div className="">
                        <FileBase 
                            type="file"
                            multiple = {false}
                            onDone={({base64})=> setPost({...post, image_path: base64})}
                        />
                        </div>
                            <div className="col-md-12 col-12 d-flex justify-content-between tag_status">
                                <div className="col-md-6 col-12 col-xxl-6 "> 
                                    <div className="form_input_section ">
                                        <input type="text" className="form_input"  
                                        name="tags"
                                        value={post.tags}
                                        onChange = {(e) => setPost({...post,tags:e.target.value})}
                                        placeholder="Tags"/>
                                    </div>
                                </div>
                                <div className="col-md-5 col-12 col-xxl-5"> 

                                    <select name="status" value={post.status} onChange={(e) =>setPost({...post,status:e.target.value}) } >

                                        <option >Select status *</option>
                                        <option value="published" >Published</option>
                                        <option value="draft" >Draft</option>
                                        <option value="archived" >Archived</option>
                                    </select>
                                   

                                      
                                </div>
                            </div>

                            </div>
                            <div className=" my-3">
                                <textarea  className="text_box " rows="6"
                                name="content"
                                value={post.content}
                                onChange={(e) => setPost({...post,content:e.target.value})}
                                placeholder="Write your Blogs *"></textarea>
                            </div>
                            
                            <div className="form_button">
                                 <button type="submit" onClick={savePost}>SUBMIT</button>
                            </div>
                           
                        </form>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-5 col-12 col-xxl-5">
                    <div className="img_box">
                        <img src={img} alt="Avatar"/>
                    </div>
                </div> */}
            </div>
            </div>
            </div>
        </>
    )
}

export default CreatePost
