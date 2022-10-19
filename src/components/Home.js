import React from 'react'
import { Link } from 'react-router-dom'
import "../css/home.css"
const Home = () => {
    const work = ["Frontend Web Developer", "React Developer"]

    return (
        <>
            <section className="home " id='home'>
                <div className="homeleft">
                    <div className="intro">
                        Hy! I Am <br />
                        Uday Rana
                    </div>
                    <p className='my-4 fs-3'>Frontend developer/React developer</p>
                    <button className="button">Hire Me</button>
                </div>
                <div className="homeright">
                    <img src="https://www.pngfind.com/pngs/b/60-600927_person-png.png" height="100%" alt="" srcset="" />
                </div>
                {/* <div className="homebottom">

                </div> */}
            </section>
            <section className="services mt-2" id='services'>
                <div className="serviceleft">
                    <div className="servicelbox">
                        <div className="sb d-flex justify-content-center align-items-center">
                            <img className='h-50 w-50' src='https://www.svgrepo.com/show/249745/coding-web-development.svg' alt="sdfsd" />
                            <div className="sbdes">
                                <h4>Developer</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, impedit?</p>
                            </div>
                        </div>
                        <div className="sb d-flex justify-content-center align-items-center">
                            <img className='h-50 w-50' src="https://www.svgrepo.com/show/15931/art-and-design.svg" alt="sdfsd" />
                            <div className="sbdes">
                                <h4>Ui/Ux</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, impedit?</p>
                            </div>
                        </div>
                        <div className="sb d-flex justify-content-center align-items-center">
                            <img className='h-50 w-50' src="https://www.svgrepo.com/show/292485/web-ui.svg" alt="sdfsd" />
                            <div className="sbdes">
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, impedit?</p>
                            </div>
                        </div>
                        <i className="fas fa-angle-down moreservice"></i>
                    </div>
                </div>
                <div className="serviceright">
                    <div className="servicerbox px-5">
                        <h1>My Awesome <br /><span>Services</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur officiis deleniti laboriosam dicta ab dolor similique aliquam est magni? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti incidunt sapiente repellendus cupiditate nulla eum libero ipsam dolores inventore similique, sunt enim earum, possimus reiciendis at. Deleniti, distinctio. In.</p>
                        <button className="button">Hire CV</button>
                    </div>
                </div>
            </section>
            <section className="work" id='work'>
                <div className="worktop">
                    <div className="workbox">
                        <h1>Clients get always exceptional work from me</h1>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam ipsum culpa exercitationem voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ratione!</p>
                    </div>
                    <img src="https://www.pngitem.com/pimgs/m/54-548301_thumbs-up-man-png-transparent-png.png" alt="" />
                </div>
                <div className="workbottom">
                    <ul className=''>
                        <li>1. Top quality work</li>
                        <li>2. Commitments</li>
                        <li>3. 24 hours active</li>
                    </ul>
                </div>
            </section>
            <section className="projects" id='projects'>
                <h1>Recent Projects</h1>
                <div className="projectbox mt-4">
                    <div className="card mx-2" >
                        <img src="https://www.pngitem.com/pimgs/m/54-548301_thumbs-up-man-png-transparent-png.png" className="card-img-top" alt="..." />
                    </div>
                    <div className="card mx-2" >
                        <img src="https://www.pngitem.com/pimgs/m/54-548301_thumbs-up-man-png-transparent-png.png" className="card-img-top" alt="..." />
                    </div>
                    <div className="card mx-2" >
                        <img src="https://www.pngitem.com/pimgs/m/54-548301_thumbs-up-man-png-transparent-png.png" className="card-img-top" alt="..." />
                    </div>
                    <i className="fas fa-angle-down moreprojects"></i>
                </div>
            </section>
            <footer className="footer">
                <div className="footerleft">
                    <h3>Porto</h3>
                    <p>Hire us and we will make sure to fulfill your needs</p>
                    <hr className='text-white' />
                    <p> &#9400; 2022 Porto</p>
                </div>
                <div className="footerright">
                    <ul className='mx-4'>
                        <li><Link className=' liststyledec navlink text-white' to='/'>Home</Link></li>
                        <li><Link className=' liststyledec text-white' to='/about'>About</Link></li>
                        <li><Link className=' liststyledec navlink text-white' to='/skills'>Skills</Link></li>
                        <li><Link className=' liststyledec navlink text-white' to='/portfolio'>Projects</Link></li>
                        <li><Link className=' liststyledec navlink text-white' to='/contact'>Contact</Link></li>
                    </ul>
                    <div className="social d-flex">
                        <a href="https://www.linkedin.com/in/uday-rana-678879193/" target="_blank"><i className="  mx-4 fab fa-linkedin"></i></a>
                        <a href="https://github.com/udayrana428?tab=repositories" target={"_blank"}><i class="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/_udayrana._/" target={"_blank"}><i className="  mx-4 fab fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home
