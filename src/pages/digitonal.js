import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import RPMPhoto from "../images/andydom.jpg";
import BGImg from "../images/andy_uc3.jpg";


function DigitonalPage() {
    return (
        <LayoutMain BGImage={BGImg}>
            <SEO
                title="Digitonal"
                keywords={[`digitonal`, `music`, `IDM`, `ambient`,`electronica`,`neoclassical`,`marconi union`,`Just Music`,`Toytronic`,`The Ambient Zone`,`Jon Hopkins`,`Philip Glass`,`Steve Reich`]}
                />
            
            <div className="flex flex-col md:flex-row items-center mb-8">

                <div className="w-full">

                    
                    <img
                        src={RPMPhoto}
                        className="block mx-auto w-full"
                        alt="Cat and human sitting on a couch"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">

                <div className="md:w-2/3 leading-normal text-lg md:text-base  pr-4">
                    <p className="">
                    Digitonal are a London, UK based band who have been working at the intersection of ambient electronica, melodic IDM and neo-classical minimalism since 1997. 
                    </p><p className="pt-2">
                    They have recorded for Toytronic, Just Music, The Ambient Zone, Neo Ouija and Cactus Island and have been called upon to remix the likes of Max Richter, Kelli Ali, B12 and labelmates Marconi Union. 
                    </p><p className="pt-2">
                    They have played live across the UK, Europe and the US and have been critically acclaimed for their expressive performances of great range and beauty.
                    </p><p className="pt-2">
                    Their fifth studio album is currently nearing completion and will be released later in 2019.
                    </p>
                    </div>
                    <div className="md:w-1/3 leading-normal text-lg md:text-base">
                    <p className="ont-sans my-16 leading-normal pl-4 text-justify text-lightest border-l-4 border-orange">
                   &quot;<em>While the rest of the world spent the naughties lurching from one musical fad to the next, Digitonal quietly created some of the most beautifully constructed art of the decade.</em>&quot; - MusicOHM review of Be Still my Bleeping Heart
                    </p>
                </div>
            </div>
        </LayoutMain>
    );
}

export default DigitonalPage;