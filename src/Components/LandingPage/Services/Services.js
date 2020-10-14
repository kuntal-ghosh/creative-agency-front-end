import React from 'react';
import Service from './ServiceCard/Service'; 
import { Grid} from '@material-ui/core';
import styles from './Services.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

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

const Services = () => {

    const classes = useStyles();

    return ( 
        <>
      <div className={classes.root}>
    <Typography variant="h5" style={{textAlign: 'center',marginBottom:"40px",fontWeight:600}}>
        Provide awesome <span style={{color:"#7AB259"}}>services</span> 
            </Typography>
      <Grid container spacing={8}>
       
        <Grid item xs={4}>
            <Service/>
        </Grid>
        <Grid item xs={4}>
        <Service/>

        </Grid>
        <Grid item xs={4}>
        <Service/>

        </Grid>
       
      </Grid>
    </div>
        </>
     );
}
 
export default Services;