import React from "react";
import ForWhomImgPlant from "../../images/photos/for-whom/plant.jpg";
import ForWhomImgCactus from "../../images/photos/for-whom/cactus.jpg";
import ForWhomImgTime from "../../images/photos/for-whom/time.jpg";

export const ForWhom = () => {
  const ForWhomImgWrapperRobust = () => (
    <div className="for-whom__img-wrapper for-whom__img-wrapper--robust">
      <img
        src={ ForWhomImgPlant }
        alt="img"
        className="for-whom__img for-whom__img--robust pulse"
      />
    </div>
  );

  const ForWhomInfoRobust = () => (
    <div className="for-whom__info">
      <p className="for-whom__name">Robust</p>
      <span className="for-whom__number for-whom__number--robust">1</span>
      <h2 className="for-whom__text">
        <span>For those who value durable things</span>
      </h2>
      <p className="for-whom__descr">
        Don’t worry if you happen to knock your POTR on the floor, unlike a
        traditional ceramic pot it will take the fall in its stride.
      </p>
    </div>
  );

  const ForWhomImgWrapperBeautiful = () => (
    <div className="for-whom__img-wrapper for-whom__img-wrapper--beautiful">
      <img
        src={ ForWhomImgCactus }
        alt="img"
        className="for-whom__img for-whom__img--beautiful pulse"
      />
    </div>
  );

  const ForWhomInfoBeautiful = () => (
    <div className="for-whom__info--beautiful">
      <p className="for-whom__name--beautiful">Beautiful</p>
      <span className="for-whom__number for-whom__number--beautiful">2</span>
      <h2 className="for-whom__text">For those who love modern design</h2>
      <p className="for-whom__descr">
        We strived to achieve something that would look beautiful in your home
        while being incredibly functional and intuitive to use.
      </p>
    </div>
  );

  const ForWhomImgWrapperTime = () => (
    <div className="for-whom__img-wrapper for-whom__img-wrapper--time">
      <img
        src={ ForWhomImgTime }
        alt="img"
        className="for-whom__img for-whom__img--time pulse"
      />
    </div>
  );

  const ForWhomInfoTime = () => (
    <div className="for-whom__info">
      <p className="for-whom__name">Saves time</p>
      <span className="for-whom__number for-whom__number--time">3</span>
      <h2 className="for-whom__text for-whom__text--time">
        For those who don&apos;t have enough time to regular water indoor plants
      </h2>
      <p className="for-whom__descr">
        Water is drawn up through the cotton by the plant using tried and tested
        wicking technology. It’s particularly useful if you aren’t able to water
        them yourself on a regular basis!
      </p>
    </div>
  );

  return (
    <article className="for-whom" id="forWhom">
      <div className="link-wrapper">
        <div className="content-container for-whom__content-container">
          <h2 className="for-whom__title">For whom?</h2>

          <section className="for-whom__item for-whom__item--robust">
            <ForWhomImgWrapperRobust />
            <ForWhomInfoRobust />
          </section>

          <div className="for-whom__wrapper">
            <section className="for-whom__item for-whom__item--beautiful">
              <ForWhomImgWrapperBeautiful />
              <ForWhomInfoBeautiful />
            </section>

            <section className="for-whom__item for-whom__item--time">
              <ForWhomImgWrapperTime />
              <ForWhomInfoTime />
            </section>
          </div>
        </div>
        <a className="for-whom__link" href="#features">
          Potr pots
        </a>
      </div>
    </article>
  );
};
