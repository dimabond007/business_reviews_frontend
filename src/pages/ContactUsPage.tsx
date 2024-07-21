function ContactUsPage() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Contact Us Header */}

      <header className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-6 px-8 shadow-md">
        <h1 className="text-4xl  font-extrabold text-center">Contact Us</h1>
      </header>



      {/* Contact Form Section */}
      <section className="py-16 dark:bg-primary text-card-foreground">
        <div className="container  mx-auto px-4">
          <div className="bg-card dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-muted-foreground text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-muted-foreground text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-muted-foreground text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary py-2 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-card text-card-foreground">
        <div className="container  mx-auto px-4">
          <div className="text-center  max-w-3xl mx-auto">
            <h2 className="text-3xl  font-semibold mb-6">Our Contact Information</h2>
            <p className="text-lg  mb-6">
              You can also reach us through the following channels:
            </p>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
              <div className="flex flex-col dark:bg-blue-800 items-center p-4 bg-card rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-card-foreground">support@reviewu.com</p>
              </div>
              <div className="flex flex-col items-center dark:bg-blue-800 p-4 bg-card rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-card-foreground">(123) 456-7890</p>
              </div>
              <div className="flex flex-col items-center dark:bg-blue-800 p-4 bg-card rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-card-foreground">123 Business Rd, City, State, ZIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
