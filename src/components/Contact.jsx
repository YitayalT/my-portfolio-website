import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-8 md:mb-12" style={{fontFamily: "Times New Roman, serif"}}>
        Get In Touch
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
        {/* Contact Information */}
        <div className="bg-tertiary p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl lg:w-1/2">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <FaEnvelope className="text-[#915EFF] text-lg sm:text-xl mt-0.5" />
              <div>
                <h4 className="text-[#915EFF] font-medium text-sm sm:text-base">Email</h4>
                <a 
                  href="mailto:anuyitayal@gmail.com" 
                  className="text-secondary hover:text-white transition-colors text-sm sm:text-base"
                >
                  anuyitayal@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <FaLinkedin className="text-[#915EFF] text-lg sm:text-xl mt-0.5" />
              <div>
                <h4 className="text-[#915EFF] font-medium text-sm sm:text-base">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/animaw-yitayal" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-white transition-colors text-sm sm:text-base break-all"
                >
                  linkedin.com/in/animaw-yitayal
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <FaPhone className="text-[#915EFF] text-lg sm:text-xl mt-0.5" />
              <div>
                <h4 className="text-[#915EFF] font-medium text-sm sm:text-base">Phone</h4>
                <a 
                  href="tel:+251919607101" 
                  className="text-secondary hover:text-white transition-colors text-sm sm:text-base"
                >
                  +251 919 607101
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <FaMapMarkerAlt className="text-[#915EFF] text-lg sm:text-xl mt-0.5" />
              <div>
                <h4 className="text-[#915EFF] font-medium text-sm sm:text-base">Location</h4>
                <p className="text-secondary text-sm sm:text-base">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-tertiary p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl lg:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Your Name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="What's your name?"
                  className="bg-secondary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base"
                  required
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Your Email</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="What's your email?"
                  className="bg-secondary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base"
                  required
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Your Message</span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="What do you want to say?"
                  className="bg-secondary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base"
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#915EFF] py-2 sm:py-3 px-6 sm:px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg sm:rounded-xl hover:bg-[#7d4de0] transition-colors text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;