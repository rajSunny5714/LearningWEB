import MenuItems from '../Components/MenuItems.jsx'
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";
import App from '../App.jsx';
import About from '../Components/About.jsx';
import Location from '../Components/Location.jsx';
import Contact from '../Components/Contact.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "menu",
          element: <MenuItems />,
          children : [
            
          ]
        },
        {
          path: "location",
          element: <Location />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

export default router