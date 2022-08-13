import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6xwzba', 'template_p2motcw', form.current, 'k0_wzpWJGx6PsFSWt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>mail@rachmatramadhan.com</h5>
        <a href="mailto:mail@rachmatramadhan.com">Send a Message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+62 8539 9689 589</h5>
        <a href="https://api.whatsapp.com/send?phone=6285399689589&text=">Send a Message</a>
        </article>
        <article className="contact__option">
        <BsTelegram className='contact__option-icon'/>
        <h4>Telegram</h4>
        <h5>@rachmatramadhan</h5>
        <a href="https://t.me/rachmatramadhan">Send a Message</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact