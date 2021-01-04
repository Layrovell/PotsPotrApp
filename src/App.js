import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Promo } from './components/Promo/Promo';
import { ForWhom } from './components/ForWhom/ForWhom';
import { Features } from './components/Features/Features';
import { PotrTeam } from './components/PotrTeam/PotrTeam';
import { Materials } from './components/Materials/Materials';
import { PotrSize } from './components/PotrSize/PotrSize';
import { Benefits } from './components/Benefits/Benefits';
import { Questions } from './components/Questions/Questions';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import './scripts/main.js';
import './styles/main.scss';

function App() {
  const [ isShoppingOpen, setOpen ] = useState(false);
  return (
    <>
    <Header setOpen={setOpen} />
    { isShoppingOpen && <ShoppingCart isOpen={isShoppingOpen} setOpen={setOpen} /> }
    <main className="main-content">
      <Promo />
      <ForWhom />
      <Features />
      <PotrTeam />
      <Materials />
      <PotrSize />
      <Benefits />
      <Questions />
    </main>
    <Footer />

    <a
      href="#"
      id="back-to-top"
      title="Back to top"
      className="pulse"
    >
    &uarr;
    </a>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/main.js"></script>
  </>
  );
}

export default App;
