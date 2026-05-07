import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Router/Router';
import AuthProvider from './providers/AuthProvider';
 



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);