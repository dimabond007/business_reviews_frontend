// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BgImage from '../images/BackGroundImage.jpeg';
import CallForActionImage from '../images/CallForActionImage.jpeg';
import Loading from '../components/Loading';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center py-20 text-white overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${BgImage})`, opacity: 0.8 }}
        ></motion.div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              Discover and Share Business Reviews Like Never Before
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-lg mb-8"
            >
              Welcome to ReviewU, the ultimate platform for sharing and exploring business reviews. Whether you're
              looking for the best local spots or want to share your own experiences, ReviewU connects you with a
              vibrant community of reviewers and businesses.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex justify-center space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
              >
                About Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/bsnss"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
              >
                Explore Businesses
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-primary dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-12 text-white"
            >
              Why You'll Love ReviewU
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Comprehensive Reviews",
                  description: "Access detailed reviews from real users to make informed decisions about businesses you care about.",
                  icon: (
                    <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Real-Time Updates",
                  description: "Receive instant updates on new reviews, likes, and comments to stay up-to-date with the latest feedback.",
                  icon: (
                    <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Verified Businesses",
                  description: "Get accurate information from verified businesses, ensuring that you only read genuine reviews.",
                  icon: (
                    <svg className="w-12 h-12 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card dark:bg-primary p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-xl text-card-foreground dark:text-white font-bold mb-4"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-base text-card-foreground dark:text-gray-200"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: `url(${CallForActionImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Ready to Explore the Best Businesses and Reviews?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg mb-8"
            >
              Join ReviewU today and be part of our growing community. Discover great businesses, share your
              experiences, and stay updated with real-time feedback.
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/register"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default HomePage;
