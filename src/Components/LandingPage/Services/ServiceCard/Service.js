import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    boxShadow:"none !important",

    
  },
  media: {
    display: 'flex',
    flexDirection:"column",
    alignItems:"center",
    maxWidth: "100%",
    padding:"30px 0px"
  },
  img:{
    width:50 ,
    marginBottom:"20px"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.media} >
        <img  src="/images/icons/service1.png" alt="service logo" 
        className={classes.img}/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" 
          style={{textAlign:"justify", padding:"0px 20px"}}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
