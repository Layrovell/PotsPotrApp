import React from "react";
import PotrSizeImg from "../../images/photos/potr-size/potr-size.jpg";

export const PotrSize = () => {
  const PotrSizeFirstBlock = () => (
    <div className="pots-size__first-block">
      <p className="potr-size__ftext">
        Pre potted plants come in fairly would standard sized pots, and can be
        classNameified into one of two categories:
      </p>
    </div>
  );

  const PotrSizeRight = () => (
    <div className="potr-size__right">
      <p className="potr-size__subtitle">large</p>
      <p className="potr-size__ftext">
        Large POTR Pot = <strong>14cm diameter</strong> (1.5 litre) house plant
        pot or less
      </p>
      <p className="potr-size__subtitle potr-size__subtitle--small">Small</p>
      <p className="potr-size__ftext">
        Small POTR Pot = <strong>10cm diameter</strong> (0.49 litre) house plant
        pot or less
      </p>
    </div>
  );

  const PotrSizeImgWrapper = () => (
    <div className="potr-size__img-wrapper">
      <img src={PotrSizeImg} alt="img" className="potr-size__img" />
    </div>
  );

  return (
    <article className="potr-size" id="POTRsize">
      <div className="link-wrapper">
        <div className="content-container potr-size__content-container">
          <h2 className="potr-size__title">
            Which size POTR for my house plant ?
          </h2>
          <div className="potr-size__wrapper">
            <div className="potr-size__info">
              <div className="potr-size__first">
                <PotrSizeFirstBlock />
                <PotrSizeRight />
              </div>
              <p className="potr-size__second">
                POTR Pots have a little bit of give around the top rim so can
                fit slightly larger
                <br />
                sizes than the recommended sizes stated above if necessary.
              </p>
            </div>
            <PotrSizeImgWrapper />
          </div>
        </div>
        <a className="potr-size__link" href="#benefits">
          POTR Pots Features
        </a>
      </div>
    </article>
  );
};
