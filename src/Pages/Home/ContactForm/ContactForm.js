import React, { useContext } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast';
import { themeContext } from '../../../Context/Context';

const ContactForm = () => {
    function sendEmail(event) {
        event.preventDefault()
        emailjs.sendForm('service_nyd07vn', 'template_wcuwlhp', event.target, '35kIocdysGTj2nAOo')
            .then(res => {
                console.log(res)
                toast.success('Successfull Email send')

            }).catch(err => console.error(err))
    }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">

                <div className="card flex-shrink-0 lg:w-1/2 w-full shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name='subject' placeholder="Subject" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            {/* <input type="text" placeholder="Message" className="input input-bordered" /> */}
                            <textarea name='message' className="textarea textarea-bordered" placeholder="Message"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Submit</button> */}
                            <input type="submit" className='btn btn-primary' value="Submit" />
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Information</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="divider w-24"></div>

                    <div className="card shadow-xl" style={{
                        background: darkMode ? "gray" : "",
                        color: darkMode ? "white" : "",
                    }}>
                        <div className="card-body flex flex-row items-center">

                            <div className='mr-3 text-3xl'>
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h2 className="card-title">Contact on phone</h2>
                                <p>+8801780499515</p>
                            </div>

                        </div>
                    </div>

                    <div className="card shadow-xl my-3" style={{
                        background: darkMode ? "gray" : "",
                        color: darkMode ? "white" : "",
                    }}>
                        <div className="card-body flex flex-row items-center">

                            <div className='mr-3 text-3xl'>
                                <SiGmail />
                            </div>

                            <div>
                                <h2 className="card-title">Contact on mail</h2>
                                <p>mitifariha7@gmail.com</p>
                            </div>

                        </div>
                    </div>

                    <div className="card shadow-xl" style={{
                        background: darkMode ? "gray" : "",
                        color: darkMode ? "white" : "",
                    }}>
                        <div className="card-body flex flex-row items-center">

                            <div className='mr-3 text-3xl'>
                                <GoLocation />
                            </div>

                            <div>
                                <h2 className="card-title">Contact address</h2>
                                <p>71/4 Tollabag, Dhaka, Bangladesh</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ContactForm;