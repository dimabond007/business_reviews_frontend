import BgImage from '../images/BackGroundImage.jpeg';
import Footer from '../components/Footer.tsx';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${BgImage})`, opacity: 0.5 }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl  font-bold mb-6">Discover and Share Business Reviews Like Never Before</h1>
            <p className="text-lg mb-8">
              Welcome to ReviewU, the ultimate platform for sharing and exploring business reviews. Whether you're
              looking for the best local spots or want to share your own experiences, ReviewU connects you with a
              vibrant community of reviewers and businesses.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/join-us" className="bg-white text-blue-800 hover:bg-blue-400 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Join the Community</a>
              <a href="/features" className="bg-white text-blue-800 hover:bg-blue-400 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Explore Features</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why You'll Love ReviewU</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-800 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Reviews</h3>
                <p className="text-lg mb-6">Access detailed reviews from real users to make informed decisions about businesses you care about.</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-800 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13H7v-2h10v2zm0-4H7V9h10v2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Updates</h3>
                <p className="text-lg mb-6">Receive instant updates on new reviews, likes, and comments to stay up-to-date with the latest feedback.</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-800 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Verified Businesses</h3>
                <p className="text-lg mb-6">Get accurate information from verified businesses, ensuring that you only read genuine reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">What Our Users Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">"ReviewU has completely changed how I find local businesses. The reviews are detailed and the platform is very intuitive."</p>
                <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-500">Small Business Owner</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">"The real-time updates keep me informed about the latest reviews and trends. It’s a great tool for making quick decisions."</p>
                <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-500">Freelancer</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">"I love how easy it is to share my experiences and read others'. ReviewU makes reviewing businesses fun and rewarding."</p>
                <h3 className="text-2xl font-bold mb-2">Sam Wilson</h3>
                <p className="text-gray-500">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-6">Be part of our growing community and start sharing your business reviews with ReviewU.</p>
        <a href="/sign-up" className="bg-white text-blue-800 hover:bg-blue-400 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Sign Up Now</a>
      </section>

    </div>
  );
}

export default HomePage;
