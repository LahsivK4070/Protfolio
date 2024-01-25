import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    }
}

const Contact = () => {

    const formRef = useRef();

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m5lgnxf', 'template_ubwkn7t', formRef.current, 'V1bBgDlz_Aw6UbkdH').then((result) => {
            setSuccess(true);
            formRef.current.reset();
        }, (error) => {
            setError(true);
            console.log(error.text);
        });
    }

  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className="contact">
        <motion.div variants={variants} className="textContainer">
            <motion.h1 variants={variants}>Let's Work Together.</motion.h1>
            <motion.div variants={variants} className="item">
                <h2>Mail</h2>
                <span>vishalkumarapply@gmail.com</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Address</h2>
                <span>Gajraula, Uttar Pradesh</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Phone</h2>
                <span>+91 7037175148</span>
            </motion.div>
        </motion.div>
        <motion.div className="formContainer">
            <motion.form ref={formRef} onSubmit={sendEmail}>
                  <input type="text" required placeholder="Name..." name="from_name"/>
                  <input type="email" required placeholder="Email..." name="email"/>
                  <textarea rows={8} placeholder="Message" name="message"/>
                  <button>Submit</button>
                  {error && "Error"}
                  {success && "Success"}
            </motion.form>
        </motion.div>  
    </motion.div>
  )
}

export default Contact;
