import React from "react";
import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import BGImg from "../images/devon.jpg";

//https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering//

function DigitonalPage() {
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

      {/*
            <div className="flex flex-col md:flex-row content-start">
                <div className="w-full p-2 mt-32 text-center bg-black rounded">
                    <p className="leading-normal text-lg md:text-3xl font-brand uppercase">
                        Set the weather fair
                    </p>
                </div>
            </div>
            */}

      <div className="flex md:flex-row items-top">
        <div className="md:w-2/3 leading-normal text-lg md:text-base">
          <p className="font-sans my-32 leading-normal pl-4 text-justify border-l-4 border-orange">
            &quot;
            <em>
              While the rest of the world spent the naughties lurching from one
              musical fad to the next, Digitonal quietly created some of the
              most beautifully constructed art of the decade.
            </em>
            &quot; - MusicOHM review of Be Still my Bleeping Heart
          </p>
        </div>
      </div>
    </LayoutMain>
  );
}

export default DigitonalPage;
