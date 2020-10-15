import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContactForm from './ContactForm/ContactForm';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight:"103px",
    paddingTop:"63px",

    backgroundColor:"rgba(251,208,98,1)",
    height: "70vh",
    width: "100vw"
  },
  ContactInfo: {
      justifyContent:"center"
  }

}));

export default function Contact() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} md={6} className={classes.ContactInfo}>
            <div>
           <h1>
           Let us handle your project, professionally.
           </h1>
           <p style={{textAlign: 'justify'}}>
           With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.
           </p>

            </div>
        </Grid>
        <Grid container item xs={12} md={6}>
            <ContactForm/>
        </Grid>

      </Grid>
    </div>
  );
}
