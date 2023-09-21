import React, { Fragment, useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/index';
import logo from '../../images/logo1.png';
import { useDispatch } from 'react-redux';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile')) ||
      JSON.parse(localStorage.getItem('adminToken'))
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  // ---------- SET ACTION FOR LOGOUT -----------------
  const Userlogout = () => {
    dispatch({ type: 'LOGOUT' });

    setUser(null);
    alert('Successfully logged out');
  };

  useEffect(() => {
    const token = user?.token;

    setUser(
      JSON.parse(localStorage.getItem('profile')) ||
        JSON.parse(localStorage.getItem('adminToken'))
    );
  }, [location]);

  // ---------------- AFTER LOGIN NAVBAR-------------------------
  const authLink = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" onClick={Userlogout} to="/">
          Logout <i className="fas fa-power-off"></i>
        </NavLink>
      </li>
    </>
  );

  //  ---------------------- BEFORE LOGIN NAVBAR-------------------------
  const guestLink = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login <i className="fas fa-key"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Register <i className="fas fa-briefcase"></i>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-container">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" width="130" height="50" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {!loading && (
                <Fragment>{user || isAuthenticated ? authLink : guestLink}</Fragment>
              )}

              <li className="nav-item">
                {!user ? (
                  ''
                ) : (
                  <p className="nav-link text-dark username">
                    {user.result.username} <i className="fas fa-user"></i>
                  </p>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3></h3>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
