import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param {AboutProps}
 */
const About = ({ slice }) => {
  return (
    <section
      className="ui-about-wrapper"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="ui-about-wrapperLhs">
        <h1 className="ui-about-Heading">{slice.primary.heading}</h1>
        <div className="ui-about-description">
          <PrismicRichText field={slice.primary.bodydescription} />
        </div>
        <div className="ui-about-actionWrapper">
          <PrismicNextLink
            className="ui-about-actionButton"
            field={slice.primary.buttonlink}
          >
            {slice.primary.buttontext}
          </PrismicNextLink>
        </div>
      </div>
      <div className="ui-about-wrapperRhs">
        <div className="ui-about-imageWrapper">
          <PrismicNextImage
            className="ui-about-image"
            field={slice.primary.profileimage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
