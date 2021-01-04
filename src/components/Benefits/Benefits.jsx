import React from "react";
import BenefitsImg from "../../images/benefits.png";
import PropTypes from "prop-types";

export const Benefits = () => {
  const BenefitsPhotos = () => (
    <div className="benefits__photos">
    <img src={BenefitsImg} alt="img" className="benefits__img" />
  </div>
  )

  const BenefitsListItemsArray = [
    { title: "Easy assembly", text: "Pull the draw string to assemble!" },
    { title: "Flat pack postage", text: "POTR pots arrive flat packed in an envelope!" },
    { title: "Self-watering", text: "Add water to POTR and watch your plant drink!" },
  ];

  const BenefitsListItem = (props) => {
    return (
      <li className="benefits__item">
        <div className="benefits__title">{props.title}</div>
        <div className="benefits__text">{props.text}</div>
      </li>
    );
  };

  BenefitsListItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
  };

  const BenefitsInfo = () => (
      <ul className="benefits__items">
        {BenefitsListItemsArray.map((item, idx) => (
          <BenefitsListItem key={idx} title={item.title} text={item.text} />
        ))}
      </ul>
  );

  return (
    <article className="benefits" id="benefits">
      <div className="content-container benefits__content-container">
      <BenefitsPhotos />
        <div className="benefits__info">
          <BenefitsInfo />
        
          <div className="benefits__wrapper">
            <button className="benefits__btn btn" onClick={() => (window.location.hash = "#features")}>Buy now</button>

            <div className="benefits__sales">
              <h2 className="benefits__sales-title">5000% off</h2>
              <h3 className="benefits__sales-proposal">Get the second order in half price</h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
