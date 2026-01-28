import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import NotFound from './Component/NotFound/NotFound';

function App() {

 let routes = createBrowserRouter([
  { path:"/" ,element : <Layout/> ,children:[
  {index:true ,element :<Home/>},
  {path :"About" ,element :<About/>},
  {path :"Portfolio" ,element :<Portfolio/>},
  {path :"Contact" ,element :<Contact/>},
  {path :"*" ,element :<NotFound/>},
  ]},])

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App