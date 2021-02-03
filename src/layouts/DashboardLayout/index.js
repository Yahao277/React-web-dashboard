import React, { useState } from 'react';
import clsx from 'clsx'
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
  },
  NavOpenWrapper:{
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    }
  },
  NavClosedWrapper:{
    [theme.breakpoints.up('lg')]:{
      paddingLeft:0,

    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isNavOpen,setNavOpen] = useState(true);

  return (
    <div className={classes.root}>
      <TopBar 
      onMobileNavOpen={() => setMobileNavOpen(true)}
      onNavOpen={() => setNavOpen(isNavOpen?false:true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        onNavClose = {() => setNavOpen(true)}
        openNavBar = {isNavOpen}
      />
      <div className={clsx(classes.wrapper,
        {[classes.NavOpenWrapper]:isNavOpen},
        {[classes.NavClosedWrapper]:!isNavOpen})}>
          
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
