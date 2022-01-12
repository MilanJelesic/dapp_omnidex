import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import {
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
  Divider,
  IconButton,
  AppBar,
  Toolbar,
  CssBaseline,
  Drawer,
  useMediaQuery,
} from "@material-ui/core";
import MediaQuery from "react-responsive";
import { Menu, ChevronLeft, Inbox, Mail, Home } from "@material-ui/icons";

import DexHomeBody from "./DexHomeBody";
import "../assets/styles/page1.css";
import logo from "../assets/images/page1/vision-logo.png";
import logo1 from "../assets/images/page1/dot-logo.png";
import swap from "../assets/sidebar/swap.png";
import bridge from "../assets/sidebar/bridge.png";
import staking from "../assets/sidebar/staking.png";
import multiChain from "../assets/sidebar/multichain.png";
import farming from "../assets/sidebar/farming.png";
import nft from "../assets/sidebar/nft.png";
import more from "../assets/sidebar/more.png";
import burgerMenu from "../assets/images/slider-icon.png";
import bsc from "../assets/images/bsc.png";
import { Routes, Route, Link } from "react-router-dom";
import Swap from "../containers/DEX/Swap";
import { ThemeContext } from "../theme/ThemeContext";
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiAppBar-colorPrimary": {
      background: "#282828",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "2rem",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexShrink: 0,
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    background: "#1a1a1a",
    width: drawerWidth,
  },
  drawerPaperLight: {
    background: "#777777",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    paddingLeft: "1rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      marginLeft: -drawerWidth,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function ResponsiveDrawer() {
  const theme1 = useContext(ThemeContext);
  const darkMode = theme1.state.darkMode;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSmallScreenDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const THEME = createTheme({
    typography: {
      fontFamily: `"Special Elite", cursive`,
    },
  });
  const drawerItem = (
    <div>
      <List>
        <Link to="/dex" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <Home style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img className="mr-2" src={swap} width={25} alt="swap" />
            </ListItemIcon>
            <ListItemText primary="Swap" />
          </ListItem>
        </Link>

        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img className="mr-2" src={bridge} width={25} alt="bridge" />
            </ListItemIcon>
            <ListItemText primary="Bridge" />
          </ListItem>
        </Link>
        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img
                className="mr-2"
                src={multiChain}
                width={25}
                alt="multichain"
              />
            </ListItemIcon>
            <ListItemText primary="Multi-Chain" />
          </ListItem>
        </Link>
        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img className="mr-2" src={staking} width={25} alt="staking" />
            </ListItemIcon>
            <ListItemText primary="Staking" />
          </ListItem>
        </Link>
        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img className="mr-2" src={farming} width={25} alt="farming" />
            </ListItemIcon>
            <ListItemText primary="Farming" />
          </ListItem>
        </Link>
        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img className="mr-2" src={nft} width={25} alt="nft" />
            </ListItemIcon>
            <ListItemText primary="NFT" />
          </ListItem>
        </Link>

        <Link to="/dex/swap" className="text-white">
          <ListItem button>
            <ListItemIcon>
              <img className="mr-2" src={more} width={25} alt="more" />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <ThemeProvider theme={THEME}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar
            className="toolBar"
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: darkMode
                ? "linear-gradient(170deg, rgba(19, 19, 19, 0.8) 0%,rgba(19, 19, 19, 0.2) 50%, transparent)"
                : "white",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={
                isSmallScreen ? handleSmallScreenDrawerToggle : handleDrawerOpen
              }
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            <div className="toolbarRight">
              <div>
                <span className="bsc_icon">
                  <img src={bsc} width={20} alt="BSC" />
                  <button
                    className="btn btn-link"
                    style={{ color: darkMode ? "#fff" : "#1e1e1e" }}
                  >
                    BSC
                  </button>
                </span>
                <MediaQuery maxWidth={480}>
                  <header id="main-header" className="header_container">
                    <div className="header_inner dapp_head_logo">
                      <Link to="/dex" className="header_brand">
                        <img src={logo1} width={45} alt="OmniDEX logo" />
                        <div className="text_vision_title">
                          <span className="text-uppercase  text_vision_title_1">Vision</span>
                          <span className="text-uppercase">Exchange</span>
                        </div>
                      </Link>
                    </div>
                  </header>
                </MediaQuery>
                <button className=" action_button  action_button2 connect_device ">
                  Connect Wallet
                </button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={isMobileOpen}
              onClose={handleSmallScreenDrawerToggle}
              classes={{
                paper: darkMode
                  ? classes.drawerPaper
                  : classes.drawerPaperLight,
              }}
            >
              {drawerItem}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: darkMode
                  ? classes.drawerPaper
                  : classes.drawerPaperLight,
              }}
              variant="persistent"
              open={open}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <img src={burgerMenu} width={30} alt="menu" />
                  {/* <ChevronLeft className="text-white"/> */}
                </IconButton>
                <img src={logo} width={170} alt="OmniDEX logo" />
              </div>
              <Divider />
              {drawerItem}
            </Drawer>
          </Hidden>
        </nav>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes>
            <Route path="/" element={<DexHomeBody />}></Route>
            <Route path="/swap" element={<Swap />}></Route>
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}
