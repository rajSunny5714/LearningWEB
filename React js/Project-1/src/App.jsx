import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
 return (
 <>
  <Navigation />
  <Outlet/>
  <Footer/>
 </>
 );
}

export default App;