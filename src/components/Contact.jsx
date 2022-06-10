import React from 'react'

export default function Contact() {
  return (
    <div>
        <section id='contact'>
            <div className='container my-5 py-5'>
                <div className='row mb-5'>
                    <div className='col-12'>
                        <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
                        <h1 className='display-6 text-center mb-4'>Have Some <b>Questions??</b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='https://wallpaperaccess.com/full/3124572.jpg' alt='contact' className='w-75' />
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" placeholder="John Smith"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button className='btn btn-outline-primary rounded-pill'> Send Message <i className='fa fa-paper-plane ms-2'></i> </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
