import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Restaurant from "./Res";
import Error from "./Error";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
