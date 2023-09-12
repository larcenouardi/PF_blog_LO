import React,{useEffect,useState,useCallback} from 'react'
import AdminCard from './AdminCard';
import { useDispatch, useSelector } from 'react-redux';
import {adminAllPost} from '../../actions/post';
import UpdatePost from '../posts/UpdatePost';

const AllPost = () => {
    const dispatch = useDispatch();
    const[currentId, setCurrentId] = useState(null);

    // --------- LOAD MORE FUNCTION ------------------
    const [maxRange, setMaxRange] = useState(4); 

    const loadMore = useCallback(() => {
        setMaxRange(prevRange => prevRange + 4);
    },[])

    // -------------- DISPATCH ID TO ACTION FOR PROPS ---------------------
    useEffect(() => {
        dispatch(adminAllPost())
    }, [currentId,dispatch])

    //---------------- GET DATA FROM STATE ---------------
    const post = useSelector((state) => state.post)
   
    return (
        <>
            <div className="container">
            <div className="row ">
                <div className="col-md-8 col-12  col-xxl-8 ">
                <div className="row">
                            {
                         post.slice(0, maxRange).map((post) => (
                                <AdminCard post={post} setCurrentId={setCurrentId} />
                            ))
                        }
                        <p className="text-center my-5" style={{cursor:"pointer"}} onClick={loadMore}>Load more</p> 
                        </div>
                </div> 
                <div className="col-md-4 col-12 col-xxl-4 updatedPost  ">
                    <UpdatePost currentId={currentId} setCurrentId={setCurrentId} />
                </div>

               
            </div>
          
               
                   
                
            </div>
        </>
    )
}

export default AllPost
