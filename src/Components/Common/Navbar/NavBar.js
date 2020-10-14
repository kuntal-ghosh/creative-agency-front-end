import React, { useRef, useEffect, useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
// import userContext from "../../Context/userContext";
// import * as firebase from "../../services/firebase.auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%",
    OverflowX:"hidden",
    // width: "20%",
    // backgroundColor: "none",
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },

    "& .MuiAppBar-colorPrimary": {
      // backgroundColor: "transparent",
      // color: "black",
    },
  },

  backgroundTransparent: {
    backgroundColor: "transparent",
    color: "black",
  },
  backgroundColor: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    marginRight: "auto",
  },
  navmenus: {
    display: "flex",
    marginRight: "20px",
  },
  menu: {
    margin: theme.spacing(0, 4),
    cursor: "pointer",
  },
  button:{
    padding:"5px 15px",
    backgroundColor:"black",
    color: "rgba(251, 208, 98, 1)",
    borderRadius:"5px"
  }
}));
const NavBar = () => {
  const [navBackGround, setNavBackGround] = useState("backgroundTransparent");
  const classes = useStyles();
  const appRef = useRef(null);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  appRef.current = navBackGround;

  const [loginUser, setLoginUser] = useState();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setNavBackGround("backgroundColor");
      } else {
        setNavBackGround("backgroundTransparent");
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    // setAnchorEl(null);
    // const response = firebase.signout();
    // console.log("response delete");
    // console.log(response);
    // if (response) {
    //   console.log("response delete");
    //   console.log(response);
    //   setLoginUser({});
    // }
  };

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" style={{    padding:"10px 30px"}} className={classes[appRef.current]}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>{" "}
            </Hidden>

            <Typography
              variant="h6"
              className={classes.title}
              style={{ cursor: "pointer" }}
            >
              <img src="/images/logos/logo.png" alt="logo" width="200px" />
            </Typography>
            <Hidden mdDown>
              <Box className={classes.navmenus}>
                <Typography variant="h6" className={classes.menu}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </Typography>{" "}
                <Typography variant="h6" className={classes.menu}>
                Our Portfolio
               </Typography>{" "}
                <Typography variant="h6" className={classes.menu}>
                  Our Team
                </Typography>{" "}
                <Typography variant="h6" className={classes.menu}>
                  Contact Us
                </Typography>{" "}
                {/* <Typography variant="h6" className={classes.menu}>
                  Register
                </Typography>{" "}
                <Typography variant="h6" className={classes.menu}>
                  <Link
                    to="/admin"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Admin
                  </Link>
                </Typography> */}
              {loginUser && loginUser.displayName ? (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/my-events"
                        style={{ cursor: "pointer", textDecoration: "none" }}
                      >
                        My Events
                      </Link>
                    </MenuItem>

                    <MenuItem                    
                     className={classes.button}
                     onClick={handleLogout}>Logout
                     </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Typography variant="h6" className={classes.menu}>
                  <Link
                    to="/signin"
                    style={{ textDecoration: "none" }}
                    className={classes.button}
                  >
                    Login
                  </Link>
                </Typography>
                
              )}
             </Box>

            </Hidden>
            {/* <div>
              <Typography variant="h6" className={classes.title}>
                <img src="/logos/Group 1329.png" alt="logo" width="100px" />
              </Typography>
            </div> */}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
