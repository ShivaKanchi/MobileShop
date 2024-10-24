// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface GlobalnavDocumentData {}

/**
 * GlobalNav document from Prismic
 *
 * - **API ID**: `globalnav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalnavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalnavDocumentData>,
    "globalnav",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | CustomerReviewsSlice
  | OurServicesSlice
  | FeaturedProductsSlice
  | HeroBannerSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = GlobalnavDocument | HomepageDocument;

/**
 * Default variation for CustomerReviews Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerReviewsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *CustomerReviews*
 */
type CustomerReviewsSliceVariation = CustomerReviewsSliceDefault;

/**
 * CustomerReviews Shared Slice
 *
 * - **API ID**: `customer_reviews`
 * - **Description**: CustomerReviews
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerReviewsSlice = prismic.SharedSlice<
  "customer_reviews",
  CustomerReviewsSliceVariation
>;

/**
 * Item in *FeaturedProducts → Default → Primary → FeaturedProducts*
 */
export interface FeaturedProductsSliceDefaultPrimaryFeaturedproductsItem {
  /**
   * ProductImage field in *FeaturedProducts → Default → Primary → FeaturedProducts*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.featuredproducts[].productimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  productimage: prismic.ImageField<never>;

  /**
   * ProductTitle field in *FeaturedProducts → Default → Primary → FeaturedProducts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.featuredproducts[].producttitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  producttitle: prismic.KeyTextField;

  /**
   * ProductBrand field in *FeaturedProducts → Default → Primary → FeaturedProducts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.featuredproducts[].productbrand
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  productbrand: prismic.KeyTextField;

  /**
   * ProductDescription field in *FeaturedProducts → Default → Primary → FeaturedProducts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.featuredproducts[].productdescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  productdescription: prismic.KeyTextField;

  /**
   * ProductPrice field in *FeaturedProducts → Default → Primary → FeaturedProducts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.featuredproducts[].productprice
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  productprice: prismic.KeyTextField;
}

/**
 * Primary content in *FeaturedProducts → Default → Primary*
 */
export interface FeaturedProductsSliceDefaultPrimary {
  /**
   * SectionTitle field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.sectiontitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectiontitle: prismic.KeyTextField;

  /**
   * SectionDescription field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.sectiondescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectiondescription: prismic.KeyTextField;

  /**
   * FeaturedProducts field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.featuredproducts[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  featuredproducts: prismic.GroupField<
    Simplify<FeaturedProductsSliceDefaultPrimaryFeaturedproductsItem>
  >;
}

/**
 * Default variation for FeaturedProducts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProductsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedProducts*
 */
type FeaturedProductsSliceVariation = FeaturedProductsSliceDefault;

/**
 * FeaturedProducts Shared Slice
 *
 * - **API ID**: `featured_products`
 * - **Description**: FeaturedProducts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSlice = prismic.SharedSlice<
  "featured_products",
  FeaturedProductsSliceVariation
>;

/**
 * Primary content in *HeroBanner → Default → Primary*
 */
export interface HeroBannerSliceDefaultPrimary {
  /**
   * Heading field in *HeroBanner → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *HeroBanner → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * ExploreCTA field in *HeroBanner → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.default.primary.explorecta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  explorecta: prismic.LinkField;

  /**
   * HeroImage field in *HeroBanner → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_banner.default.primary.heroimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  heroimage: prismic.ImageField<never>;
}

/**
 * Default variation for HeroBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroBannerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroBanner*
 */
type HeroBannerSliceVariation = HeroBannerSliceDefault;

/**
 * HeroBanner Shared Slice
 *
 * - **API ID**: `hero_banner`
 * - **Description**: HeroBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBannerSlice = prismic.SharedSlice<
  "hero_banner",
  HeroBannerSliceVariation
>;

/**
 * Item in *OurServices → Default → Primary → Services*
 */
export interface OurServicesSliceDefaultPrimaryServicesItem {
  /**
   * ServiceTitle field in *OurServices → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_services.default.primary.services[].servicetitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  servicetitle: prismic.KeyTextField;

  /**
   * ServiceDescription field in *OurServices → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_services.default.primary.services[].servicedescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  servicedescription: prismic.KeyTextField;
}

/**
 * Primary content in *OurServices → Default → Primary*
 */
export interface OurServicesSliceDefaultPrimary {
  /**
   * SectionTitle field in *OurServices → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_services.default.primary.sectiontitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectiontitle: prismic.KeyTextField;

  /**
   * SectionDescription field in *OurServices → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_services.default.primary.sectiondescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectiondescription: prismic.KeyTextField;

  /**
   * Services field in *OurServices → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: our_services.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<OurServicesSliceDefaultPrimaryServicesItem>
  >;

  /**
   * serviceCTA field in *OurServices → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: our_services.default.primary.servicecta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  servicecta: prismic.LinkField;
}

/**
 * Default variation for OurServices Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OurServicesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *OurServices*
 */
type OurServicesSliceVariation = OurServicesSliceDefault;

/**
 * OurServices Shared Slice
 *
 * - **API ID**: `our_services`
 * - **Description**: OurServices
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurServicesSlice = prismic.SharedSlice<
  "our_services",
  OurServicesSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalnavDocument,
      GlobalnavDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      CustomerReviewsSlice,
      CustomerReviewsSliceVariation,
      CustomerReviewsSliceDefault,
      FeaturedProductsSlice,
      FeaturedProductsSliceDefaultPrimaryFeaturedproductsItem,
      FeaturedProductsSliceDefaultPrimary,
      FeaturedProductsSliceVariation,
      FeaturedProductsSliceDefault,
      HeroBannerSlice,
      HeroBannerSliceDefaultPrimary,
      HeroBannerSliceVariation,
      HeroBannerSliceDefault,
      OurServicesSlice,
      OurServicesSliceDefaultPrimaryServicesItem,
      OurServicesSliceDefaultPrimary,
      OurServicesSliceVariation,
      OurServicesSliceDefault,
    };
  }
}
