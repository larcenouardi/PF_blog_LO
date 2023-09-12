import React,{  useEffect} from 'react'


const Footer = () => {
   

    
    return (
        <>
            <footer className="bg-dark ">
                <div className="container">
                    <div className="row">
                        <div className="co-12 col-lg-10 d-flex align-item-center justify-content-lg-center  mx-auto">
                            <div className="row ">
                        
                                <div className="icons mx-auto d-flex align-item-center justify-content-center ">
                                   
                                 <ul>
                                     <li>
                                        <a href="#">
                                            <i className="fab fa-instagram fontawesome_icon"></i>
                                        </a>
                                     </li>
                                     <li>
                                         <a href="#">
                                            <i class="fab fa-linkedin "></i>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="#">
                                            <i className="fab fa-facebook "></i>
                                        </a>
                                     </li>
                                 </ul>
                                </div>
                                 <div className="line "></div>
                                 <p className="text-center ">Copyright © 2021 : All right reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
              
            </footer>
            
        </>
    )
}

export default Footer
