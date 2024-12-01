"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Model from "./Model";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param {HeroBannerProps}
 */
const HeroBanner = ({ slice }) => {
  const headingArray = slice.primary.heading.split("");

  const animateComponents = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".animate-letter",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        }
      )
        .fromTo(
          ".animate-para",
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          }
        )
        .fromTo(
          ".animate-button",
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          }
        );
      // .fromTo(
      //   ".animate-image",
      //   {
      //     y: 10,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 1,
      //   }
      // );
    }, animateComponents);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="ui-hero-banner"
      ref={animateComponents}
    >
      <div className="ui-hero-banner__content">
        <h1 className="ui-hero-banner__heading">
          {headingArray?.map((char, i) => (
            <span
              key={i}
              className={`ui-hero-banner__headingSpan animate-letter animate-letter-${i}`}
            >
              {char}
            </span>
          ))}
        </h1>
        <span className="ui-hero-banner__subHeading animate-para">
          {slice.primary.subheading}
        </span>
        <PrismicNextLink
          className="ui-hero-banner__cta animate-button"
          field={slice.primary.explorecta}
        />
      </div>
      <div className="ui-hero-banner__imageWrapper ">
        {/* <PrismicNextImage
          className="ui-hero-banner__image animate-image"
          field={slice.primary.heroimage}
        /> */}
        <Model />
      </div>
    </section>
  );
};

export default HeroBanner;
