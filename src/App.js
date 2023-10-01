
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Error from './components/Error.js';
import RestaurantMenu from "./components/RestaurantMenu.js";
import Contact  from './components/Contact.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/userContext.js';
import { Provider } from 'react-redux';
import appStore from './redux/store.js';
import Cart from './components/Cart.js';

const Grocery = lazy(() => import("./components/Grocery.js"));


const App = () => {

  const [userName, setUserName] = useState("");

  // We are setting static here justt for practice but we generally fetch this data from api
  useEffect(() => {
    setUserName("Gaurav shivhare")
  }, []);

  const changeUserName = (name) => {
    setUserName(name);
  }

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, changeUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

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
        path: '/checkout',
        element: <Cart />
      },
      {
        path: '/grocery',
        element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
        )
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