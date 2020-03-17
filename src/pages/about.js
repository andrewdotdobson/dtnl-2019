import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import RPMPhoto from "../images/andydom.jpg";
import BGImg from "../images/suf1.jpg";

function AboutPage() {
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

      <div className="flex flex-col md:flex-row items-top bg-black p-4 rounded">
        <div className="md:w-1/2 leading-normal text-lg md:text-base ">
          <p className="">
            Digitonal are a London, UK based band who have been working at the
            intersection of ambient electronica, melodic IDM and neo-classical
            minimalism since 1997.
          </p>
          <p className="pt-2">
            They have recorded for Toytronic, Just Music, The Ambient Zone, Neo
            Ouija and Cactus Island and have been called upon to remix the likes
            of Max Richter, Kelli Ali, B12 and labelmates Marconi Union.
          </p>
          <p className="pt-2">
            They have played live across the UK, Europe and the US and have been
            critically acclaimed for their expressive performances of great
            range and beauty.
          </p>
          <p className="pt-2">
            Their fifth studio album is currently nearing completion and will be
            released later in 2019.
          </p>
        </div>
        <div className="w-full pt-4 md:pt-0 md:w-1/2">
          <div className="embed-responsive aspect-ratio-16/9">
            <iframe
              className="embed-responsive-item"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MvhifV3pcxQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div className="pt-2">For M is Music - A Digitonal sampler</div>
        </div>
      </div>


      <div className="flex flex-wrap items-top mt-5">
      <div className="w-full">
        <img src={RPMPhoto} alt="Dom and Andy at 22rpm" />
      </div>
        <div className="w-full leading-normal text-lg md:text-base">
          <p className="font-sans my-5 leading-normal pl-4 text-justify border-l-4 border-orange">
          
            Digitonal are currently multi-instrumentalist and composer Andrew Dobson and producer and performer Dom Graveson. 
            They have released four studio albums and appeared on a multitude of compilations, single releases and remixes. You can find a full list of their work at <a className="no-underline text-orange hover:text-white" href="https://www.discogs.com/artist/3600-Digitonal">Discogs</a>.  Bookings and any other enquiries should be made directly to the band via the email or social links above. 
          
          </p>
        </div>
      </div>

    </LayoutMain>
  );
}

export default AboutPage;
