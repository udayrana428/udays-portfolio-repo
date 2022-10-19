import React from 'react'

const Designed = () => {
    const designedProjects = [
        {
            "imageUrl": "https://brandeps.com/logo-download/C/C++-logo-vector-01.svg",
            "skill": "C++"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg",
            "skill": "Java"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/T/Typescript-logo-vector-02.svg",
            "skill": "Typescript"
        },
        {
            "imageUrl": "https://brandeps.com/logo-download/F/Figma-logo-vector-01.svg",
            "skill": "Figma"
        }
    ]
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                
                    {designedProjects.map((e)=>{
                        return <div className="col-md-3 text-center mx-1 my-1" key={e.skill}>
                        <div className="card " >
                            <img src={e.imageUrl} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    })}
            </div>
        </div>
    )
}

export default Designed
