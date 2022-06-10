import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
        <section id='home'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Feels the Fresh Busniess Perspective</h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a he Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <div className='buttons d-flex justify-content-center'>
                            <NavLink to="/contact" className='btn btn-light me-4 rounded-pill px-4 py-2'>Get Quote</NavLink>
                            <NavLink to="/services" className='btn btn-outline-light rounded-pill px-4 py-2'>Our Services</NavLink>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}
