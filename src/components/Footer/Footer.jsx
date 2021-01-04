import React from 'react';
import PropTypes from 'prop-types';
import Twitter from '../../images/icons/twitter.svg';
import Instagram from '../../images/icons/instarram.svg';
import Facebook from '../../images/icons/facebook.svg';

export const Footer = () => {
  const FooterLeft = () => (
    <div className="footer__left">
      <div className="footer__title">Adrress</div>
      <div className="footer__text">
        United Kingdom
        <br />
        99 Staple Hill Road,
        <br />
        Bristol, BS16 5AD{" "}
      </div>
    </div>
  );

  const FooterRight = () => (
    <div className="footer__right">
      <p className="footer__title">aBOUT uS</p>
      <p className="footer__text">Copyright © 2019</p>
    </div>
  );

  const FooterListItemsArray = [
    { href: '#home', image: Twitter },
    { href: '#home', image: Instagram },
    { href: '#home', image: Facebook },
  ];

  const FooterListItem = (props) => {
    return (
      <li className="footer__item">
        <a className="footer__link" href={props.href}>
          <img className="footer__img" src={props.imgSource} alt="img" />
        </a>
      </li>
    );
  };

  FooterListItem.propTypes = {
    href:PropTypes.string,
    imgSource:PropTypes.string,
  }

  const FooterCenteer = () => (
    <div className="footer__center">
      <ul className="footer__list">
        {/* DO NOT DO THIS LIKE THIS! NOT DRY!!!! */}
        {/* <FooterListItem href="#home" imgSource={Twitter} />
        <FooterListItem href="#home" imgSource={Instagram} />
        <FooterListItem href="#home" imgSource={Facebook} /> */}

        {/* BEST PRACTICES */}
        {FooterListItemsArray.map((item, idx) => (
          
        //   <li key={idx} className="footer__item">
        //   <a className="footer__link" href={item.href}>
        //     <img className="footer__img" src={item.image} alt="img" />
        //   </a>
        // </li>

          <FooterListItem key={idx} href={item.href} imgSource={item.image} />
        ))}
      </ul>

      <div className="footer__logo">
        <a href="#promo">potrpots</a>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      <div className="content-container footer__content-container">
        <FooterLeft />
        <FooterCenteer />
        <FooterRight />
      </div>
    </footer>
  );
};
