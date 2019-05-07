import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";



function LayoutMain({ children, BGImage }) {
  console.log(BGImage);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQueryMain {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans pt-6 min-h-screen text-grey-lightest bg-black bg-cover" style={{backgroundImage:`url(${BGImage})`}}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>
        
        </div>
      )}
    />
  );
}

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutMain;
