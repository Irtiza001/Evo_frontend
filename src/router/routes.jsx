import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Coverage from "../pages/Coverage";
import Services from "../pages/Services";
import Privacy from "../pages/Privacy";
import SearchBar from "../pages/SearchBar";
// import AdminDashboard from "../pages/AdminDashboard";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/coverage",
    element: <Coverage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/search",
    element: <SearchBar />,
  },
  // {
  //   path: "/admindashboard",
  //   element: <AdminDashboard />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

export default routes;
