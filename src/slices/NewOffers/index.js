/**
 * @typedef {import("@prismicio/client").Content.NewOffersSlice} NewOffersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewOffersSlice>} NewOffersProps
 * @param {NewOffersProps}
 */
const NewOffers = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for new_offers (variation: {slice.variation}) Slices
    </section>
  );
};

export default NewOffers;
