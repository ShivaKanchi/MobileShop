/**
 * @typedef {import("@prismicio/client").Content.FeaturedProductsSlice} FeaturedProductsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedProductsSlice>} FeaturedProductsProps
 * @param {FeaturedProductsProps}
 */
const FeaturedProducts = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for featured_products (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturedProducts;
