import Header from "./components/header"
import Footer from "./components/Footer"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Github, { getDetails } from "./components/Github"
import User from "./components/User"
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact />} />
        <Route path='github' element={<Github />} loader={getDetails}/>
        <Route path="user/:id" element={<User />} />
      </Route>
    )

  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
