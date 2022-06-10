import React from 'react'

export default function About() {
  return (
    <div>
        <section id='about'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="https://img.freepik.com/free-photo/businesswoman-leader-modern-office-with-businesspeople-workin_1139-957.jpg?w=2000" alt='about' className='w-75 mt-5' />
                    </div>
                    <div className='col-md-6'>
                        <h3 className='fs-5 mb-0'>About Us</h3>
                        <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                        <hr className='w-50'></hr>
                        <p className='lead mb-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

                        <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started </button>
                        <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
