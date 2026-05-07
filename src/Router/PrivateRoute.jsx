import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //console.log(location);
  if (loading) {
    return <div className='flex justify-center items-center text-center'>
      <span className="loading loading-bars loading-lg  text-[#1D4EDE]"></span>

    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location.pathname }} />;
};

export default PrivateRoute;


PrivateRoute.propTypes = {
  children: PropTypes.node
};