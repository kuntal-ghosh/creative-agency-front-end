import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    
  },
  button:{
    padding:"5px 17px",
    backgroundColor:"black",
    color: "rgba(251, 208, 98, 1)",
    borderRadius:"5px",
    width:"100px",
    textAlign:"center",
    display:"inline-block",
    marginTop:"20px",
    marginLeft:"10px"

  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <Grid container>
        <Grid item xs={12} >
        <TextField id="outlined-search"
         label="Search field" 
         type="search" 
         variant="outlined"
         style={{width: '80%',backgroundColor:"white"}}
         />
        </Grid>
        <Grid item xs={12} >
        <TextField id="outlined-search"
         label="Search field" 
         type="search" 
         variant="outlined"
         style={{width: '80%',backgroundColor:"white"}}
          />
            </Grid> 
        <Grid item xs={12} >
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          style={{width: '80%',backgroundColor:"white"}}
        />
        </Grid>

        <Grid item xs={12} >
        <Typography
            className={classes.button}
                  >
                    Send
                  </Typography>
        </Grid>
        
        

        

          
        
      </Grid>
    </form>
  );
}
