import BgImage from '../images/BackGroundImage.jpeg';
import CallForActionImage from '../images/CallForActionImage.jpeg';
import Footer from '../components/Footer.tsx';

function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${BgImage})`, opacity: 0.3 }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Discover and Share Business Reviews Like Never Before</h1>
            <p className="text-lg mb-8">
              Welcome to ReviewU, the ultimate platform for sharing and exploring business reviews. Whether you're
              looking for the best local spots or want to share your own experiences, ReviewU connects you with a
              vibrant community of reviewers and businesses.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/join-us" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Join the Community</a>
              <a href="/features" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Explore Features</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-12 text-foreground">Why You'll Love ReviewU</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div key={index} className="bg-card dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-card-foreground dark:text-white font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-card-foreground dark:text-gray-300 mb-6">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 text-white  bg-card dark:bg-gray-900">
        <div className="container  mx-auto px-4">
          <div className="  max-w-5xl mx-auto text-center">
            <h2 className="text-5xl m-5 text-primary font-bold dark:text-white mb-16">What Our Users Are Saying</h2>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ReviewU has completely changed how I find local businesses. The reviews are detailed and the platform is very intuitive.",
                  author: "John Doe",
                  title: "Small Business Owner"
                },
                {
                  quote: "The real-time updates keep me informed about the latest reviews and trends. It's a great tool for making quick decisions.",
                  author: "Jane Smith",
                  title: "Freelancer"
                },
                {
                  quote: "I love how easy it is to share my experiences and read others'. ReviewU makes reviewing businesses fun and rewarding.",
                  author: "Sam Wilson",
                  title: "Marketing Specialist"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-primary dark:bg-primary p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <p className="text-lg text-gray-100 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <h3 className="text-xl text-gray-100 font-bold text-primary dark:text-white mb-2">{testimonial.author}</h3>
                  <p className="text-gray-100 dark:text-gray-400">{testimonial.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative  py-16 text-center overflow-hidden" style={{ backgroundImage: `url(${CallForActionImage})`, }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Join Us Today!</h2>
          <p className="text-lg mb-6 text-gray-200">Be part of our growing community and start sharing your business reviews with ReviewU. Connect, share, and grow with us!</p>
          <a href="/sign-up" className="bg-blue-800  hover:bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 ease-in-out inline-block">Sign Up Now</a>
        </div>
      </section>


    </div>
  );
}

export default HomePage;