import React from "react";
import LayoutMain from "../components/layoutmain";
import SEO from "../components/seo";
import BGImg from "../images/suf1.jpg";

//https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering//

function DigitonalPage() {
    return (
        <LayoutMain BGImage={BGImg}>
            <SEO
                title="Digitonal"
                keywords={[`digitonal`, `music`, `IDM`, `ambient`,`electronica`,`neoclassical`,`marconi union`,`Just Music`,`Toytronic`,`The Ambient Zone`,`Jon Hopkins`,`Philip Glass`,`Steve Reich`]}
                />
            
           { /*
            <div className="flex flex-col md:flex-row content-start">
                <div className="w-full p-2 mt-32 text-center bg-black rounded">
                    <p className="leading-normal text-lg md:text-3xl font-brand uppercase">
                        Set the weather fair
                    </p>
                </div>
            </div>
            */ }
        </LayoutMain>
    );
}

export default DigitonalPage;