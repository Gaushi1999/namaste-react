
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Error from './components/Error.js';
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Contact } from './components/Contact.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const App = () => (
  <div className="app">
    <Header/>
    <Outlet/>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);