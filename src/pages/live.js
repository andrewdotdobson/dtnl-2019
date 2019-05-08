import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import BGImg from "../images/andy_live.jpg";
import EventCard from "../components/library/eventCard";

import e1 from "../images/live/ciaf.jpg";

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

      <div className="flex flex-wrap items-center">
        
        <EventCard 
        
          eventImage = {e1}
          eventImageAlt = "Chilled in a Field"
          eventDate = "27th July 2019"
          eventTitle = "Chilled in a Field"
          eventLocation = "East Sussex, UK"
          eventCTALink = "http://www.chilledinafieldfestival.co.uk/"
          eventCTAText = "Get Tickets"
        />

      
      </div>
    </LayoutMain>
  );
}

export default LivePage;
