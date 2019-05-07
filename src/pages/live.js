import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import BGImg from "../images/andy_live.jpg";

function LivePage() {
  return (
    <LayoutMain BGImage={BGImg}>
      <SEO
        title="Digitonal"
        keywords={[
          `digitonal`,
          `music`,
          `IDM`,
          `ambient`,
          `electronica`,
          `neoclassical`,
          `marconi union`,
          `Just Music`,
          `Toytronic`,
          `The Ambient Zone`,
          `Jon Hopkins`,
          `Philip Glass`,
          `Steve Reich`
        ]}
      />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-lightest">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">
                27th July 2019
              </div>
              <p className="text-grey-darker text-base">
                Chilled in a Field Festival
                <br />
                East Sussex, UK 
              </p>
            </div>
            <div className="px-6 py-3 pb-6">
            <a className="bg-transparent no-underline hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" href="http://www.chilledinafieldfestival.co.uk/">
              Get Tickets
            </a>
              
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
}

export default LivePage;
