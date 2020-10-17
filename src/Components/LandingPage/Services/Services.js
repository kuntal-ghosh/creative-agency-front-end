import React,{ useEffect, useState, useContext} from 'react';
import Service from './ServiceCard/Service'; 
import { Grid} from '@material-ui/core';
import styles from './Services.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/api/services")
      .then((response) => response.json()
      .then((services)=>{
        console.log(services);
        setServices(services);
      }))
     
    }, [])

    return ( 
        <>
      <div className={classes.root}>
    <Typography variant="h5" style={{textAlign: 'center',marginBottom:"40px",fontWeight:600}}>
        Provide awesome <span style={{color:"#7AB259"}}>services</span> 
            </Typography>
      <Grid container spacing={8}>
       {
         services && services.map(service =>(
          <Grid key={service._id} item xs={12} sm={6} lg={4}
          onClick={()=>handleClick(service._id)}
          >
            <Link to={`/dashboard/${service._id}`}
            style={{textDecoration: 'none'}}
            >
            <Service service={service}/>

            </Link>
         </Grid>
           
        ))
       }
        
        {/* <Grid item xs={12} sm={6} lg={4}>
        <Service/>

        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Service/>

        </Grid> */}
       
      </Grid>
    </div>
        </>
     );

     function handleClick(id){
       
     }
}
 
export default Services;