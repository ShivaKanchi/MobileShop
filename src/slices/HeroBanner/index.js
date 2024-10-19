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
    >
      <h1>{slice.primary.heading}</h1>
      <span>{slice.primary.subheading}</span>
      <PrismicNextLink field={slice.primary.explorecta} />
      <PrismicNextImage field={slice.primary.heroimage} />
    </section>
  );
};

export default HeroBanner;
