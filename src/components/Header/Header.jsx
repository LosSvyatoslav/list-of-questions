import yeaHubLogo from "../../logos and images/logo.svg";
import logoTitle from "../../logos and images/logo title.svg";
import arrowIcon from "../../logos and images/Alt Arrow Down.svg";
import burgerMenuIcon from "../../logos and images/Hamburger Menu.svg";
import "./Header.css";
import { useState } from "react";

const navigation = ["База вопросов", "Тренажёр", "Материалы", "Навыки(hh)"];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__left-side">
          <div className="header__logo">
            <img src={yeaHubLogo} className="logo" alt="YeaHub logo" />
            <img src={logoTitle} className="logo__title" alt="YeaHub logo title" />
          </div>

          <div className="mobile">
            <div className="mobile__navigation">
              <button
                className="mobile__navigation-toggle button"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <span className="mobile__title">Подготовка</span>
               {!navOpen  ? <img
                  src={arrowIcon}
                  alt="Arrow icon"
                  className="mobile__icon"
                /> : 
                 <img
                 style={{transform: "rotate(180deg)"}}
                  src={arrowIcon}
                  alt="Arrow icon"
                  className="mobile__icon"
                />}
              </button>
            </div>

            {navOpen && (
              <nav className="mobile__menu">
                <ul className="mobile__list">
                  {navigation.map((navName, i) => (
                    <li key={i} className="mobile__item">
                      <a key={i} href="#" className="mobile__link">
                        {" "}
                        {navName}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <nav className="header__navigaton">
            <ul className="header__list">
              {navigation.map((navName, i) => (
                <li key={i} className="header__item">
                  <a key={i} className="header__link" href="#">
                    {navName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button className="burger" onClick={() => setBurgerOpen((prev) => !prev)}>
          <img src={burgerMenuIcon} alt="Burger-menu icon" />
          {burgerOpen && (
            <div className="burger__buttons">
              <button className="button burger__button--enter">Вход</button>
              <button className="button burger__button--registration">
                Регистрация
              </button>
            </div>
          )}
        </button>
        <div className="header__buttons">
          <button className="button button--enter">Вход</button>
          <button className="button button--registration">Регистрация</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
