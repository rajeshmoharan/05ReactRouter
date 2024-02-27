import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

function App() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default App