import agency from "../assets/project-images/agency.png";
import countries from "../assets/project-images/countries.png";
import aurora from "../assets/project-images/aurora.jpg";
import rickmorty from "../assets/project-images/rickmorty.png";
import linkshortener from "../assets/project-images/linkshortener.png";
import cvgenerator from "../assets/project-images/CVgenerator.png";
import imagegenerator from "../assets/project-images/image-generator.png";
import fakestore from "../assets/project-images/fakestore.png";
import tailwindwebsite from "../assets/project-images/tailwindwebsite.png";
import skopje from "../assets/project-images/skopje.png";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <a
          href="https://skopje-website.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={skopje} alt="Skopje_Image" />
          <div className="project-info">
            <p className="title">Skopje Website</p>
            <p className="description">
              "This is a modern, responsive landing page built with React.js.
              It's currently in development and designed to showcase services,
              testimonials, and company information in a clean, user-friendly
              layout."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://fakeecommercewebsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fakestore} alt="FakeStore" />
          <div className="project-info">
            <p className="title">FakeStore Website</p>
            <p className="description">
              "FakeStore.co is a responsive eCommerce web application built with
              React.js. It fetches and displays products from an external API
              (fakestoreapi.com), featuring category filtering, pagination,
              dynamic routing, and search functionality."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://milanoagency.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={agency} alt="Agency" />
          <div className="project-info">
            <p className="title">Agency Website</p>
            <p className="description">
              "A responsive and interactive website built with Astro,
              JavaScript, and CSS. It showcases a clean and modern design,
              featuring dynamic content and smooth user experience. Perfect for
              displaying projects, services, or personal portfolios."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://imagegeneratorsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imagegenerator} alt="Image Generatpr" />
          <div className="project-info">
            <p className="title">Image Generator</p>
            <p className="description">
              "Image Generator is a web app that lets users search and save
              high-quality images from Unsplash. Log in to like and store your
              favorite photos in your personal collection."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://tailwindblogwebsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tailwindwebsite} alt="Tailwind Website" />
          <div className="project-info">
            <p className="title">Tailwind Blog</p>
            <p className="description">
              "This is a static landing page built with Astro.js, a modern web
              framework optimized for speed and simplicity. The page is styled
              using Tailwind CSS, making it fully responsive and visually clean
              across all devices."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://countriesranking.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={countries} alt="Countries" />
          <div className="project-info">
            <p className="title">Countries Ranking</p>
            <p className="description">
              "A feature-rich countries ranking website built with React.js,
              SCSS, and Axios. This interactive platform lets users filter and
              sort countries based on population size, area, and region,
              offering a detailed and engaging view of global rankings."
            </p>
          </div>
        </a>
      </div>

      <div className="project">
        <a
          href="https://auroraprojectwebsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={aurora} alt="Aurora" />
          <div className="project-info">
            <p className="title">Tailwind Project</p>
            <p className="description">
              "I designed and developed a responsive landing page website using
              Tailwind CSS. By leveraging Tailwind's utility-first approach, I
              efficiently styled components, ensured mobile responsiveness, and
              optimized the overall user experience.""
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://rickmortygraphqlwebsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={rickmorty} alt="Rick and Morty" />
          <div className="project-info">
            <p className="title">GraphQL Project</p>
            <p className="description">
              "Developed a frontend project with React.js, using GraphQL to
              fetch and display information about Rick and Morty characters."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://linkshortenersite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkshortener} alt="Link Shortener" />
          <div className="project-info">
            <p className="title">Link Shortener</p>
            <p className="description">
              "Built a link shortener website with React.js that integrates an
              API to generate and manage shortened URLs.."
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a
          href="https://cvgeneratorwebsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cvgenerator} alt="CVgenerator" />
          <div className="project-info">
            <p className="title">CVgenerator</p>
            <p className="description">
              "Built an interactive CV generator using React.js to practice
              state management and dynamic form handling. The project allows
              users to input, edit, and preview their CV content in real-time."
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
