import Daniel from '../images/Daniel.jpeg'
import Omer from '../images/Omer.jpeg'
import Dima from '../images/Dima.jpeg'


function AboutPage() {
  const teamMembers = [
    {
      name: 'Dima',
      role: 'Full Stack Developer',
      bio: 'Dima is a seasoned entrepreneur with a passion for innovation and technology. With years of experience in the tech industry, he brings invaluable insights and leadership to our team.',
      imageUrl: Dima, // Replace with Dima's image URL
    },
    {
      name: 'Omer',
      role: 'Full Stack Developer',
      bio: 'Omer is a full-stack developer with a knack for solving complex problems. His expertise in both frontend and backend development helps drive our projects forward with efficiency and precision.',
      imageUrl: Omer, // Replace with Omer's image URL
    },
    {
      name: 'Daniel',
      role: 'Full Stack Developer',
      bio: 'Daniel is a creative designer specializing in user experience and interface design. His eye for detail and dedication to creating intuitive, engaging interfaces ensure that our users have a seamless experience.',
      imageUrl: Daniel, // Replace with Daniel's image URL
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* About Us Header */}
      <section className="bg-blue-800 py-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Meet the dedicated team behind ReviewU. We are passionate about bringing you the best experience possible.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-gray-800">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-teal-500 object-cover"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-lg font-medium mb-4 text-teal-600">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
