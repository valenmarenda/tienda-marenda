import React from 'react';
import './Item.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Item({img, title, price, cat, pId}) {
  const classes = useStyles();
  

  return (
    <>
    <div  className="card-container">
    <Card   className={classes.root}>
      <Link  to={`/productDetail/${pId}`}>
     <div className="card-container-1">
      <CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="item-category"> 
          {cat} 
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />

        <div className="card-capa">
        <h2>Ver más</h2>
      </div>
      </CardActionArea>
      </div>
      </Link>
      <div className="card-container-2">
      <CardContent >
          <Typography variant="body2" color="textSecondary" component="p"> <span>$</span>
          {price} 
          </Typography>
        </CardContent>
      <CardActions className="card-container-buttons">
      <Link  to={`/productDetail/${pId}`}>
        <button className="icon-item-detail-shopping"><i className="fas fa-shopping-cart"></i></button>
      </Link>
        
        <button className="icon-item-detail"><i className="far fa-heart"></i></button>
        
      </CardActions>
      </div>
    </Card>
    </div>

    </>
  );
}

