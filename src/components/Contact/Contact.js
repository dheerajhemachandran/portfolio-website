import {React,useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_z8o1hhe', 'template_tga8dar', form.current, 'Q_Xbpxg9aldHvc6XN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
<div>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form" onSubmit={sendEmail}>
      <h5 class="title">Contact me</h5>
      <p class="description">Feel free to contact me if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
</div>
  )
}

export default Contact
