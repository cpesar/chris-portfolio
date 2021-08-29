import React, { useState } from 'react'
import Email from '../components/Email';
import { validateEmail } from '../utils/helpers';

const Contact = () => {

 const [formState, setFormState] = useState({ name: '', email: '', message: ''});
 const [errorMessage, setErrorMessage] = useState('');

 const { name, email, message } = formState;

 function handleSubmit(e){
   e.preventDefault();
   if(!errorMessage){
     setFormState({ [e.target.name]: e.target.value })
     console.log('Form', formState);
   }
 };
 
 function handleChange(e){
   if (e.target.name === 'email'){
     const isValid = validateEmail(e.target.value);
     console.log(isValid); 

     if(!isValid){
       setErrorMessage('Your email address is invalid');
     } else {
       setErrorMessage('');
     } 
   } else {
     if(!e.target.value.length){
       setErrorMessage(`${e.target.name} is required`);
     } else {
       setErrorMessage('');
     }
   }
 };




  return (
    <main className="Home">
      <section className="overlay">
        <section className="p-10 flex flex-col items-center justify-center">
          <p className="mr-5 bg-yellow-300 py-2 px-4 rounded-full font-mono hover:bg-blue-500">
            <Email label=" Drop me a line!" mailto="mailto:chrispesar1@gmail.com" />
          </p>
        </section>

        <section className=" flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <div className="p-10">
            <h2 className="text-white font-mono mb-5 text-center text-4xl">Contact Me!</h2>
            <p className="text-white font-mono mb-5 text-center text-xl">
              Please fill out the contact form 
            </p>
          </div>

          <form name="Contact Form" className=" flex flex-col">
            <input 
              className="py-2 px-4 mb-5"
              type="text" 
              name="name" 
              id="name" 
              defaultValue={name}
              onBlur={handleChange}
              placeholder="Enter your name: " 
            
              required
              />

            <input 
              className="py-2 px-4 mb-5 rounded text-blue-500"
              type="email" 
              name="email" 
              id="email" 
              defaultValue={email}
              onBlur={handleChange}
              placeholder="Enter your email: " 
              required
              />

            <textarea
              // className="py-2 px-4 mb-5"
              name="message"
              id="message"
              defaultValue={message} 
              onBlur={handleChange}
              cols="30"
              rows="10"
              placeholder="Enter Message: "
              required
            ></textarea>

            <input type="submit" value="Submit" />

            {/* {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )} */}
          </form>

        </section>
      </section>
    </main>

  )
}

export default Contact












 


