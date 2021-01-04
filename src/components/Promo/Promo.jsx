import React from "react";
import PromoImg from "../../images/promo.jpg";

export const Promo = () => {
  const PromoTitle = () => (
    <h1 className="promo__title">
      <strong className="transparent">
        POTR ~Eco,
        <br />
        self-
      </strong>
      watering,
      <br />
      origami<strong className="transparent">plant</strong>
      <br />
      pots
    </h1>
  );

  const PromoOffer = () => (
    <div className="promo__offer">
      <span className="promo__price">$7,50</span>
      <p className="promo__text">
        Get the second order
        <br />
        in half price
      </p>
    </div>
  );

  const PromoBtn = () => (
    <button
    type="button"
    className="btn promo__btn bubbly-button"
    onClick={() => (window.location.hash = "#features")}
  >
    Buy now
  </button>
  )

  return (
    <article className="promo" id="promo">
      <div className="promo__bg"></div>
      <div className="link-wrapper">
        <div className="content-container promo__content-container">
          <section className="promo__description">
            <PromoTitle />
            <PromoOffer />
            <a className="promo__next" href="#forWhom">
              More about POTR POTS
            </a>
            <PromoBtn />
          </section>
          <div className="promo__img-wrapper">
            <img className="promo__img pulse" src={ PromoImg } alt="img" />
          </div>
        </div>
        <a className="promo__link" href="#promo">
          Potr pots
        </a>
      </div>
    </article>
  );
};
