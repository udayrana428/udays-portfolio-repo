import React from 'react'
import emailjs from "emailjs-com"
import "../css/contact.css"
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_f5u3vkb', 'template_odczi04', e.target, 'user_HN0dPxZErlecopm96RzT7').then(res => { console.log("Success") }).catch(err => { console.log(err) })
        // emailjs.sendForm('service_f5u3vkb', 'template_m67dzmd', e.target, 'user_HN0dPxZErlecopm96RzT7').then(res=>{console.log("Success")}).catch(err=>{console.log(err)})
    }
    return (
        <>
            <div className="contactpage d-flex justify-content-center  vh-100">

                <div className="container text-light  contact-page d-flex flex-column align-items-center  my-5">
                    <div className=" fs-3 d-flex justify-content-center ">
                        <header className='page-header p-1 px-3 '>Hire Me</header>
                    </div>
                    <form className="row mt-3 w-75 g-3  " onSubmit={sendEmail} >
                        <div className="col-md-12 border-top-0">

                            <input type="text" className="form-control border-top-0 border-end-0 border-3 bg-transparent text-light" id="name" placeholder='ENTER YOUR NAME *' name="name" />
                        </div>
                        <div className="col-md-12">
                            <input type="email" className="form-control border-top-0 border-end-0 border-3 bg-transparent text-light" id="email" placeholder='ENTER YOUR EMAIL *' name="email" required />
                        </div>
                        <div className="col-md-12">
                            <input type="number" className="form-control border-top-0 border-end-0 border-3 bg-transparent text-light" id="number" placeholder='PHONE NUMBER *' name="cnumber" required />
                        </div>
                        <div className="col-md-12">
                            <textarea name="textarea" className='form-control border-top-0 border-end-0 border-3 bg-transparent text-light' id="textarea" placeholder='YOUR MESSAGE' name="message" cols="20" rows="6"></textarea>
                        </div>
                        <div className="col-md-3 ">
                            <button type="submit" className="form-control btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
