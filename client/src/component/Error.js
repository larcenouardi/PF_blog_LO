import React from 'react';
import { NavLink } from 'react-router-dom';

//  -------------------- ERROR PAGE COMPONENT [FOR INVALID URL] -----------------------------------

const Error = () => {
    return (
        <>
            <div className="container " id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2 data-aos="fade-right">We are sorry, Page not found!</h2>
                    <p className="mb-5 text-center"  data-aos="fade-left">
                        The page you are looking for might have been removed or its name changed or is temporarily unavailable.
                    </p>
                    <div className="button_block d-flex align-items-center justify-content-center">
                        <NavLink to="/" className="button text-light p-3">Back To Homepage </NavLink>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default Error
