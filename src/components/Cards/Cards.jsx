import React from 'react';
import styles from './Cards.module.css';
import { useInView } from 'react-intersection-observer';
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
    details: [" transport", " cazare", " mic dejun și prânz."],
    departureDate: ["📅 21.04.2025 🕒 06:00", "📍Vivo(Polus Center) Cluj-Napoca"],
    returnDate: ["📅 27.04.2025 🕒 02:00 ", "📍Vivo(Polus Center) Cluj-Napoca"],
    price: "310 €",
  },
  {
    title: "Polonia",
    image: krakow,
    period: '19.05-24.05',
    details: [" transport", " cazare", " mic dejun și prânz."],
    departureDate: ["📅 19.05.2025 🕒 06:00", "📍Vivo(Polus Center) Cluj-Napoca"],
    returnDate: ["📅 24.05.2025 🕒 02:00", "📍Vivo(Polus Center) Cluj-Napoca"],
    price: "460 €",
  },
  {
    title: "Medjugorje",
    image: medjugorje2,
    period: '20.06-27.06',
    details: [" transport", " cazare", " mic dejun și prânz."],
    departureDate: ["📅 20.06.2025 🕒 06:00", "📍Vivo(Polus Center) Cluj-Napoca"],
    returnDate: ["📅 27.06.2025 🕒 02:00", "📍Vivo(Polus Center) Cluj-Napoca"],
    price: "340 €",
  },
  {
    title: "Medjugorje",
    image: medjugorje3,
    period: '02.08-10.08',
    details: ["Festivalul Tineretului", "Excursie la Kravice Falls", "Tur ghidat al orașului"],
    departureDate: ["Plecare: în data de 21.04.2025 ora 06:00 din parcarea Vivo(Polus Center) Cluj-Napoca"],
    returnDate: ["Întoarcere: în data de 27.04.2025 aproximativ ora 02:00 în parcarea Vivo(Polus Center) Cluj-Napoca"],
    price: "1800 RON",
  },
  {
    title: "Medjugorje",
    image: medjugorje4,
    period: '31.10-06.11',
    details: ["Pelerinaj de toamnă", "Participare la liturghii speciale", "Vizită la Podbrdo"],
    departureDate: ["Plecare: în data de 21.04.2025 ora 06:00 din parcarea Vivo(Polus Center) Cluj-Napoca"],
    returnDate: ["Întoarcere: în data de 27.04.2025 aproximativ ora 02:00 în parcarea Vivo(Polus Center) Cluj-Napoca"],
    price: "1550 RON",
  },
  {
    title: "Medjugorje",
    image: medjugorje5,
    period: '29.12-04.01',
    details: ["Revelion spiritual", "Participare la liturghia de Anul Nou", "Vizită la crucea albastră"],
    departureDate: ["Plecare: în data de 21.04.2025 ora 06:00 din parcarea Vivo(Polus Center) Cluj-Napoca"],
    returnDate: ["Întoarcere: în data de 27.04.2025 aproximativ ora 02:00 în parcarea Vivo(Polus Center) Cluj-Napoca"],
    price: "2000 RON",
  },
];

export default function Cards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${styles.cardSection} ${inView ? 'fade-in in-view' : 'fade-in'}`}>
      <h2 className={`${styles.title} ${inView ? styles.inView : ''}`}>Pelerinajele anului 2025</h2>
      <div className={styles.cardsContent}>
        {cardData.map((card, index) => (
          <CardComp
            key={index}
            title={card.title}
            image={card.image}
            showOverlay={index < 3}
            showMoreInfoArrow={index < 3}
            period={card.period}
            details={card.details}
            departureDate={card.departureDate}
            returnDate={card.returnDate}
            price={card.price}
            showButton={index < 3}
          />
        ))}
      </div>
    </div>
  );
}