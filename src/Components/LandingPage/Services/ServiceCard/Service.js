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
    padding:"30px 0px",
    height:"300px"

  },
  img:{
    width:50 ,
  }
});

export default function Service(props) {
  const classes = useStyles();
  const {name,image,details}=props.service;
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.media} >
        <img  src={`data:image/png;base64,${image.img}`} 
        className={classes.img}/>
        <CardContent>
        <Typography variant="h6" color="textSecondary" component="p" 
          style={{fontWeight:"700",marginBottom:"10px",textAlign:"justify", padding:"0px 20px",display:"flex",justifyContent:"center"}}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" 
          style={{textAlign:"justify", padding:"0px 20px"}}
          >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
