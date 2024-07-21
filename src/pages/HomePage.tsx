import BgImage from '../images/BackGroundImage.jpeg';


function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-blue-500 py-20 text-white"
        style={{ backgroundImage: `url(${BgImage} )` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">YOUR NEW HOME FOR FUNCTIONAL FITNESS</h1>
            <p className="text-lg mb-8">
              A place for everyone to find their true strength and discover what it means to be a part of a community.
              All ages, backgrounds and abilities are welcomed and treated as one of our own. Everyone has what it takes
              to be a #riseathlete.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/join-us" className="bg-white text-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Join Us</a>
              <a href="/class-types" className="bg-white text-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg transition duration-300 ease-in-out">See Class Types</a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose ReviewU?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Reviews</h3>
                <p className="text-lg mb-6">Read and write detailed reviews of businesses you love.</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13H7v-2h10v2zm0-4H7V9h10v2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Updates</h3>
                <p className="text-lg mb-6">Stay up-to-date with the latest reviews and ratings.</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Verified Businesses</h3>
                <p className="text-lg mb-6">Get reliable information from verified businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">"ReviewU has transformed the way I find new businesses. The reviews are thorough and the platform is user-friendly."</p>
                <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-500">Entrepreneur</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">"I love being able to read real reviews from other users. It makes my decision-making process so much easier!"</p>
                <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-500">Freelancer</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-6">"A must-have app for anyone who wants to stay informed about local businesses. Highly recommend ReviewU!"</p>
                <h3 className="text-2xl font-bold mb-2">Sam Wilson</h3>
                <p className="text-gray-500">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Join thousands of users already sharing their experiences on ReviewU!</p>
        <a href="/plans" className="bg-white text-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg transition duration-300 ease-in-out">Sign Up Now</a>
      </section>

      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">ReviewU</h3>
              <p className="text-gray-400">© 2024 ReviewU. All rights reserved.</p>
            </div>
            <div className="space-x-4">
              <a href="/about" className="hover:underline">About</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
