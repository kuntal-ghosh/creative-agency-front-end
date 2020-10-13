import React from 'react';
import styles from './LandingPage.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { Hidden } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft:"63px",
      paddingRight:"103px",
      [theme.breakpoints.down('sm')]: {
        // backgroundColor: theme.palette.secondary.main,
        paddingLeft:"0px",
      paddingRight:"0px",
      textAlign:"center"

      },
      "& .MuiGrid-container":{
        [theme.breakpoints.down('sm')]: {
            // backgroundColor: theme.palette.secondary.main,
            justifyContent:"center",
    
          },
        //   justifyContent:"center",
      }
    },
    button:{
        padding:"5px 15px",
        backgroundColor:"black",
        color: "rgba(251, 208, 98, 1)",
        borderRadius:"5px",
        width:"100px",
        textAlign:"center"

      },
    header_text:{

        [theme.breakpoints.down('sm')]: {
            // backgroundColor: theme.palette.secondary.main,
            fontSize:"32px",
            textAlign:"center",
            alignSelf:"center"

          },
          [theme.breakpoints.up('md')]: {
            // backgroundColor: theme.palette.primary.main,
            fontSize:"32px"

          },
          [theme.breakpoints.up('lg')]: {
            // backgroundColor: green[500],
            fontSize:"48px"

          },
         
    },
    client_icon:{
        textAlign:"center"
    }
  }));
  


const LandingPage=()=>{
    const classes = useStyles();

    return(
        <>
        <header  className={styles.header}>
        <div  className={classes.root}>
        <Grid container spacing={3}>

        <Grid item xs={5}>
            <Typography className={classes.header_text} style={{fontWeight:"800"}}>
            Let’s Grow Your 
            Brand To The 
            Next Level
            </Typography>
            <Typography m={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
            </Typography>
            <div
                    
                    style={{ textDecoration: "none" }}
                    className={classes.button}
                  >
                    Hire Us
                  </div>

        </Grid>
        <Hidden smDown>
        <Grid item xs={12} sm={7}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <img src="/images/logos/Frame.png" alt="image" style={{maxWidth:"624px"}}/>
        </Grid>

        </Hidden>
        
       
      </Grid>
        </div>
    
        </header>
       <main>
           <section>
               <Grid  container spacing={2} style={{justifyContent: 'center'}}>
                   <Grid item xs={2} className={classes.client_icon}>
                    <img src="" alt=""/>
                   </Grid>
                   <Grid item xs={2} className={classes.client_icon}>
ff
                   </Grid>
                   <Grid item xs={2} className={classes.client_icon}>
ff
                   </Grid>
                   <Grid item xs={2} className={classes.client_icon}>
ff
                   </Grid>

               </Grid>
           </section>
       </main>
        </>
    );

}

export default LandingPage;