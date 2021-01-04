import React from "react";
import ImgOne from "../../images/photos/features/step-1.jpg";
import ImgTwo from "../../images/photos/features/step-2.jpg";
import ImgThree from "../../images/photos/features/step-3.jpg";
import PropTypes from "prop-types";

export const Features = () => {
const FeaturesImgArray = [
  { image: ImgOne, text: 'Flat pack postage', descr: 'The pots will be shipped flat packed so they can be slipped through your letter box' },
  { image: ImgTwo, text: 'Easy assembly', descr: 'POTR Pots are super easy (and super satisfying) to assemble using the quick draw cotton cord' },
  { image: ImgThree, text: 'Self-watering', descr: 'Simply add water into the pot — if your plant is thirsty it will automatically start drinking the water through the cotton cord. Magic!' }
];

const FeaturesImgItem = (props) => {
  return (
    <div className="features__step">
    <div className="features__img-wrapper">
      <img src={props.imgSource} alt="img" className="features__img" />
    </div>
    <div className="features__text">{props.text}</div>
    <div className="features__descr">{props.descr}</div>
  </div>
  )
}

FeaturesImgItem.propTypes = {
  // img:PropTypes.string,
  text:PropTypes.string,
  descr:PropTypes.string
}

const FeaturesImgList = () => (
  <div className="features__guide">
  {FeaturesImgArray.map((el, idx) => (
  <FeaturesImgItem key={idx} imgSource={el.image} text={el.text} descr={el.descr} />
))}

  </div>
)

  return (
    <article className="features" id="features">
      <div className="content-container features__content-container">
        <h2 className="features__title">
          POTR Pots<strong className="transparent">Features</strong>
        </h2>
        <FeaturesImgList />
      </div>
    </article>
  );
};
