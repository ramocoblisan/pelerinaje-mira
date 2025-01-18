import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css'

export default function CardComp({ title, image, period }) {
  return (
    <Card className={styles.customCard} sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', '&:hover': {transform: 'scale(1.03)'}}}>
      <CardMedia
        className={styles.customImage}
        image={image}  
        title={title}  
      />
      <CardContent className={styles.contentCard}>
        <Typography 
        gutterBottom 
        variant="h5" 
        component="div"
        sx={{fontWeight: 'bold', fontFamily: 'Playfair Display, serif', color: '#F5C182', fontSize: '20px' }}>
          {title} 
        </Typography>
        <Typography 
        gutterBottom 
        variant="h5" 
        component="div"
        sx={{fontFamily: 'Playfair Display, serif', color: '#F5C182', fontWeight:'800', fontSize: '20px' }}>
          {period} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        sx={{fontFamily: 'DM Serif Text, serif',
         color: '#54b3d6',
         '&:hover': {
        backgroundColor: 'primary.dark', 
        color: '#fff', 
        transform: 'scale(1.02)', 
        },
        transition: 'transform 0.3s ease-in-out',
         fontSize: '15px'}}>Află mai multe</Button>
      </CardActions>
    </Card>
  );
}