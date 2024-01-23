import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components'
// import About from "./components";
// import Contact from "./components";
// import GitHub from './components'
import { Home, About, Contact, Footer, Header , User} from '/src/components/index.js';
import GitHub, {nameInfo} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       }
//     ]
//   }
// ])
// You can use this above code instead of the below code to create a router.
const router12 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route 
      loader={nameInfo}
      path='/github' 
      element={<GitHub/>} 
      />
      <Route path='/user/:userid' element={<User/>} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router12}/>
  </React.StrictMode>,
)
