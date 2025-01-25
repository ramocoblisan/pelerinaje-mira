import React from 'react';
import styles from './Cards.module.css';
import CardComp from '../Card/Card';
import medjugorje1 from '../../images/medjugorje1.png';
import medjugorje2 from '../../images/medjugorje2.png';
import medjugorje3 from '../../images/medjugorje3.png';
import medjugorje4 from '../../images/medjugorje4.png';
import medjugorje5 from '../../images/medjugorje5.png';
import krakow from '../../images/krakow.png';

const cardData = [
  {
    title: "Medjugorje",
    image: medjugorje1,
    period: '21.04-27.04',
    details: ["Vizită la locurile sfinte", "Participare la liturghii", "Excursie la Podbrdo"],
    price: "310 €",
  },
  {
    title: "Polonia",
    image: krakow,
    period: '19.05-24.05',
    details: ["Vizită la Auschwitz", "Excursie la Catedrala Wawel", "Tur ghidat în Cracovia"],
    price: "460 €",
  },
  {
    title: "Medjugorje",
    image: medjugorje2,
    period: '20.06-27.06',
    details: ["Timp liber pentru rugăciune", "Vizită la crucea albastră", "Participare la procesiuni"],
    price: "340 €",
  },
  {
    title: "Medjugorje",
    image: medjugorje3,
    period: '02.08-10.08',
    details: ["Festivalul Tineretului", "Excursie la Kravice Falls", "Tur ghidat al orașului"],
    price: "1800 RON",
  },
  {
    title: "Medjugorje",
    image: medjugorje4,
    period: '31.10-06.11',
    details: ["Pelerinaj de toamnă", "Participare la liturghii speciale", "Vizită la Podbrdo"],
    price: "1550 RON",
  },
  {
    title: "Medjugorje",
    image: medjugorje5,
    period: '29.12-04.01',
    details: ["Revelion spiritual", "Participare la liturghia de Anul Nou", "Vizită la crucea albastră"],
    price: "2000 RON",
  },
];

export default function Cards() {
  return (
    <div className={styles.cardSection}>
      <h2 className={styles.title}>Pelerinajele anului 2025</h2>
      <div className={styles.cardsContent}>
        {cardData.map((card, index) => (
          <CardComp 
            key={index}
            title={card.title}
            image={card.image}
            period={card.period}
            details={card.details}
            price={card.price}
            showButton={index < 3}
          />
        ))}
      </div>
    </div>
  );
}