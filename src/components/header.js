import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({siteTitle}) {

  const [isExpanded, toggleExpansion] = useState(true);

  return (
    <nav className="">
      <div className="flex flex-wrap items-center justify-between max-w-3xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <span className="font-hairline font-serif text-5xl">Digitonal</span>
        </Link>

       

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full`}
        >
          <div className=" text-3xl md:text-3xl font-hairline font-serif">

          <Link to="/about" className=" block mt-4 mr-6 no-underline text-white hover:text-orange">
          
          <span className="">About</span>
        </Link>

        <Link to="/live" className="block mt-4 mr-6 no-underline text-white hover:text-orange">
          
          <span className="">Live</span>
        </Link>
            
            <a
              href="https://soundcloud.com/digitonal"
              className="block mt-4 mr-6 no-underline text-white hover:text-orange"
             >
              Soundcloud
            </a>

            <a
              href="https://digitonal.bandcamp.com/"
              className="block mt-4 mr-6 no-underline text-white hover:text-orange"
            >
              Bandcamp
            </a>

            <a
              href="https://open.spotify.com/artist/5IRw6qWz0NFImXO3hNOyai?si=RPBNhB1vQGW96csWb-ZKNg"
              className="block mt-4 no-underline text-white hover:text-orange"
            >
              Spotify
            </a>

            <a
              href="https://www.twitter.com/digitonal"
              className="block mt-4 no-underline text-white hover:text-orange"
            >
              Twitter
            </a>

            <a
              href="mailto:admin@digitonal.com"
              className="block mt-4 no-underline text-white hover:text-orange"
            >
              Email and Bookings
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
