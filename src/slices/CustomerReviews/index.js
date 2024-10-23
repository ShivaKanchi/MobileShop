/**
 * @typedef {import("@prismicio/client").Content.CustomerReviewsSlice} CustomerReviewsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomerReviewsSlice>} CustomerReviewsProps
 * @param {CustomerReviewsProps}
 */
const CustomerReviews = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for customer_reviews (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CustomerReviews;
