import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section
      className="relative py-40 px-4 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-photo/using-computerhand-typing-keyboard-laptop-600nw-1774949384.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Contact Us
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-4xl font-semibold text-center text-gray-100 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          Get in Touch with TimeFar <br/>We Value Your Connection
        </motion.h3>

        <motion.p
          className="text-gray-200 text-center text-2xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          We value your feedback, questions, and suggestions. Whether you have an inquiry
          about our services, need assistance, or just want to share your thoughts, we're
          here to help!
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8 md:mb-40"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#d8f3e6] text-[#00897b] p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                
                <p className="font-bold text-2xl text-white hover:text-[#00e5b4] transition-colors">
                  harishgupta@kriworld.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-[#d8f3e6] text-[#00897b] p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                
                <p className="font-bold text-2xl text-white">
                  Sarai Khawaja, Faridabad, Haryana, 121003
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#d8f3e6] text-[#00897b] p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                
                <p className="font-bold text-2xl text-white hover:text-[#00e5b4] transition-colors">
                  +91 870-066-1267
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.img
              src="/kritika1.png"
              alt="Contact Us"
              className="w-[90%] md:w-[80%] rounded-[3rem] object-cover shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
