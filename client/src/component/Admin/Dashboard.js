import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDashboard } from '../../actions/index';
import { Link, Redirect } from 'react-router-dom';
import image from '../../images/home.png';
import SettingsIcon from '@material-ui/icons/Settings';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';

const Dashboard = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [data, dispatch]);

  const user = localStorage.getItem('adminToken');
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 col-xxl-6 dash_info my-5">
            <h1 className="my-5 text-light mt-5 text-center">Welcome to Admin Dashboard</h1>
            <div className="dash_content">
              <p className="text-center bg-light p-2 text-uppercase">Workspace</p>
            </div>
            <div className="row d-flex-column my-4">
              <div className="col-md-4 col-12 col-xxl-4 dash_box">
                <Link to="/createPost">
                  <div className="create_Post">
                    <p className="text-center">
                      <BorderColorIcon style={{ fontSize: '3rem', color: '#ff9800', borderRadius: '50%' }} />
                      <br /> Create New
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-12 col-xxl-4 dash_box">
                <Link to="/allPost">
                  <div className="edit_Post">
                    <p className="text-center">
                      <SettingsIcon style={{ fontSize: '3rem', color: '#4caf50', borderRadius: '50%' }} />
                      <br /> Edit & Delete
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-12 col-xxl-4 dash_box">
                <Link to="/">
                  <div className="view_Post">
                    <p className="text-center">
                      <SettingsCellIcon style={{ fontSize: '3rem', color: '#2196f3', borderRadius: '50%' }} />
                      <br /> View All Post
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-12 col-xxl-4 dash_box">
                <Link to="/commentEdit">
                  <div className="comment_Post">
                    <p className="text-center">
                      <SettingsCellIcon style={{ fontSize: '3rem', color: '#e91e63', borderRadius: '50%' }} />
                      <br /> Comment list
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-xxl-6">
            <div className="dash_img my-5">
              <img src={image} alt="_home" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
