function ContactUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Us Header */}
      <section className="bg-blue-800 py-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg mb-6">
          We're here to assist you. Reach out with any questions or feedback, and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Contact Information</h2>
            <p className="text-lg mb-6">
              You can also reach us through the following channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-800">support@reviewu.com</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-800">(123) 456-7890</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-800">123 Business Rd, City, State, ZIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
