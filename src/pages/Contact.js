import React from 'react'
import Email from '../components/Email';

const Contact = () => {
  return (
    <section className="Home">
      <div className="overlay flex flex-col items-center justify-center">
        <div className="p-10">
          <h2 className="text-white font-mono mb-5 text-center text-4xl">Contact Me!</h2>
          <p className="text-white font-mono mb-5 text-center text-xl">
            Please fill out the contact form 
          </p>
        </div>

        <form name="Contact Form" className=" flex flex-col">
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Enter your name: " 
            
            required
            />

          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Enter your email: " 
            required
            />

          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Enter Message: "
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </form>

        <div className="p-10">
          <p className="mr-5 bg-blue-300 py-2 px-4 rounded-full font-mono hover:bg-blue-800">
            <Email label=" Drop me a line!" mailto="mailto:chrispesar1@gmail.com" />
          </p>
        </div>
      </div>
    </section>

  )
}

export default Contact







// import React, { useState } from 'react';
// import { validateEmail } from '../utils/helpers';

// function ContactForm(){
//   // Hook to manage form data
//   const [formState, setFormState] = useState({ name: '', email: '', message: ''});
//   // Define the error message
//   const [errorMessage, setErrorMessage] = useState('');
//   // Destructure the formState object
//   const { name, email, message } = formState;

//   function handleSubmit(e){
//     e.preventDefault();
//     if(!errorMessage){
//       setFormState({ [e.target.name]: e.target.value })
//       console.log('Form', formState);
//     }
//   };
  
//   // Define the handleChange function
//   function handleChange(e){
//     if (e.target.name === 'email'){
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid); 

//       // isValid conditional statement
//       if(!isValid){
//         setErrorMessage('Your email address is invalid');
//       } else {
//         setErrorMessage('');
//       } 
//     } else {
//       if(!e.target.value.length){
//         setErrorMessage(`${e.target.name} is required`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//   };


//   return(
//     <section className="">
//       <h1>Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
//         </div>

//         <div>
//           <label htmlFor="email">Email Address:</label>
//           <input type="email" defaultValue={email}  name="email" onBlur={handleChange}/>
//         </div>

//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
//         </div>

//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}

//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   )
// }

// export default ContactForm;


