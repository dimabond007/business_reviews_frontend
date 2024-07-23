import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loading from '../components/Loading'; // Adjust the import path as needed
import Daniel from '../images/Daniel.jpeg';
import Omer from '../images/Omer.jpeg';
import Dima from '../images/Dima.jpeg';

function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const teamMembers = [
    {
      name: 'Dima',
      role: 'BackMaster',
      bio: 'Dima is a seasoned entrepreneur with a passion for innovation and technology. With years of experience in the tech industry, he brings invaluable insights and leadership to our team.',
      imageUrl: Dima,
    },
    {
      name: 'Omer',
      role: 'FrontMaster',
      bio: 'Omer is a full-stack developer with a knack for solving complex problems. His expertise in both frontend and backend development helps drive our projects forward with efficiency and precision.',
      imageUrl: Omer,
    },
    {
      name: 'Daniel',
      role: 'Full Stack | UX/UI',
      bio: 'Daniel is a creative designer specializing in user experience and interface design. His eye for detail and dedication to creating intuitive, engaging interfaces ensure that our users have a seamless experience.',
      imageUrl: Daniel,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      {/* About Us Header */}
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-12 px-4 sm:px-8 shadow-md overflow-hidden"
      >
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}>
          {/* Add background animation here */}
        </div>
        <h1 className="text-4xl sm:text-5xl text-center font-extrabold relative z-10">About Us</h1>
        <p className="text-lg sm:text-xl mt-4 text-center max-w-2xl mx-auto relative z-10">
          We're on a mission to revolutionize the way people discover and share business experiences.
        </p>
      </motion.header>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="p-6"
      >
        {/* Add more dynamic content and animations here */}
      </motion.section>

      {/* Team Members Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="py-16 px-4 sm:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Meet the Team</h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.3, delayChildren: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 5, }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-800 ease-in-out"
                >
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full border-4 border-primary dark:border-primary-foreground object-cover shadow-lg"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{member.name}</h3>
                  <p className="text-base sm:text-lg font-medium mb-4 text-primary dark:text-primary-foreground">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="py-16 px-4 sm:px-8 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Transparency", icon: "🔍", description: "We believe in open and honest communication in all our interactions." },
              { title: "Innovation", icon: "💡", description: "We constantly strive to improve and bring new ideas to the table." },
              { title: "Community", icon: "🤝", description: "We foster a strong sense of community among our users and team members." }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 10 }}
                className="bg-primary-foreground text-primary p-6 rounded-lg shadow-lg text-center"
              >
                <span className="text-3xl sm:text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.2 }}
        className="py-16 px-4 sm:px-8 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">Be part of the ReviewU family and start sharing your experiences today!</p>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            href="/auth/register"
            className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out inline-block"
          >
            Get Started
          </motion.a>
        </div>
      </motion.section>
    </motion.div >
  );
}

export default AboutPage;
