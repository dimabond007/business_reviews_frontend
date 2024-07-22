import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loading from '../components/Loading'; // Adjust the import path as needed

function ContactUsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds delay

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
      className="bg-background min-h-screen text-foreground"
    >
      {/* Contact Us Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-r from-primary to-primary-foreground py-6 px-8 shadow-md"
      >
        <h1 className="text-4xl text-white font-extrabold text-center">Contact Us</h1>
      </motion.header>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="py-16 dark:bg-gray-900 text-card-foreground"
      >
        <div className="container mx-auto px-4">
          <img src="src/images/favicon-32x32.png" className="m-auto max-w-[250px]" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-card dark:bg-primary p-8 rounded-lg shadow-lg max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <label htmlFor="name" className="block text-muted-foreground text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <label htmlFor="email" className="block text-muted-foreground text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <label htmlFor="message" className="block text-muted-foreground text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message"
                ></textarea>
              </motion.div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary py-2 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="py-16 dark:bg-gray-900 bg-card text-card-foreground"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Contact Information</h2>
            <p className="text-lg mb-6">
              You can also reach us through the following channels:
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, staggerChildren: 0.2, delayChildren: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { title: "Email", content: "support@reviewu.com", icon: "📧" },
                { title: "Phone", content: "(123) 456-7890", icon: "📞" },
                { title: "Address", content: "123 Business Rd, City, State, ZIP", icon: "🏢" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center dark:bg-blue-800 p-4 bg-card rounded-lg shadow-md"
                >
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-card-foreground">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="py-16 bg-background dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.053040420098!2d34.7982982151606!3d32.08441318119544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b96f87aebc5%3A0xb56a5dfb57344d8b!2sHaChilazon%203%2C%20Ramat%20Gan%2C%20Israel!5e0!3m2!1sen!2sil!4v1629794729944!5m2!1sen!2sil"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ContactUsPage;
