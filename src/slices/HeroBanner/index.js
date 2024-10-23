import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param {HeroBannerProps}
 */
const HeroBanner = ({ slice }) => {
  console.log(slice.primary);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="ui-hero-banner"
    >
      <div className="ui-hero-banner__content">
        <h1 className="ui-hero-banner__heading">{slice.primary.heading}</h1>
        <span className="ui-hero-banner__subHeading">
          {slice.primary.subheading}
        </span>
        <PrismicNextLink
          className="ui-hero-banner__cta"
          field={slice.primary.explorecta}
        />
      </div>
      <div className="ui-hero-banner__contentImage">
        <div className="ui-hero-banner__imageWrapper"></div>
        <PrismicNextImage
          className="ui-hero-banner__image"
          field={slice.primary.heroimage}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
