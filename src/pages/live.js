import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import BGImg from "../images/andy_live.jpg";
import EventCard from "../components/library/eventCard";

import e1 from "../images/live/april2020.jpg";

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
          eventImageAlt = "Ultramarine, Digitonal and Chris Coco at Rich Mix"
          eventDate = "POSTPONED"
          eventTitle = "Ultramarine, Digitonal and Chris Coco"
          eventLocation = "Rich Mix, London"
          eventCTALink = "https://www.ents24.com/london-events/rich-mix/ultramarine-digitonal/5986083"
          eventCTAText = "EVENT POSTPONED"
        />

      
      </div>
    </LayoutMain>
  );
}

export default LivePage;
