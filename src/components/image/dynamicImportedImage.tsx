import React from "react";

const dynamicImportedImage = (props:{ animal : string}) => {
    let src = "";

    try {
        src = new URL(`./pictures/module-${props.animal}.jpg`, import.meta.url).href;
    } catch {
        src = ""; // or fallback
    }

    return <img src={src} alt={props.animal} />;
}
export default dynamicImportedImage;