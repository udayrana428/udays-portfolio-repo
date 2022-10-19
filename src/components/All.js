import React from 'react'
const All = () => {
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
            "imageUrl": "https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg",
            "skill": "nodejs"
        }

    ]
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                
                    {allProjects.map((e)=>{
                        return <div className="col-md-4 text-center  " key={e.skill}>
                        <div className="card " >
                            <img src={e.imageUrl} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    })}
            </div>
        </div>
    )
}

export default All
