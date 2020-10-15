import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import { Grid} from '@material-ui/core';
import FeedBackCard from './FeedBackCard/FeedBackCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:100,
      marginRight:103,
      marginLeft:63
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const FeedBack = () => {

    const classes = useStyles();

    return ( 
        <>
        <div className={classes.root}>
      <Typography variant="h5" style={{textAlign: 'center',marginBottom:"40px",fontWeight:600}}>
          Provide awesome <span style={{color:"#7AB259"}}>services</span> 
              </Typography>
        <Grid container spacing={8}>
         
          <Grid item xs={12} sm={6} lg={4}>
              <FeedBackCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
          <FeedBackCard/>
  
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
          <FeedBackCard/>
  
          </Grid>
         
        </Grid>
      </div>
          </>
     );
}
 
export default FeedBack;