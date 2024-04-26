import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { Component } from "react"


export class Root extends Component {
  render() {
    return (
      <div>
        <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
      </div>
    )
  }
}

export default Root