import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import CreateAssignment from "../Components/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Register from "../Components/Authentication/Register";
import AssignmentDetail from "../Components/Assignment/AssignmentDetail";
import SubmitAssignment from "../Components/Assignment/SubmitAssignment";
import AssignmentPage from "../Components/AssignmentPage/AssignmentPAge";
import Pending from "../Components/Pending/Pending";
import UpdateAssignment from "../Components/Assignment/UpdateAssignment";
import GiveMark from "../Components/GiveMark/GiveMark";
import MySubmited from "../Components/AttemtedAssignmnet/MySubmited";
import MySubmition from "../Components/MySubmition/MySubmition";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Register />,
            },
            {
                path: "/create",
                element: <PrivateRoute><CreateAssignment /></PrivateRoute>,
            },
            {
                path: "/assignment/:id",
                element: <PrivateRoute><AssignmentDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://group-grid-server.vercel.app/assignment/${params.id}`)
            },
            {
                path: "/submit/:id",
                element: <PrivateRoute><SubmitAssignment /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://group-grid-server.vercel.app/assignment/${params.id}`)
            },
            {
                path: "/mysubmition/:id",
                element: <PrivateRoute><MySubmition /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://group-grid-server.vercel.app/submited/${params.id}`)
            },
            {
                path: "attempted-assignments",
                element: <PrivateRoute><MySubmited /></PrivateRoute>,

            },




            {
                path: "/giveMark/:id",
                element: <PrivateRoute><GiveMark /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://group-grid-server.vercel.app/submited/${params.id}`)
            },

            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateAssignment /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://group-grid-server.vercel.app/assignment/${params.id}`)
            },
            {
                path: "/submit",
                element: <Pending></Pending>,
            },
            {
                path: "/assignments",
                element: <AssignmentPage />,
            },
            {
                path: "/pending",
                element: <PrivateRoute><Pending></Pending></PrivateRoute>
            },

        ]
    },
]);

export default router