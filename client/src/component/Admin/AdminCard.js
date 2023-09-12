import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {  makeStyles } from '@material-ui/core';
import {deletePost}  from '../../actions/post';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getOnePost } from '../../actions/post';

// ---------------------- CSS STYLE FOR DELETE AND UPDATE BUTTON ----------------------

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

const AdminCard = ({post,setCurrentId}) => {
    const dispatch = useDispatch();


    const classes = useStyle();
   
    const shorten = post.content ? post.content.substring(0, 100)+'... ' : '';
    return (
       
        
                <div className="col-md-6 col-12 col-xxl-6 mx-auto mb-2 ">
                    
                    <div className="card adminCard" >
                        <div className="card-body">

                        <div className="card_img">
                             <img src={post.image} className="card-img-top img-fluid" />
                        </div>
                        <Link to ={`/blogPost/${post.id}`}>
                            <h4 className="card-title text-capitalize text-center bg-light py-3 mb-3">{post.title} </h4>
                        </Link>
                            <h6 className="card-subtitle mb-2 text-muted text-capitalize">Status : {post.status}</h6>
                            <p className="mb-3"><strong>Tags : </strong>{post.tags}</p>
                            <div className="content mb-3">
                                <p className="text-muted">{shorten}<span><Link to={`/blogPost/${post.id}`}  onClick = {() => dispatch(getOnePost(post.id))}>Read more</Link></span> </p>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-md-5">
                                    <EditIcon onClick={() => setCurrentId(post.id)} className={classes.icon} color="primary"/> 
                                    <DeleteIcon onClick={() =>(window.confirm('Delete the item?'))?dispatch(deletePost(post.id)):null} className={classes.icon} color="secondary" />
                                </div>
                                <div className="col-md-7 bg-warning ">
                                    <p className="py-2 text-center"> {new Date(post.create_time).toDateString()}</p>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        
                </div>
              
    )
}

export default AdminCard;
