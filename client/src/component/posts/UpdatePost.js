import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updatePost } from '../../actions/post';
import FileBase from 'react-file-base64';

const UpdatePost = ({currentId, setCurrentId}) => {
    const dispatch = useDispatch();

    const[post, setPost] = useState({
        title:"",content:"",tags:"",status:"",image_path:""
    })

   
    const postData = useSelector((state) => currentId ? state.post.find((p) => p.id === currentId) : null);
    console.log("Update post",postData)

    useEffect(() => {
        if(postData)  setPost(postData);
    }, [postData])


    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updatePost(currentId,post))
         clear()
    }

    // ----------------- CLEAR DATA FROM FORM ON CLICK CLEAR BUTTON ------------
    const clear = (e) =>{
        
        setCurrentId(null)
        setPost({
            title:"",content:"",tags:"",status:"",image_path:""
        })
    }

    return (
        <div>
           
            <div className="create_section text-light bg-dark updated_Card  ">
            <div className="container mt-0">
            <h2 className="text-center   py-3 text-uppercase heading">Edit Blog </h2>
            <div className="row create_container">
               
                    <div className="col-12 ">
                     <div className="form_section ">
                        <form >
                            
                            
                            <div className="input_info">
                            <div className="form_input_section  my-3">
                                <input type="text" className="form_input" 
                                name="title"
                                value={post.title}
                                onChange = {(e) => setPost({...post,title:e.target.value})}
                                placeholder="Blog Title here"/>
                            </div>
                            <FileBase 
                            type="file"
                            multiple = {false}
                            onDone={({base64})=> setPost({...post, image_path: base64})}
                        />
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

                                    <select name="status" value={post.status} onChange={(e) =>setPost({...post,status:e.target.value}) }>

                                        <option >Select status</option>
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
                                placeholder="Write your Blogs"></textarea>
                            </div>
                            
                            <div className="form_button row">
                            <div className="col-md-8 col-12 col-xxl-8"><button type="submit" onClick={handleSubmit}>Update</button> </div>
                            <div className="col-md-4 col-12 col-xxl-4"><button type="Clear" onClick={clear}>Clear All</button> </div>
                                 
                            </div>
                           
                        </form>
                        </div>
                    </div>
               


            </div>
            </div>
            </div>
        </div>
    )
}

export default UpdatePost
