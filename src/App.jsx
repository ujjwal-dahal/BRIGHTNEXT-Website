
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Services from "./components/Services";
import "./style/App.scss";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import "./style/mediaQuery.scss";

const App = () => {
  const myRouter = Router([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "*",
          element: <h1>Page Not Found</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
