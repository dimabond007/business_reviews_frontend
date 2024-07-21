import Daniel from '../images/Daniel.jpeg'
import Omer from '../images/Omer.jpeg'
import Dima from '../images/Dima.jpeg'

function AboutPage() {
  const teamMembers = [
    {
      name: 'Dima',
      role: 'Full Stack Developer',
      bio: 'Dima is a seasoned entrepreneur with a passion for innovation and technology. With years of experience in the tech industry, he brings invaluable insights and leadership to our team.',
      imageUrl: Dima,
    },
    {
      name: 'Omer',
      role: 'Full Stack Developer',
      bio: 'Omer is a full-stack developer with a knack for solving complex problems. His expertise in both frontend and backend development helps drive our projects forward with efficiency and precision.',
      imageUrl: Omer,
    },
    {
      name: 'Daniel',
      role: 'Full Stack Developer',
      bio: 'Daniel is a creative designer specializing in user experience and interface design. His eye for detail and dedication to creating intuitive, engaging interfaces ensure that our users have a seamless experience.',
      imageUrl: Daniel,
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* About Us Header */}

      <header className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-6 px-8 shadow-md">
        <h1 className="text-4xl  text-center font-extrabold">About Us</h1>
      </header>



      {/* Team Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-gray-800 dark:text-gray-200">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-teal-500 dark:border-teal-600 object-cover"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{member.name}</h3>
                  <p className="text-lg font-medium mb-4 text-teal-600 dark:text-teal-400">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
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
