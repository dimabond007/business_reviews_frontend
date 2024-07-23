import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ReviewU</h3>
            <p className="text-gray-400">© 2024 ReviewU. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
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
