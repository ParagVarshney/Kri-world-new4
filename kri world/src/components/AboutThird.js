import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutThird = () => {
  return (
    <section className="py-12 bg-[#fffaf8] text-center px-4 md:px-8 lg:px-12">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Our Commitment
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-700 max-w-3xl mx-auto mb-12 text-base md:text-lg lg:text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Kriworld is a leading digital marketing agency specializing in a comprehensive
        range of services including SEO, PPC advertising, social media marketing,
        content creation, and web development.
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Our Value */}
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-md group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Our Value"
            className="w-full h-80 sm:h-96 md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end text-left text-white p-4 sm:p-6 md:p-8">
            <div className="absolute top-4 right-4">
              <motion.div
                whileHover={{ rotate: 45, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-green-500 rounded-full p-2 cursor-pointer hover:bg-green-400 transition"
              >
                <ArrowUpRight size={22} />
              </motion.div>
            </div>

            <h3 className="font-semibold text-xl mb-2">Our Value</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <strong>Excellence:</strong> We strive for excellence in everything we do,
              delivering high-quality digital marketing services that exceed expectations.
              <br />
              <strong>Innovation:</strong> We foster a culture of innovation, constantly
              exploring new ideas and technologies to stay ahead in the rapidly evolving
              digital landscape.
              <br />
              <strong>Integrity:</strong> Integrity is the cornerstone of our business.
              We operate with honesty, transparency, and respect in all our interactions
              with clients, partners, and employees.
            </p>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="bg-[#00897b] text-white p-6 sm:p-8 rounded-2xl shadow-md relative flex flex-col justify-between hover:bg-[#009e8f] transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <div className="absolute top-4 right-4">
            <motion.div
              whileHover={{ rotate: 45, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white text-[#00897b] rounded-full p-2 cursor-pointer hover:bg-gray-100 transition"
            >
              <ArrowUpRight size={22} />
            </motion.div>
          </div>
          <h3 className="font-semibold text-xl sm:text-2xl mb-3">Our Mission</h3>
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
            Our mission at Kriworld is to deliver unparalleled digital marketing expertise
            that drives measurable results for our clients. We are committed to staying at
            the forefront of digital trends, utilizing cutting-edge technology, and
            providing exceptional service to help businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          className="bg-[#00897b] text-white p-6 sm:p-8 rounded-2xl shadow-md relative flex flex-col justify-between hover:bg-[#009e8f] transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="absolute top-4 right-4">
            <motion.div
              whileHover={{ rotate: 45, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white text-[#00897b] rounded-full p-2 cursor-pointer hover:bg-gray-100 transition"
            >
              <ArrowUpRight size={22} />
            </motion.div>
          </div>
          <h3 className="font-semibold text-xl sm:text-2xl mb-3">Our Vision</h3>
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
            At Kriworld, our vision is to empower businesses globally through innovative
            digital marketing solutions. We envision a future where every business,
            regardless of size or industry, can harness the full potential of digital
            platforms to achieve growth and success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutThird;
