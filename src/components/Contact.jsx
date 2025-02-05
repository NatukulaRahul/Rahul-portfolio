// import React from 'react';
// import { useState ,useRef } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
// import { slideIn, textVariant } from '../utils/motion';


// //template_kd7kuwa
// //service_9ij51hf
// //CUil0h8E4WnXJlxjS

// const Contact = () => {
//   const formRef = useRef();
//   const [form,setForm] = useState({
//     name:'',
//     email:'',
//     message:'',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e)=>{
//     const  { name,value } =e.target;

//     setForm({...form, [name]:value })
//   }

//   const handleSubmit =(e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send(
//       'service_9ij51hf',
//       'template_kd7kuwa',
       
//       {
//         from_name:form.name,
//         to_name:"Rahul",
//         from_email:form.email,
//         to_email:'natukularahul14@gmail.com',
//         message:form.message,
//       },
//       'CUil0h8E4WnXJlxjS'
//       )
//       .then(() =>{
//         setLoading(false);
//         alert('Thank you.I will get back to you as soon as possible');

//         setForm({
//           name:'',
//           email:'',
//           message:'',
//         })
//       },(error)=>{
//         setLoading(false)
//         console.log(error);

//         alert('Something went wrong.')

//       })
//   }

//   return (
//     <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10
//      overflow-hidden '>
//       <motion.div
//         variants={slideIn('left',"tween",0.2,1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>


//         <form 
//           ref ={formRef}
//           onSubmit ={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label
//             className='mt-12 flex flex-col'>
//               <span className='text-white font-medium mb-4'>Your Name</span>
//               <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//               />
//             </label>
//             <label
//             className='mt-12 flex flex-col'>
//               <span className='text-white font-medium mb-4'>Your Email</span>
//               <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//               />
//               <label
//             className='mt-12 flex flex-col'>
//               <span className='text-white font-medium mb-4'>Your Message</span>
//               <textarea
//                rows='7'
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What do you want to say"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//               />
//             </label>
//             </label>

//             <button 
//               type='submit'
//               className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'

//             >
//               {loading ? 'sending...': 'send'}

//             </button>
//         </form>

//       </motion.div>

//       <motion.div
//         variants={slideIn('right',"tween",0.2,1)}
//         className='xl:flex-1 xl:h-auto md:h-[550ox] h-[350px]'
//       >
//         <EarthCanvas/>
//       </motion.div>



//     </div>
//   )
// }

// export default SectionWrapper (Contact,"contact")


import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_9ij51hf",
        "template_kd7kuwa",
        {
          from_name: form.name,
          to_name: "Rahul",
          from_email: form.email,
          to_email: "natukularahul14@gmail.com",
          message: form.message,
        },
        "CUil0h8E4WnXJlxjS"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong.");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.name && <span className="text-red-500 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.email && <span className="text-red-500 mt-1">{errors.email}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && <span className="text-red-500 mt-1">{errors.message}</span>}
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");