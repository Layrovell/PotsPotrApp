import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cart from '../../images/icons/cart.svg';

export const Header = (props) => {
  const [activeLink, setActiveLink] = useState('#features');
  const HeaderLogo = () => (
    <a className="header__logo" href="#promo">
      POTR POTS
    </a>
  );

  const HeaderNavListItemArray = [
    { href: "#features", linkName: "Features" },
    { href: "#POTRteam", linkName: "About us" },
    { href: "#materials", linkName: "Materials" },
    { href: "#questions", linkName: "Message us" },
  ];

  const HeaderNavListItem = (props) => {
    return (
      <li className="nav__item">
        <a className={`nav__link nav__link${activeLink === props.href ? '--is-active' : ''}`} 
           onClick={(event) => {
            console.log(event)
            setActiveLink(props.href)
           }} href={props.href}>
          {props.linkName}
        </a>
      </li>
    );
  };

  HeaderNavListItem.propTypes = {
    href: PropTypes.string,
    linkName: PropTypes.string,
  };

  const NavList = () => (
    <nav>
      <ul className="nav__list">
        {HeaderNavListItemArray.map((el, idx) => (
          <HeaderNavListItem key={idx} href={el.href} linkName={el.linkName} />
        ))}
      </ul>
    </nav>
  );

  const HeaderBurgerListItemArray = [
    { href: '#shop', linkName: 'Basket' },
    { href: '#contact', linkName: 'Features' },
    { href: '#materials', linkName: 'Materials' },
    { href: '#about', linkName: 'About us' },
    { href: '#questions', linkName: 'Message us' },
  ];

  const HeaderBurgerListItem = (props) => {
    return (
      <li className="burger__item">
      <a className="burger__link" href={props.href}>
        {props.linkName}
        {props.linkName === 'Basket' ? (
          <span className="burger__link--count">0</span>
        ) : null}
      </a>
    </li>
    )
  }

  HeaderBurgerListItem.propTypes = {
    href:PropTypes.string,
    linkName:PropTypes.string,
  }

  const NavBurger = () => (
    <>
      <input type="checkbox" id="toggler" className="header__toggler" />
      <label htmlFor="toggler" className="header__label"></label>
      <nav className="burger">
        <ul className="burger__list">
          {/* <li className="burger__item">
            <a className="burger__link" href="#shop">
              Basket
              <span className="burger__link--count">0</span>
            </a>
          </li> */}
          {HeaderBurgerListItemArray.map((el, idx) => (
            <HeaderBurgerListItem key={idx} href={el.href} linkName={el.linkName} />
          ))}
        </ul>
      </nav>
    </>
  );

  const HeaderCart = () => (
    <a className="header__cart" href="#POTRteam" onClick={() => props.setOpen(true)}>
      <img src={ Cart } alt="cart"/>
    </a>
  );

  return (
    <header className="header">
      <div className="content-container header__content-container">
        <HeaderLogo />
        <NavList />
        <NavBurger />
        <HeaderCart />
      </div>
    </header>
  );
};
