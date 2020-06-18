import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import BGImg from "../images/andy_live.jpg";
import EventCard from "../components/library/eventCard";

import e1 from "../images/live/april2020.jpg";
import e2 from "../images/live/littlechill.jpg";

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

      <div className="flex flex-wrap items-top">

      <EventCard 
        
        eventImage = {e2}
        eventImageAlt = "The Little Chill Festival"
        eventDate = "19th-21st June"
        eventTitle = "An exclusive presentation of a filmed live performance of material from our new album. Please click the button for full lineup and schedule info."
        eventLocation = "Streamed online"
        eventCTALink = "https://www.campfire.world/little-chill"
        eventCTAText = "Info and full lineup"
      />
        
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
