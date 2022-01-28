import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import { render } from "storyblok-rich-text-react-renderer";

const CallToAction = ({ blok }) => {
  console.log(blok);

  const ctaWrapperStyle = {
    backgroundImage: `url(${blok.background})`,
    marginBottom: "20px",
  };

  return (
    <div {...sbEditable(blok)} key={blok._uid}>
      <div style={ctaWrapperStyle}>
        <h2>{blok.headline}</h2>
        <h3>{blok.headline_2}</h3>
        {blok.text && <p>{blok.text}</p>}
      </div>
    </div>
  );
};

export default CallToAction;
