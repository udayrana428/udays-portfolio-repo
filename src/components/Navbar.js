
import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../css/nav.css"
const Navbar = () => {
    let location = useLocation()
    console.log(location.pathname)
    const menuclicked=()=>{
        const responsivenavs=document.querySelector(".responsivenavs")
        responsivenavs.classList.toggle("responsivenavshide")
    }
    return (
        <>
            <div className=" navhead">
                <nav className="navig py-2 px-4">
                    <h3><a className="liststyledec text-dark" href="#">Porto</a></h3>
                    <ul className="navs">
                        <li className="mx-3"><Link className="text-dark liststyledec" to="/">Home</Link></li>
                        <li className="mx-3"><Link className="text-dark liststyledec" to="/about">About Us</Link></li>
                        <li className="mx-3"><Link className="text-dark liststyledec" to="/skills">Skills</Link></li>
                        <li className="mx-3"><Link className="text-dark liststyledec" to="/portfolio">Projects</Link></li>
                        <li className="mx-3"><button className="button"><Link className="text-dark liststyledec" to="/contact">Contact Us</Link></button></li>
                    </ul>
                    <i onClick={menuclicked} className="hamburger fs-2 mx-4 fa fa-bars"></i>
                </nav>
                <div className="responsivenavs responsivenavshide">
                    <ul className="resnavs fs-4">
                        <li className="my-3"><Link className="text-dark liststyledec" to="/">Home</Link></li>
                        <li className="my-3"><Link className="text-dark liststyledec" to="/about">About Us</Link></li>
                        <li className="my-3"><Link className="text-dark liststyledec" to="/skills">Skills</Link></li>
                        <li className="my-3"><Link className="text-dark liststyledec" to="/portfolio">Projects</Link></li>
                        <li className="my-3"><Link className="text-dark liststyledec" to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
