import React from 'react'
import "../css/portfolio.css"
import { Link, Outlet, useLocation,  } from 'react-router-dom'

const Portfolio = () => {
    const allProjects = [
        {
            "imageUrl": "https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg",
            "skill": "html"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg",
            "skill": "css"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg",
            "skill": "javascript"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/B/Bootstrap-logo-vector-01.svg",
            "skill": "bootstrap"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/R/React-logo-vector-01.svg",
            "skill": "react"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/G/Git-logo-vector-01.svg",
            "skill": "git"
        },
        {
            "imageUrl": "https://brandeps.com/icon-download/G/Github-octocat-icon-vector-01.svg",
            "skill": "github"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg",
            "skill": "mongodb"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg",
            "skill": "mongodb"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg",
            "skill": "mongodb"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg",
            "skill": "nodejs"
        }

    ]
    return (
        <div className='container'>
            <div className="row d-flex ">
                
                    {allProjects.map((e)=>{
                        return <div className="col-md-3 text-center  " key={e.skill}>
                        <div className="card w-100 h-100 ">
                            <img src={e.imageUrl} className="card-img-top card-img-uday" alt="tghtr" />
                        </div>
                    </div>
                    })}
            </div>
        </div>
    )
}

export default Portfolio
