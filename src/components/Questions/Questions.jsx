import React from "react";
import WaterMark from "../../images/sircle.png"
import PropTypes from 'prop-types';

export const Questions = () => {

  const QuestionsLabelInputsArray = [
    { htmlFor: "name", text: "name:", type: "text", id: "name", placeholder: "name" },
    { htmlFor: "email", text: "email:", type: "email", id: "email", placeholder: "email" },
    { htmlFor: "message", text: "message:", type: "text", id: "message", placeholder: "message" }
  ];

  const QuestionsLabelInput = (props) => {
    return (
      <>
        <label className="form__label--hidden" htmlFor={props.htmlFor}>{props.text}</label>
        <input
          className="form__input"
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          required
        />
      </>
    )
  }

  QuestionsLabelInput.propTypes = {
    htmlFor:PropTypes.string,
    text:PropTypes.string,
    type:PropTypes.string,
    id:PropTypes.string,
    placeholder:PropTypes.string,
  }

  const QuestionsForm = () => (
    <form className="form">
      {QuestionsLabelInputsArray.map((item, idx) => (
      <QuestionsLabelInput key={idx} htmlFor={item.htmlFor} text={item.text} type={item.type} id={item.id} placeholder={item.placeholder} />
      ))}

      <input
        className="form__button"
        type="submit"
        defaultValue="submit"
      />
    </form>
  )

  const QuestionsItemsArray = [
    { heading: "Our phone", text: <a href="tel:+70984545634">+7 098 454 56 34</a> },
    { heading: 'Our email', text: <a href="mailto:potrpots@gmail.com">potrpots@gmail.com</a> },
    { heading: 'Our office', text: `United Kingdom 99 Staple Hill Road, ${<br />} Bristol, BS16 5AD` }
  ];

  const QuestionsItem = (props) => {
    return (
      <li className="questions__item">
      <p className="questions__heading">{props.heading}</p>
      <p className="questions__text">{props.text}</p>
    </li>
    );
  };

  QuestionsItem.propTypes = {
    heading:PropTypes.string,
    text:PropTypes.node,
  }

  const QuestionsInfo = () => (
    <ul className="questions__info">
      {QuestionsItemsArray.map((item, idx) => (
        <QuestionsItem key={idx} heading={item.heading} text={item.text} />
      ))}
    </ul>
  )
  
  return (
    <article className="questions" id="questions">
      <div className="questions__bg"></div>
      <div className="content-container questions__content-container">
        <img className="questions__sircle" src={WaterMark} alt="img" />
        <div className="questions__wrapper">
          <h2 className="questions__title">have any questions?</h2>
          <p className="questions__subtitle">
            Here few ways to get in touch with us:
          </p>
          <h4 className="questions__form-title">Message us</h4>
          <QuestionsForm />
        </div>
        <QuestionsInfo />
      </div>
    </article>
  );
};
