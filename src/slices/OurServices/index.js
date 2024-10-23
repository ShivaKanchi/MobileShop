/**
 * @typedef {import("@prismicio/client").Content.OurServicesSlice} OurServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurServicesSlice>} OurServicesProps
 * @param {OurServicesProps}
 */
const OurServices = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for our_services (variation: {slice.variation})
      Slices
    </section>
  );
};

export default OurServices;
