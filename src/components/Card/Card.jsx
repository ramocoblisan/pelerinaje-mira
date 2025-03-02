import styles from './Card.module.css'
import React from 'react';
import { FaPhone } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'; 
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

export default function CardComp({ title, image, period, details, departureDate, returnDate, price, showOverlay, showMoreInfoArrow }) {

  return (
    <Card
    className={styles.customCard}
    sx={{
      position: 'relative',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      '&:hover': { transform: 'scale(1.03)' },
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    {/* Container pentru imagine și overlay */}
    <div className={styles.imageWrapper}>
      {/* Imaginea cardului */}
      <CardMedia
        className={styles.customImage}
        image={image}
        title={title}
      />
      {showMoreInfoArrow && 
      (<div className={styles.hoverIndicator}>
        <FaArrowDown className={styles.arrowIcon} />
        <span>Mai multe detalii</span>
      </div>)}
      {/* Overlay-ul care apare la hover */}
      {showOverlay && 
        (<div className={styles.overlay}>
          <Typography component="div" className={styles.overlayText}
          style={{
            fontFamily: 'DM Serif Text, serif',
            fontWeight: '500',
            fontSize: '13px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div>
              <span className={styles.text}>În preț sunt incluse următoarele:</span>
              <div>{details.join(", ")}</div>
            </div>
            <div><span className={styles.text}>Plecare:</span>
              {departureDate.map((date, index) => (
              <div key={index}>{date}</div>
              ))}
            </div>
            <div><span className={styles.text}>Întoarcere:</span>
              {returnDate.map((date, index) => (
              <div key={index}>{date}</div>
              ))}
            </div>
            <div className={styles.price}>Preț: {price}</div> {/* Prețul pe o linie separată */}
            <div className={styles.contactItems}>
              <span className={styles.registrationText}>Vă puteți înscrie prin:</span>
              <a href="tel:+40745966920" className={styles.phone}>
                <FaPhone className={styles.icon}/>
              </a>
              <a href="https://m.me/61561761496232" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" opacity="0.7" className={styles.svg}>
                <linearGradient id="SVGID_1__oLVubex7Asfc_gr1" x1="37.081" x2="10.918" y1="10.918" y2="37.081" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#60affe"></stop><stop offset=".033" stopColor="#6ab4fe"></stop>
                  <stop offset=".197" stopColor="#97cbfe"></stop><stop offset=".362" stopColor="#bddeff"></stop>
                  <stop offset=".525" stopColor="#daecff"></stop><stop offset=".687" stopColor="#eef7ff"></stop>
                  <stop offset=".846" stopColor="#fbfdff"></stop><stop offset="1" stopColor="#fff"></stop>
                </linearGradient><circle cx="24" cy="24" r="18.5" fill="url(#SVGID_1__oLVubex7Asfc_gr1)"></circle>
                <path fill="none" stroke="#2e9bfe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M34.678,39.109C31.661,41.245,27.977,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24	c0-3.009,0.718-5.849,1.992-8.361"></path>
                <path fill="none" stroke="#2e9bfe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.941,8.471C16.836,6.592,20.291,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,3.4-0.917,6.587-2.518,9.324"></path>
                <path fill="#2e9bfe" d="M17,29h4v13.235c0.979,0.16,1.976,0.265,3,0.265s2.021-0.105,3-0.265V29h3.625c0.504,0,0.93-0.376,0.992-0.876	l0.375-3c0.036-0.284-0.053-0.57-0.243-0.786C31.56,24.123,31.287,24,31,24h-4v-3.5c0-1.103,0.897-2,2-2h2c0.552,0,1-0.447,1-1	v-3.375c0-0.518-0.396-0.95-0.911-0.996C31.03,13.124,29.62,13,27.834,13C23.427,13,21,15.617,21,20.368V24h-4c-0.552,0-1,0.447-1,1	v3C16,28.553,16.448,29,17,29z"></path>
              </svg>
            </a>
            <a href="https://wa.me/40745966920" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" opacity="0.7">
                <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path>
                <path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path>
                <path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path>
                <path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
              </svg>
            </a>
            </div>
          </Typography>
        </div>)
      }
    </div>

    {/* Conținutul cardului */}
    <CardContent className={styles.contentCard} style={{paddingBottom: '16px'}}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Lilita One, serif',
          color: '#346fbb',
          fontSize: '20px',
          borderRight: '1px solid #32a1ce',
          paddingRight: '10px',
          paddingBottom: '0px',
          '@media (min-width: 768px)': {
            fontSize: '23px', 
            },
        }}
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontFamily: 'Lilita One, serif',
          color: '#346fbb',
          fontWeight: '900',
          fontSize: '20px',
          paddingBottom: '0px',
          '@media (min-width: 768px)': {
            fontSize: '23px', 
            },
        }}
      >
        {period}
      </Typography>
    </CardContent>
  </Card>
  );
}