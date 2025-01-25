import styles from './Card.module.css'
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  // CardActions,
  // Button
} from '@mui/material';

export default function CardComp({ title, image, period, details, price }) {

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
      {/* Overlay-ul care apare la hover */}
      <div className={styles.overlay}>
        <Typography component="div" className={styles.overlayText}>
          {details.map((detail, index) => (
            <div key={index}>{detail}</div> // Fiecare detaliu pe o linie separată
          ))}
          <div>Preț: {price}</div> {/* Prețul pe o linie separată */}
        </Typography>
      </div>
    </div>

    {/* Conținutul cardului */}
    <CardContent className={styles.contentCard}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Playfair Display, serif',
          color: '#F5C182',
          fontSize: '20px',
        }}
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontFamily: 'Playfair Display, serif',
          color: '#F5C182',
          fontWeight: '800',
          fontSize: '20px',
        }}
      >
        {period}
      </Typography>
    </CardContent>

    {/* Butonul din card */}
    {/* <CardActions>
      {showButton && (
        <Button
          size="small"
          sx={{
            fontFamily: 'DM Serif Text, serif',
            color: '#54b3d6',
            '&:hover': {
              backgroundColor: 'primary.dark',
              color: '#fff',
              transform: 'scale(1.02)',
            },
            transition: 'transform 0.3s ease-in-out',
            fontSize: '15px',
          }}
        >
          Află mai multe
        </Button>
      )}
    </CardActions> */}
  </Card>
  );
}