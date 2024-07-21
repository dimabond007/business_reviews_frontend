import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="max-w-3xl w-full mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">ReviewU</h3>
            <p className="text-gray-400">
              © 2024 ReviewU. All rights reserved.
            </p>
          </div>
          <div className="space-x-4">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/" className="hover:underline">
              Home
            </a>
          </div>
          <div className="flex space-x-8">
            <div className="text-center">
              <a
                href="https://github.com/Damashdam"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <div className="mt-2 text-gray-400">Daniel's Github</div>
            </div>
            <div className="text-center">
              <a
                href="https://github.com/Omerkugel12"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <div className="mt-2 text-gray-400">Omer's Github</div>
            </div>
            <div className="text-center">
              <a
                href="https://github.com/dimabond007"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <div className="mt-2 text-gray-400">Dima's Github</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
