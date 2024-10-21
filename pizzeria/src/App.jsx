import { useState } from 'react'
import './App.css'
import Pizza from "./Pizza.jsx";

const margheritaZdj = <img src="src/margherita.jpg" />;
const capriciosaZdj = <img src="src/capriciosa.jpg" />;
const parmaZdj = <img src="src/parma.jpg" />;
const decoroZdj = <img src="src/decoro.jpg" />;
const napoletanaZdj = <img src="src/napoletana.jpg" />;

const menu = [
    {nazwa: <h1>Margherita</h1>, zdjecie: margheritaZdj, wielkosc: <p><b>42 cm</b></p>, opis: <p><i>ciasto, sos pomidorowy, ser, oregano</i></p> },
    {nazwa: <h1>Capriciosa</h1>, zdjecie: capriciosaZdj, wielkosc: <p><b>42 cm</b></p>, opis: <p><i>ciasto, sos pomidorowy, ser, szynka, pieczarki, oregano</i></p> },
    {nazwa: <h1>Parma</h1>, zdjecie: parmaZdj, wielkosc: <p><b>42 cm</b></p>, opis: <p><i>ciasto, sos pomidorowy, ser mozzarella, szynka dojrzewaj¹ca, bazylia œwie¿a, oregano</i></p> },
    {nazwa: <h1>Decoro</h1>, zdjecie: decoroZdj, wielkosc: <p><b>42 cm</b></p>, opis: <p><i>ciasto, sos pomidorowy, ser, szynka, pieczarki, papryka konserwowa, czosnek, oregano</i></p> },
    {nazwa: <h1>Napoletana</h1>, zdjecie: napoletanaZdj, wielkosc: <p><b>42 cm</b></p>, opis: <p><i>ciasto, sos pomidorowy, ser, salami, oliwki zielone, papryczki jalapenos, oregano</i></p> }
];
const App = () => (
    <div className="app">
        {menu.map((d) => <Pizza key={d.nazwa} nazwa={d} />)}
    </div>
);

export default App
