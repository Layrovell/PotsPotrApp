import React from "react";
import PropTypes from 'prop-types';

export const Materials = () => {
  const MaterialInfo = () => (
    <div className="materials__info">
    <p className="materials__subtitle">Environmentally friendly</p>
    <p className="materials__subtext">
      All materials used in our pots are made from{" "}
      <strong>100% recycled materials</strong> and are{" "}
      <strong>100% recyclable at the end of life</strong> (should you
      ever choose to get rid of your POTR!). All materials have been
      sourced from within Europe to reduce our carbon footprint when
      transporting the raw materials, and all manufacturing is carried
      out in the UK.
    </p>
  </div>
  )

  const MaterialsItemsArray = [
    { number: 1, text: 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water.'},
    { number: 2, text: 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water.'},
    { number: 3, text: 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water.'},
    { text: 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water.'},
    { text: 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water.'}
  ];

  const MaterialsItem = (props) => {
    return (
      <li className={`materials__item materials__item--${props.number}`}>
      <div className="materials__btn"></div>
      <p className="materials__text">{props.text}</p>
    </li>
    )
  }

  MaterialsItem.propTypes = {
    number:PropTypes.number,
    text:PropTypes.string,
  }

  const MaterialsIcons = () => (
    <ul className="materials__box">
      {MaterialsItemsArray.map((item, idx) => (
        <MaterialsItem key={idx} number={idx+1} text={item.text} />
      ))}
    </ul>
  )

  return (
    <article className="materials" id="materials">
      <div className="materials__bg">
        <div className="content-container materials__content-container">
          <h2 className="materials__title">
            Materials and
            <br />
            Features
          </h2>
        <MaterialInfo />
        </div>
      <MaterialsIcons />
      </div>
    </article>
  );
};
