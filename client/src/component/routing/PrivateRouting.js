import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

// ---------------------- PRIVATE ROUTING FOR AUTHENTICATION -----------------------------

const user = localStorage.getItem('adminToken');

const PrivateRouting = ({component:Component,auth:{isAuthenticated,loading},...rest}) => {

    
    return(

   <Route {...rest} render = {props => !isAuthenticated && !loading && !user ? (<Redirect to='/'/> ):(<Component {...props} />) }></Route>

    )}
PrivateRouting.prototype = {
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRouting);
