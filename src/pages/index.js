import React from "react";

import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import RPMPhoto from "../images/andydom.jpg";
import BGImg from "../images/suf1.jpg";


function DigitonalPage() {
    return (
        <LayoutMain BGImage={BGImg}>
            <SEO
                title="Digitonal"
                keywords={[`digitonal`, `music`, `IDM`, `ambient`,`electronica`,`neoclassical`,`marconi union`,`Just Music`,`Toytronic`,`The Ambient Zone`,`Jon Hopkins`,`Philip Glass`,`Steve Reich`]}
                />
            
            <div className="flex flex-col md:flex-row">
                <div className=" leading-normal text-lg md:text-base">
                    <p className="">
                    Hello
                    </p>
                </div>
            </div>
        </LayoutMain>
    );
}

export default DigitonalPage;